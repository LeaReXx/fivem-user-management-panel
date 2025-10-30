import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { customSession } from "better-auth/plugins";
import redis from "./redis"; // اضافه شده

const prisma = new PrismaClient();

export const auth = betterAuth({
  plugins: [
    customSession(async ({ user, session }) => {
      const { ...userWithoutName } = user;
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
      trustedProviders: ["discord"],
      allowUnlinkingAll: true,
      updateUserInfoOnLink: true,
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

  // ✅ Redis Secondary Storage
  secondaryStorage: {
    get: async (key) => {
      return await redis.get(key);
    },
    set: async (key, value, ttl) => {
      if (ttl) {
        await redis.set(key, value, { EX: ttl });
      } else {
        await redis.set(key, value);
      }
    },
    delete: async (key) => {
      await redis.del(key);
    },
  },
});
