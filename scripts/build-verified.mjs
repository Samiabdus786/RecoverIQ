import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const bin = join(root, "node_modules", "vinext", "dist", "cli.js");

if (!existsSync(bin)) {
  console.error(
    "vinext is unavailable. Run npm install before building.",
  );
  process.exit(69);
}

const timeoutMs = Number(process.env.SITES_BUILD_TIMEOUT_MS ?? 180000);
const child = spawn(process.execPath, [bin, "build"], {
  cwd: root,
  env: process.env,
  shell: false,
  stdio: "inherit",
});

const timer = setTimeout(() => {
  console.error(`Build exceeded ${timeoutMs}ms; terminating vinext.`);
  child.kill("SIGTERM");
}, timeoutMs);

child.on("exit", (code, signal) => {
  clearTimeout(timer);
  if (signal) {
    console.error(`vinext build stopped by ${signal}.`);
    process.exit(1);
  }
  process.exit(code ?? 0);
});
