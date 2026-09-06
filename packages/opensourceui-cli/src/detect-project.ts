import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import type { Project } from "./types";

function readJson(path: string): any {
  try { return JSON.parse(readFileSync(path, "utf8")); } catch { return undefined; }
}
function findRoot(start: string): string {
  let current = resolve(start);
  while (true) {
    if (existsSync(join(current, "package.json"))) return current;
    const parent = dirname(current);
    if (parent === current) throw new Error("No package.json found. Run this command inside a JavaScript project.");
    current = parent;
  }
}
function stripAlias(value: string | undefined, fallback: string, hasSrc: boolean): string {
  if (!value) return fallback;
  const stripped = value.replace(/^@\//, "").replace(/^~\//, "");
  return hasSrc && !stripped.startsWith("src/") ? `src/${stripped}` : stripped;
}

export function detectProject(start = process.cwd(), pathOverride?: string): Project {
  const root = findRoot(start);
  const pkg = readJson(join(root, "package.json")) ?? {};
  const shadcn = readJson(join(root, "components.json"));
  const hasSrc = existsSync(join(root, "src"));
  const defaultComponents = hasSrc ? "src/components/ui" : "components/ui";
  const defaultLib = hasSrc ? "src/lib" : "lib";
  const componentDir = pathOverride ?? stripAlias(shadcn?.aliases?.ui, defaultComponents, hasSrc);
  const libDir = stripAlias(shadcn?.aliases?.lib, defaultLib, hasSrc);
  const packageManager = existsSync(join(root, "bun.lock")) || existsSync(join(root, "bun.lockb")) ? "bun"
    : existsSync(join(root, "pnpm-lock.yaml")) ? "pnpm"
    : existsSync(join(root, "yarn.lock")) ? "yarn" : "npm";
  return {
    root, packageManager, componentDir, libDir,
    componentAlias: shadcn?.aliases?.ui ?? `@/${componentDir}`,
    libAlias: shadcn?.aliases?.lib ?? `@/${libDir}`,
    dependencies: { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) },
  };
}
