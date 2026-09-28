import { rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function clean() {
    try {
        await rm(path.join(rootDir, "dist"), {
            recursive: true,
            force: true,
            maxRetries: 5,
            retryDelay: 300,
        });
    } catch {
        // İkinci bir deneme veya sessiz geçiş
    }
}

clean();
