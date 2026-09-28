import { execFileSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { homedir, platform } from "node:os";
import path from "node:path";
import puppeteer from "puppeteer";

const executablePath = puppeteer.executablePath();

if (!existsSync(executablePath)) {
  rmSync(path.join(homedir(), ".cache", "puppeteer", "chrome"), {
    recursive: true,
    force: true,
  });

  execFileSync(
    platform() === "win32" ? "npx.cmd" : "npx",
    ["puppeteer", "browsers", "install", "chrome"],
    { shell: platform() === "win32", stdio: "inherit" },
  );
}