import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi"
import { z } from "zod"

const app = new Elysia()
  .use(openapi())
  .get("/", () => "Hello World")
  .get("/user/:id", ({ params }) => {
    return {
      id: params.id,
      name: "John Doe"
    }
  }, {
    detail: {
      summary: "Get user by ID",
      description: "Returns a user object based on the provided user ID."
    },
    params: z.object({
      id: z.string()
    }), 
    response: {
      200: z.object({
        id: z.string(),   
        name: z.string()
      })
    }
  })
  .listen(3333)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
