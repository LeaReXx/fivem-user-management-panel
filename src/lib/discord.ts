import type { DiscordNameplate, DiscordUser } from "@/types/discord.types";

const getDiscordAvatarUrl = (user: DiscordUser) => {
  if (user.avatar) {
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`;
  }

  // Default avatar based on user ID
  const defaultNum = parseInt(user.id, 10) % 5;
  return `https://cdn.discordapp.com/embed/avatars/${defaultNum}.png`;
};

const getNameplateUrl = (nameplate: DiscordNameplate) => {
  // Discord nameplate CDN URL format
  return `https://cdn.discordapp.com/assets/collectibles/${nameplate.asset}asset.webm`;
};

const getAvatarDecorationUrl = (asset: string) => {
  return `https://cdn.discordapp.com/avatar-decoration-presets/${asset}.png`;
};

export { getDiscordAvatarUrl, getNameplateUrl, getAvatarDecorationUrl };
