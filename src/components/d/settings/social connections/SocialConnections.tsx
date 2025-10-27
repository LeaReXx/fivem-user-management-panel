import { getDiscordAccount } from "@/actions/page/d/settings/get-social-accounts";
import { Link } from "lucide-react";

interface DiscordNameplate {
  sku_id: string;
  asset: string;
  label: string;
  palette: string;
}

interface DiscordCollectibles {
  nameplate?: DiscordNameplate;
}

interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  global_name: string | null;
  avatar: string | null;
  email?: string | null;
  collectibles?: DiscordCollectibles;
}

interface DiscordAccountInfo {
  provider: "discord";
  user: DiscordUser;
  connectedAt: Date;
  scopes: string[];
}

const getDiscordAvatarUrl = (user: DiscordUser) => {
  if (user.avatar) {
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`;
  }
  // Default avatar based on discriminator or user ID
  const defaultNum = user.discriminator
    ? parseInt(user.discriminator) % 5
    : parseInt(user.id) % 5;
  return `https://cdn.discordapp.com/embed/avatars/${defaultNum}.png`;
};

const getNameplateUrl = (nameplate: DiscordNameplate) => {
  // Discord nameplate CDN URL format
  return `https://cdn.discordapp.com/assets/collectibles/${nameplate.asset}asset.webm`;
};

const SocialConnections = async () => {
  const result = await getDiscordAccount();

  const discordAccount: DiscordAccountInfo | null =
    result.success && result.data ? result.data : null;

  return (
    <div className="bg-inside-box-bg-color col-span-12 md:col-span-6 rounded-lg p-4">
      <div className="pb-4 flex justify-between items-center">
        <p className="flex gap-2 font-medium">
          <Link size={22} strokeWidth={1.5} /> اتصالات
        </p>
      </div>

      <div>
        {discordAccount ? (
          <div dir="ltr" className="relative overflow-hidden rounded-lg  border border-main-text-color/10">
            {/* Nameplate Background */}
            {discordAccount.user.collectibles?.nameplate && (
              <div className="absolute top-0 left-0 size-full opacity-40">
                <video
                  src={getNameplateUrl(
                    discordAccount.user.collectibles.nameplate,
                  )}
                  autoPlay
                  muted
                  loop
                  className="size-full object-right object-cover"
                />
              </div>
            )}

            {/* Discord Logo Background (fallback or overlay) */}
            {!discordAccount.user.collectibles?.nameplate && (
              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2">
                <svg
                  className="w-15 h-15 opacity-30"
                  fill="#5865F2"
                  viewBox="0 0 127.14 96.36"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
              </div>
            )}

            <div className="relative flex items-center gap-4 p-4 bg-main-bg-color/80">
              <img
                src={getDiscordAvatarUrl(discordAccount.user)}
                alt={discordAccount.user.username}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <h3 className="font-semibold">
                      {discordAccount.user.global_name ||
                        discordAccount.user.username}
                    </h3>{" "}
                    <p className="text-sm text-main-text-color/70">
                      @{discordAccount.user.username}
                      {discordAccount.user.discriminator !== "0" &&
                        `#${discordAccount.user.discriminator}`}
                    </p>
                  </div>
                </div>

                {discordAccount.user.email && (
                  <p className="text-sm text-main-text-color/60 mt-1">
                    {discordAccount.user.email}
                  </p>
                )}
                <p className="text-xs text-main-text-color/50 mt-2">
                  متصل شده در:{" "}
                  {new Date(discordAccount.connectedAt).toLocaleDateString(
                    "fa-IR",
                  )}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-500 text-xs rounded-full">
                  متصل
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-main-text-color/60 text-sm">
              هیچ حساب اجتماعی متصل نشده است
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialConnections;
