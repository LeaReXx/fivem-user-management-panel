import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { DiscordAccountInfo, DiscordUser } from "@/types/discord.types";

async function fetchDiscordUser(accessToken: string): Promise<DiscordUser> {
  const response = await fetch("https://discord.com/api/v10/users/@me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Failed to fetch Discord user:", errorText);
    throw new Error(`Discord API error: ${response.status}`);
  }

  return await response.json();
}

export async function GET() {
  try {
    // Get current session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 },
      );
    }

    // Get Discord account from database
    const account = await prisma.account.findFirst({
      where: {
        userId: session.user.id,
        providerId: "discord",
      },
    });

    if (!account) {
      return NextResponse.json(
        { error: "Discord account not connected" },
        { status: 404 },
      );
    }

    // Get access token using better-auth's built-in method
    const tokenResponse = await auth.api.getAccessToken({
      body: {
        providerId: "discord",
      },
      headers: await headers(),
    });

    if (!tokenResponse?.accessToken) {
      throw new Error("Failed to get access token");
    }

    // Fetch Discord user info
    const discordUser = await fetchDiscordUser(tokenResponse.accessToken);

    const data: DiscordAccountInfo = {
      provider: "discord",
      user: discordUser,
      connectedAt: account.createdAt,
      scopes: account.scope ? account.scope.split(" ") : [],
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in GET /api/social-accounts/discord:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
