import { copyFile, mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { renderToString } from "react-dom/server";
import { App } from "./src/App";

const appDirectory = import.meta.dir;
const outputDirectory = join(appDirectory, "..", "preview");
const imagesDirectory = join(appDirectory, "src", "imgs");
const galleryDirectory = join(appDirectory, "src", "gallery");
const outputImagesDirectory = join(outputDirectory, "imgs");
const outputGalleryDirectory = join(outputDirectory, "gallery");
const publishedImages = new Set(["flor.png", "luces.png", "topa.png", "sitio.png", "disco.png"]);

await mkdir(outputImagesDirectory, { recursive: true });
await mkdir(outputGalleryDirectory, { recursive: true });
await writeFile(
  join(outputDirectory, "index.html"),
  `<!DOCTYPE html>${renderToString(<App />)}`,
);

for (const image of await readdir(imagesDirectory)) {
  if (publishedImages.has(image)) {
    await copyFile(join(imagesDirectory, image), join(outputImagesDirectory, image));
  }
}

for (const image of await readdir(galleryDirectory)) {
  if (/\.jpe?g$/i.test(image)) {
    await copyFile(join(galleryDirectory, image), join(outputGalleryDirectory, image));
  }
}

console.log(`GitHub Pages preview generated at ${outputDirectory}`);
