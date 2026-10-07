import { copyFile, mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { renderToString } from "react-dom/server";
import { App } from "./src/App";

const appDirectory = import.meta.dir;
const outputDirectory = join(appDirectory, "..", "preview");
const imagesDirectory = join(appDirectory, "src", "imgs");
const outputImagesDirectory = join(outputDirectory, "imgs");
const publishedImages = new Set(["flor.png", "luces.png", "topa.png", "sitio.png", "disco.png"]);

await mkdir(outputImagesDirectory, { recursive: true });
await writeFile(
  join(outputDirectory, "index.html"),
  `<!DOCTYPE html>${renderToString(<App />)}`,
);

for (const image of await readdir(imagesDirectory)) {
  if (publishedImages.has(image)) {
    await copyFile(join(imagesDirectory, image), join(outputImagesDirectory, image));
  }
}

console.log(`GitHub Pages preview generated at ${outputDirectory}`);
