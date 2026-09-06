import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Registry, RegistryItem } from "./types";

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
export function loadRegistry(): Registry {
  return JSON.parse(readFileSync(join(packageRoot, "registry/index.json"), "utf8"));
}
export function resolveItem(query: string, registry = loadRegistry()): RegistryItem | undefined {
  const normalized = query.toLowerCase().trim();
  return registry.items.find((item) => item.name === normalized || item.aliases.includes(normalized));
}
export function sourcePath(path: string): string { return join(packageRoot, "registry", path); }
