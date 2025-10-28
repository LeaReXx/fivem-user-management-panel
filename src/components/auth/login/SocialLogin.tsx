"use client";
import Image from "next/image";
import { useQueryState } from "nuqs";
import type React from "react";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import WideButton from "../shared/WideButton";

const SocialLogin: React.FC = () => {
  const [callBackUrl] = useQueryState("callbackurl");

  const discordLoginOnClick = async () => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: callBackUrl || "/d",
    });
  };
  return (
    <div className="w-full flex">
      <WideButton
        type="button"
        text="ورود با دیسکورد"
        onClick={discordLoginOnClick}
        extendedClassName="bg-[#5865F2] hover:bg-[#4752C4]"
      >
        <Image src="/discord.svg" alt="Discord Logo" width={26} height={26} />
      </WideButton>
    </div>
  );
};

export default SocialLogin;
