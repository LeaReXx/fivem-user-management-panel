"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getDiscordAvatarUrl } from "@/lib/discord";
import { useSocialAccountsStore } from "@/stores";
import { authClient } from "@/lib/auth-client";

const UserProfile: React.FC = () => {
  const { isLoading, fetchDiscordAccount, discordAccount } =
    useSocialAccountsStore();

  const { data: session } = authClient.useSession();

  useEffect(() => {
    fetchDiscordAccount();
  }, [fetchDiscordAccount]);

  const avatarUrl = discordAccount?.user
    ? getDiscordAvatarUrl(discordAccount.user)
    : "https://cdn.discordapp.com/embed/avatars/0.png";

  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full w-12 h-12 overflow-hidden relative">
        {isLoading ? (
          <Skeleton className="size-full" />
        ) : (
          <Image
            src={avatarUrl}
            alt="Profile"
            fill
            className="object-cover"
            unoptimized
          />
        )}
      </div>
      <div className="lg:space-y-1">
        <p className="font-light opacity-90">
          {session?.user.firstName || <Skeleton className="w-20 h-5" />}
        </p>
        <span className="text-sm opacity-70">بدون اشتراک</span>
      </div>
    </div>
  );
};

export default UserProfile;
