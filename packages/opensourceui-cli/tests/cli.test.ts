import { afterEach, describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { addComponents } from "../src/add";
import { detectProject } from "../src/detect-project";
import { resolveItem } from "../src/registry";

const dirs: string[] = [];
function fixture(pkg: object = {}): string {
  const root = mkdtempSync(join(tmpdir(), "opensourceui-test-"));
  dirs.push(root);
  writeFileSync(join(root, "package.json"), JSON.stringify({ name: "fixture", ...pkg }));
  return root;
}
afterEach(() => dirs.splice(0).forEach((dir) => rmSync(dir, { recursive: true, force: true })));

describe("registry", () => {
  test("resolves canonical names and aliases", () => {
    expect(resolveItem("tactile-3d")?.name).toBe("tactile-3d");
    expect(resolveItem("3d-button")?.name).toBe("tactile-3d");
    expect(resolveItem("button")?.name).toBe("tactile-3d");
  });
});
describe("project detection", () => {
  test("uses src layout and shadcn aliases", () => {
    const root = fixture();
    mkdirSync(join(root, "src"));
    writeFileSync(join(root, "components.json"), JSON.stringify({ aliases: { ui: "@/design/ui", lib: "@/shared" } }));
    const project = detectProject(root);
    expect(project.componentDir).toBe("src/design/ui");
    expect(project.libDir).toBe("src/shared");
    expect(project.libAlias).toBe("@/shared");
  });
});
describe("add", () => {
  test("dry run does not write files", async () => {
    const root = fixture();
    const result = await addComponents(["3d-button"], { cwd: root, dryRun: true, install: false });
    expect(result.items).toEqual(["tactile-3d"]);
    expect(existsSync(join(root, "components/ui/tactile-3d.tsx"))).toBe(false);
  });
  test("writes components, rewrites aliases, and blocks overwrite", async () => {
    const root = fixture();
    await addComponents(["tactile-3d"], { cwd: root, install: false });
    const target = join(root, "components/ui/tactile-3d.tsx");
    expect(readFileSync(target, "utf8")).toContain('from "@/lib/cn"');
    await expect(addComponents(["tactile-3d"], { cwd: root, install: false })).rejects.toThrow("Refusing to overwrite");
  });
  test("deduplicates shared files for multiple components", async () => {
    const root = fixture();
    const result = await addComponents(["tactile-3d", "tactile-3d-icon"], { cwd: root, dryRun: true, install: false });
    expect(result.files.length).toBe(3);
  });
});
