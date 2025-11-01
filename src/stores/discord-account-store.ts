import { create } from "zustand";
import { getDiscordAccount } from "@/actions/page/d/settings/fetch-discord-account";
import { authClient } from "@/lib/auth-client";
import type { DiscordAccountInfo } from "@/types/discord.types";

interface SocialAccountsState {
  discordAccount: DiscordAccountInfo | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchDiscordAccount: () => Promise<void>;
  clearDiscordAccount: () => void;
  clearError: () => void;
}

export const useSocialAccountsStore = create<SocialAccountsState>((set) => ({
  discordAccount: null,
  isLoading: true,
  error: null,

  fetchDiscordAccount: async () => {
    set({ isLoading: true, error: null });

    try {
      const { data: getLinkedAccounts } = await authClient.listAccounts();
      
      const isConnectedDiscord = getLinkedAccounts?.some(
        (account) => account.providerId === "discord",
      );

      if (!isConnectedDiscord) {
        set({ isLoading: false, error: null, discordAccount: null });
        return;
      }

      const data = await getDiscordAccount();

      set({
        discordAccount: data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to fetch Discord account";

      set({
        isLoading: false,
        error: errorMessage,
        discordAccount: null,
      });
    }
  },

  clearDiscordAccount: () => {
    set({ discordAccount: null, error: null });
  },

  clearError: () => {
    set({ error: null });
  },
}));
