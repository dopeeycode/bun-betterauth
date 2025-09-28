import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { openAPI } from "better-auth/plugins"

import { db } from "./database/client"
 
export const auth = betterAuth({
  basePath: "/auth",
  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true
  }),
  plugins: [openAPI()],
  advanced: {
    database: {
      generateId: false
    }
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    password: {
      hash: (password: string) => Bun.password.hash(password),
      verify: ({ password, hash }) => Bun.password.verify(password, hash)
    }
  }
})