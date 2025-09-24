import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { PrismaClient } from "@prisma/client";
import { customSession } from "better-auth/plugins";

const prisma = new PrismaClient();
export const auth = betterAuth({
  plugins: [
    customSession(async ({ user, session }) => {
      const { name, ...userWithoutName } = user;

      return {
        user: {
          ...userWithoutName,
        },
        session,
      };
    }),
  ],
  emailAndPassword: {
    enabled: true,
  },
  user: {
    fields: {
      name: "firstName",
    },
    additionalFields: {
      firstName: {
        type: "string",
        required: false,
        default: "",
      },
      lastName: {
        type: "string",
        required: false,
        default: "",
      },
    },
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["discord"],
      allowDifferentEmails: true,
      allowUnlinkingAll: true,
    },
  },
  socialProviders: {
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});
