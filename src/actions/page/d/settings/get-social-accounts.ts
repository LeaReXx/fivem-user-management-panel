"use server";
import { headers } from "next/headers";
import type { DiscordAccountInfo } from "@/types/discord.types";

export async function getDiscordAccount(): Promise<DiscordAccountInfo> {
  const response = await fetch(
    `${process.env.BETTER_AUTH_URL}/api/get-social-accounts/discord`,
    {
      headers: await headers(),
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
