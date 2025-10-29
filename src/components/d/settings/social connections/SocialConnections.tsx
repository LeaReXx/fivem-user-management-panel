"use client";
import { Link } from "lucide-react";
import Image from "next/image";
import SocialConnectionsSkeleton from "@/components/loading/page/d/settings/social connections skeleton/SocialConnectionsSkeleton";
import {
  getAvatarDecorationUrl,
  getDiscordAvatarUrl,
  getNameplateUrl,
} from "@/lib/discord";
import { useSocialAccountsStore } from "@/stores/social-accounts-store";

const SocialConnections = () => {
  const { isLoading, discordAccount } = useSocialAccountsStore();

  if (isLoading) {
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
        {discordAccount ? (
          <div
            dir="ltr"
            className="relative overflow-hidden rounded-lg border border-main-text-color/10"
          >
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
                  className="size-full object-right object-contain"
                />
              </div>
            )}

            <div className="relative flex items-center gap-4 p-2 bg-main-bg-color/80">
              <div className="relative w-14 h-14 aspect-square">
                <Image
                  src={getDiscordAvatarUrl(discordAccount.user)}
                  alt={discordAccount.user.username}
                  fill
                  className="rounded-full object-cover"
                  placeholder="empty"
                  unoptimized
                />
                {discordAccount.user.avatar_decoration_data && (
                  <div className="aspect-square absolute w-17 h-17 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <Image
                      src={getAvatarDecorationUrl(
                        discordAccount.user.avatar_decoration_data.asset,
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
                  {discordAccount.user.global_name ||
                    discordAccount.user.username}
                </h3>
                {discordAccount.user.email && (
                  <p className="text-sm text-main-text-color/60">
                    {discordAccount.user.email}
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
