"use client";
import { getDiscordAccount } from "@/actions/page/d/settings/get-social-accounts";
import { Link } from "lucide-react";
import { useEffect, useState } from "react";

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
  avatar_decoration_data?: {
    asset: string;
    sku_id: string;
    expires_at?: number;
  } | null;
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

const getAvatarDecorationUrl = (asset: string) => {
  return `https://cdn.discordapp.com/avatar-decoration-presets/${asset}.png`;
};

const SocialConnections = () => {
  const [userDiscord, setUserDiscord] = useState<DiscordAccountInfo | null>(
    null,
  );

  useEffect(() => {
    const getUserDiscord = async () => {
      const result = await getDiscordAccount();
      const discordAccount: DiscordAccountInfo | null =
        result.success && result.data ? result.data : null;
      console.log(discordAccount);
      setUserDiscord(discordAccount);
    };
    getUserDiscord();
  }, []);
  return (
    <div className="bg-inside-box-bg-color col-span-12 md:col-span-6 rounded-lg p-4">
      <div className="pb-4 flex justify-between items-center">
        <p className="flex gap-2 font-medium">
          <Link size={22} strokeWidth={1.5} /> اتصالات
        </p>
      </div>

      <div>
        {userDiscord ? (
          <div
            dir="ltr"
            className="relative overflow-hidden rounded-lg  border border-main-text-color/10"
          >
            {/* Nameplate Background */}
            {userDiscord.user.collectibles?.nameplate && (
              <div className="absolute top-0 left-0 size-full opacity-40">
                <video
                  src={getNameplateUrl(userDiscord.user.collectibles.nameplate)}
                  autoPlay
                  muted
                  loop
                  className="size-full object-right object-cover"
                />
              </div>
            )}

            <div className="relative flex items-center gap-4 p-4 bg-main-bg-color/80">
              <div className="relative w-16 h-16 aspect-square">
                <img
                  src={getDiscordAvatarUrl(userDiscord.user)}
                  alt={userDiscord.user.username}
                  className=" rounded-full object-cover"
                />
                {userDiscord.user.avatar_decoration_data && (
                  <div className="aspect-square absolute w-19 h-19 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <img
                      src={getAvatarDecorationUrl(
                        userDiscord.user.avatar_decoration_data.asset,
                      )}
                      alt="Avatar Decoration"
                      className=" object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <h3 className="font-semibold">
                      {userDiscord.user.global_name ||
                        userDiscord.user.username}
                    </h3>{" "}
                    <p className="text-sm text-main-text-color/70">
                      @{userDiscord.user.username}
                      {userDiscord.user.discriminator !== "0" &&
                        `#${userDiscord.user.discriminator}`}
                    </p>
                  </div>
                </div>

                {userDiscord.user.email && (
                  <p className="text-sm text-main-text-color/60 mt-1">
                    {userDiscord.user.email}
                  </p>
                )}
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
