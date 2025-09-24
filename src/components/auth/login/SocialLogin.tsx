"use client";
import React from "react";
import WideButton from "../shared/WideButton";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const SocialLogin: React.FC = () => {
  const discordLoginOnClick = async () => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "/d",
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
