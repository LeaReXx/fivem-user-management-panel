import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL as string,
    plugins: [
inferAdditionalFields<typeof auth>()
  ]
});
export type Session = typeof authClient.$Infer.Session;
