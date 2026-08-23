import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const npmCommand = "npm";
const npxCommand = "npx";

function run(step, label, command, args) {
  console.log(`\n[${step}/3] ${label}`);
  const isWindows = process.platform === "win32";
  const executable = isWindows ? process.env.ComSpec ?? "cmd.exe" : command;
  const commandArgs = isWindows ? ["/d", "/s", "/c", [command, ...args].join(" ")] : args;
  const result = spawnSync(executable, commandArgs, { stdio: "inherit" });

  if (result.error) {
    console.error(`\nFAILED: ${result.error.message}`);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`\nFAILED: ${label}`);
    process.exit(result.status ?? 1);
  }
}

console.log("GitHub Actions deploy check");
run(1, "Install dependencies", npmCommand, ["ci", "--include=dev"]);
run(2, "Build with Vite", npxCommand, ["--no-install", "vite", "build"]);

console.log("\n[3/3] Check deployment artifact");
if (!existsSync("dist/client/index.html")) {
  console.error("FAILED: dist/client/index.html was not generated");
  process.exit(1);
}

console.log("Artifact found: dist/client/index.html");
console.log("\nDEPLOY CHECK PASSED");
