export type RegistryFile = { source: string; target: string; kind: "component" | "lib" };
export type RegistryItem = {
  name: string; title: string; description: string; aliases: string[];
  dependencies: string[]; files: RegistryFile[]; sourceUrl: string; license: string;
};
export type Registry = { version: number; items: RegistryItem[] };
export type Project = {
  root: string; packageManager: "bun" | "pnpm" | "yarn" | "npm";
  componentDir: string; libDir: string; componentAlias: string; libAlias: string;
  dependencies: Record<string, string>;
};
