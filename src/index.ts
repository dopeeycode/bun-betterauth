import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi"
import { betterAuthPlugin, OpenAPI } from "./http/plugins/better-auth"; 
import cors from "@elysiajs/cors";

const app = new Elysia()
  .use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  )
  .use(
    openapi({
        documentation: {
            components: await OpenAPI.components,
            paths: await OpenAPI.getPaths()
        }
    })
  )
  .use(betterAuthPlugin)
  .get("/", () => "Access /openapi for API documentation")
  .listen(3333)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
