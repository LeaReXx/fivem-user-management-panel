"use server";

import { headers } from "next/headers";
import type { DiscordAccountInfo } from "@/types/discord.types";

export async function getDiscordAccount(): Promise<DiscordAccountInfo> {
  const incoming = await headers();

  const headerObject: Record<string, string> = {};
  for (const [key, value] of incoming.entries()) {
    if (typeof value === "string" && value.length > 0) {
      headerObject[key] = value;
    }
  }

  const forwardedHeaders: Record<string, string> = {};
  if (headerObject.authorization)
    forwardedHeaders.authorization = headerObject.authorization;
  if (headerObject.cookie) forwardedHeaders.cookie = headerObject.cookie;

  forwardedHeaders["x-from-server"] = "true";

  const response = await fetch(
    `${process.env.BETTER_AUTH_URL}/api/get-social-accounts/discord`,
    {
      headers: forwardedHeaders,
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Discord account: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();

  if (!data) {
    throw new Error("No data received from server");
  }

  return data;
}
