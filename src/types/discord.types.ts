export interface DiscordNameplate {
  sku_id: string;
  asset: string;
  label: string;
  palette: string;
}

export interface DiscordCollectibles {
  nameplate?: DiscordNameplate;
}

export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  global_name: string | null;
  avatar: string | null;
  avatar_decoration_data?: {
    asset: string;
    sku_id: string;
    expires_at?: number;
  } | null;
  email?: string | null;
  collectibles?: DiscordCollectibles;
}

export interface DiscordAccountInfo {
  provider: "discord";
  user: DiscordUser;
  connectedAt: Date;
  scopes: string[];
}
