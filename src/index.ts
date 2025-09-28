import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi"
import { betterAuthPlugin, OpenAPI } from "./http/plugins/better-auth"; 

const app = new Elysia()
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
