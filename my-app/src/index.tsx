import { renderToString } from "react-dom/server";
import { App } from "./App";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const pathname = new URL(req.url).pathname;
    const imageName = pathname.match(/^\/imgs\/([a-z0-9_-]+\.png)$/i)?.[1];

    if (imageName) {
      const image = Bun.file(new URL(`./imgs/${imageName}`, import.meta.url));

      if (await image.exists()) {
        return new Response(image, {
          headers: { "Content-Type": "image/png" },
        });
      }
    }

    const html = renderToString(<App />);

    return new Response(`<!DOCTYPE html>${html}`, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  },
});

console.log(`🚀 Servidor de Bodas activo en http://localhost:${server.port}`);