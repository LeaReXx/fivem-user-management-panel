"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getDiscordAvatarUrl } from "@/lib/discord";
import { useSocialAccountsStore } from "@/stores";

const UserProfile: React.FC = () => {
  const { isLoading, fetchDiscordAccount, discordAccount } =
    useSocialAccountsStore();

  useEffect(() => {
    fetchDiscordAccount();
  }, [fetchDiscordAccount]);

  const avatarUrl = discordAccount?.user
    ? getDiscordAvatarUrl(discordAccount.user)
    : "https://cdn.discordapp.com/embed/avatars/0.png";

  if (isLoading) return <Skeleton className="w-[200px] h-[52px]" />;

  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full w-12 h-12 overflow-hidden relative">
        <Image
          src={avatarUrl}
          alt="Profile"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="lg:space-y-1">
        <p className="font-light opacity-90">
          {discordAccount?.user?.username || ""}
        </p>
        <span className="text-sm opacity-70">ثبت نام در 28 مرداد 1404</span>
      </div>
    </div>
  );
};

export default UserProfile;
