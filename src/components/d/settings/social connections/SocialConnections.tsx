"use client";
import { Link } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getDiscordAccount } from "@/actions/page/d/settings/get-social-accounts";
import SocialConnectionsSkeleton from "@/components/loading/page/d/settings/social connections skeleton/SocialConnectionsSkeleton";
import type {
  DiscordAccountInfo,
  DiscordNameplate,
  DiscordUser,
} from "@/types/discord.types";

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

const SocialConnections = () => {
  const [userDiscord, setUserDiscord] = useState<DiscordAccountInfo | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserDiscord = async () => {
      setLoading(true);
      const result = await getDiscordAccount();
      const discordAccount = result.success && result.data ? result.data : null;
      setUserDiscord(discordAccount);
      setLoading(false);
    };
    getUserDiscord();
  }, []);

  if (loading) {
    return <SocialConnectionsSkeleton />;
  }

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
            className="relative overflow-hidden rounded-lg border border-main-text-color/10"
          >
            {/* Nameplate Background */}
            {userDiscord.user.collectibles?.nameplate && (
              <div className="absolute top-0 left-0 size-full opacity-40">
                <video
                  src={getNameplateUrl(userDiscord.user.collectibles.nameplate)}
                  autoPlay
                  muted
                  loop
                  className="size-full object-right object-contain"
                />
              </div>
            )}

            <div className="relative flex items-center gap-4 p-2 bg-main-bg-color/80">
              <div className="relative w-14 h-14 aspect-square">
                <Image
                  src={getDiscordAvatarUrl(userDiscord.user)}
                  alt={userDiscord.user.username}
                  fill
                  className="rounded-full object-cover"
                  placeholder="empty"
                  unoptimized
                />
                {userDiscord.user.avatar_decoration_data && (
                  <div className="aspect-square absolute w-17 h-17 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <Image
                      src={getAvatarDecorationUrl(
                        userDiscord.user.avatar_decoration_data.asset,
                      )}
                      fill
                      alt="Avatar Decoration"
                      className=" object-cover"
                      unoptimized
                    />
                  </div>
                )}
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold">
                  {userDiscord.user.global_name || userDiscord.user.username}
                </h3>
                {userDiscord.user.email && (
                  <p className="text-sm text-main-text-color/60">
                    {userDiscord.user.email}
                  </p>
                )}
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
