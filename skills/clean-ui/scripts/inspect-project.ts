#!/usr/bin/env bun

import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(process.argv[2] ?? process.cwd());
function json(path: string): Record<string, any> | undefined {
  try { return JSON.parse(readFileSync(path, "utf8")); } catch { return undefined; }
}
const pkg = json(join(root, "package.json")) ?? {};
const deps = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) };
const shadcn = json(join(root, "components.json"));
const tsconfig = json(join(root, "tsconfig.json")) ?? json(join(root, "jsconfig.json"));
const candidates = ["src/components/ui", "components/ui", "src/app/globals.css", "app/globals.css", "src/index.css"];
const sourceGlob = new Bun.Glob("**/*.{ts,tsx,js,jsx,css,scss,md,mdx}");
const sourceFiles = [...sourceGlob.scanSync({ cwd: root, onlyFiles: true, dot: false })]
  .filter((path) => !path.startsWith("node_modules/") && !path.startsWith(".next/") && !path.startsWith("dist/") && !path.startsWith("build/"));
const routes = sourceFiles.filter((path) => /(^|\/)(src\/)?(app\/(.*\/)?(page|layout)|pages\/.*|routes\/.*)\.(t|j)sx?$/.test(path));
const components = sourceFiles.filter((path) => /(^|\/)components\//.test(path) && /\.(t|j)sx?$/.test(path));
const stylesheets = sourceFiles.filter((path) => /\.(css|scss)$/.test(path));
const recognizedUiDependencies = [
  "@radix-ui/react-dialog", "@base-ui/react", "@headlessui/react", "lucide-react",
  "motion", "framer-motion", "cuelume", "class-variance-authority", "tailwindcss",
].filter((name) => deps[name]);
console.log(JSON.stringify({
  root,
  framework: deps.next ? "next" : deps.vite ? "vite" : deps.react ? "react" : "unknown",
  language: existsSync(join(root, "tsconfig.json")) ? "typescript" : "javascript-or-unknown",
  styling: deps.tailwindcss ? "tailwind" : "unknown",
  componentDirectory: shadcn?.aliases?.ui ?? candidates.slice(0, 2).find((path) => existsSync(join(root, path))) ?? null,
  aliases: shadcn?.aliases ?? tsconfig?.compilerOptions?.paths ?? {},
  baseSystem: shadcn ? "shadcn" : "unknown",
  motionLibrary: deps.motion ? "motion" : deps["framer-motion"] ? "framer-motion" : null,
  existingPaths: candidates.filter((path) => existsSync(join(root, path))),
  inventory: {
    sourceFileCount: sourceFiles.length,
    routes,
    components,
    stylesheets,
  },
  recognizedUiDependencies,
  scripts: pkg.scripts ?? {},
}, null, 2));
