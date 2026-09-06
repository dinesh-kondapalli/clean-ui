import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { detectProject } from "./detect-project";
import { loadRegistry, resolveItem, sourcePath } from "./registry";
import type { Project, RegistryItem } from "./types";

export type AddOptions = { cwd?: string; path?: string; overwrite?: boolean; dryRun?: boolean; install?: boolean };
export type AddResult = { project: Project; items: string[]; files: string[]; dependencies: string[]; dryRun: boolean };

function destination(project: Project, file: RegistryItem["files"][number]): string {
  return join(project.root, file.kind === "lib" ? project.libDir : project.componentDir, file.target);
}
function renderSource(project: Project, filePath: string): string {
  return readFileSync(sourcePath(filePath), "utf8").replaceAll("__LIB_ALIAS__", project.libAlias);
}
async function installDependencies(project: Project, dependencies: string[]): Promise<void> {
  if (dependencies.length === 0) return;
  const commands = {
    bun: ["bun", "add", ...dependencies], pnpm: ["pnpm", "add", ...dependencies],
    yarn: ["yarn", "add", ...dependencies], npm: ["npm", "install", ...dependencies],
  } as const;
  const proc = Bun.spawn([...commands[project.packageManager]], { cwd: project.root, stdout: "inherit", stderr: "inherit" });
  const exitCode = await proc.exited;
  if (exitCode !== 0) throw new Error(`Dependency installation failed with exit code ${exitCode}.`);
}

export async function addComponents(names: string[], options: AddOptions = {}): Promise<AddResult> {
  if (names.length === 0) throw new Error("Name at least one component to add.");
  const registry = loadRegistry();
  const items = names.map((name) => {
    const item = resolveItem(name, registry);
    if (!item) throw new Error(`Unknown component: ${name}. Run \"opensourceui list\" to see available components.`);
    return item;
  });
  const project = detectProject(options.cwd, options.path);
  const uniqueFiles = new Map<string, { file: RegistryItem["files"][number]; target: string }>();
  for (const item of items) for (const file of item.files) {
    const target = destination(project, file);
    uniqueFiles.set(target, { file, target });
  }
  const plannedFiles = [...uniqueFiles.values()];
  // Existing utility files are project infrastructure; reuse them instead of replacing them.
  const writableFiles = plannedFiles.filter(({ file, target }) => file.kind !== "lib" || !existsSync(target));
  const collisions = writableFiles.filter(({ target }) => existsSync(target));
  if (collisions.length > 0 && !options.overwrite) {
    throw new Error(`Refusing to overwrite existing files:\n${collisions.map(({ target }) => `  ${target}`).join("\n")}\nPass --overwrite to replace them.`);
  }
  const dependencies = [...new Set(items.flatMap((item) => item.dependencies))].filter((dependency) => !project.dependencies[dependency]);
  if (!options.dryRun) {
    for (const { file, target } of writableFiles) {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, renderSource(project, file.source));
    }
    if (options.install !== false) await installDependencies(project, dependencies);
  }
  return { project, items: items.map((item) => item.name), files: writableFiles.map(({ target }) => target), dependencies, dryRun: options.dryRun ?? false };
}
