"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  global_name: string | null;
  avatar: string | null;
  avatar_decoration_data: any | null;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string | null;
  accent_color?: number | null;
  locale?: string;
  verified?: boolean;
  email?: string | null;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
}

interface DiscordAccountInfo {
  provider: "discord";
  user: DiscordUser;
  connectedAt: Date;
  scopes: string[];
}

async function fetchDiscordUser(
  accessToken: string,
): Promise<DiscordUser | null> {
  try {
    const response = await fetch("https://discord.com/api/v10/users/@me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch Discord user:", await response.text());
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Discord user:", error);
    return null;
  }
}

export async function getDiscordAccount(): Promise<{
  success: boolean;
  data?: DiscordAccountInfo;
  error?: string;
}> {
  try {
    // Get current session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: "User not authenticated",
      };
    }

    // Get Discord account from database
    const account = await prisma.account.findFirst({
      where: {
        userId: session.user.id,
        providerId: "discord",
      },
    });

    if (!account) {
      return {
        success: false,
        error: "Discord account not connected",
      };
    }

    // Get access token using better-auth's built-in method
    // This automatically handles token refresh if needed
    const tokenResponse = await auth.api.getAccessToken({
      body: {
        providerId: "discord",
      },
      headers: await headers(),
    });

    if (!tokenResponse || !tokenResponse.accessToken) {
      return {
        success: false,
        error: "Failed to get access token",
      };
    }

    // Fetch Discord user info
    const discordUser = await fetchDiscordUser(tokenResponse.accessToken);
    if (!discordUser) {
      return {
        success: false,
        error: "Failed to fetch Discord user information",
      };
    }

    return {
      success: true,
      data: {
        provider: "discord",
        user: discordUser,
        connectedAt: account.createdAt,
        scopes: account.scope ? account.scope.split(" ") : [],
      },
    };
  } catch (error) {
    console.error("Error in getDiscordAccount:", error);
    return {
      success: false,
      error: "Internal server error",
    };
  }
}
