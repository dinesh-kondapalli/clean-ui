#!/usr/bin/env bun

import { addComponents } from "./add";
import { detectProject } from "./detect-project";
import { loadRegistry, resolveItem } from "./registry";

const argv = process.argv.slice(2);
const command = argv.shift();
function value(flag: string): string | undefined { const index = argv.indexOf(flag); return index >= 0 ? argv[index + 1] : undefined; }
function positionals(): string[] {
  const result: string[] = [];
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--path") index += 1;
    else if (!argv[index].startsWith("-")) result.push(argv[index]);
  }
  return result;
}
function help(): void {
  console.log(`opensourceui — install editable UI components

Usage:
  opensourceui add <component...> [--path <dir>] [--dry-run] [--overwrite] [--no-install]
  opensourceui <component...>      Shorthand for add
  opensourceui list
  opensourceui search <query>
  opensourceui info <component>
  opensourceui doctor`);
}

async function main(): Promise<void> {
  if (!command || command === "help" || command === "--help" || command === "-h") return help();
  const registry = loadRegistry();
  if (command === "list") {
    for (const item of registry.items) console.log(`${item.name.padEnd(18)} ${item.description}`);
    return;
  }
  if (command === "search") {
    const query = positionals().join(" ").toLowerCase();
    const matches = registry.items.filter((item) => [item.name, item.title, item.description, ...item.aliases].join(" ").toLowerCase().includes(query));
    for (const item of matches) console.log(`${item.name.padEnd(18)} ${item.description}`);
    if (matches.length === 0) process.exitCode = 1;
    return;
  }
  if (command === "info") {
    const item = resolveItem(positionals()[0] ?? "", registry);
    if (!item) throw new Error("Unknown component.");
    console.log(JSON.stringify(item, null, 2));
    return;
  }
  if (command === "doctor") { console.log(JSON.stringify(detectProject(process.cwd(), value("--path")), null, 2)); return; }
  const names = command === "add" ? positionals() : [command, ...positionals()];
  const result = await addComponents(names, {
    path: value("--path"), dryRun: argv.includes("--dry-run"),
    overwrite: argv.includes("--overwrite"), install: !argv.includes("--no-install"),
  });
  console.log(`${result.dryRun ? "Would add" : "Added"}: ${result.items.join(", ")}`);
  for (const file of result.files) console.log(`  ${file}`);
  if (result.dependencies.length) console.log(`${result.dryRun ? "Would install" : "Installed"}: ${result.dependencies.join(", ")}`);
}
main().catch((error) => { console.error(error instanceof Error ? error.message : error); process.exitCode = 1; });
