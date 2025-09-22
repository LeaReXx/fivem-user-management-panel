import React from "react";
import WideButton from "../shared/WideButton";
import Image from "next/image";

const SocialLogin: React.FC = () => {
  return (
    <div className="w-full flex">
      <WideButton
        text="ورود با دیسکورد"
        extendedClassName="bg-[#5865F2] hover:bg-[#4752C4]"
      >
        <Image src="/discord.svg" alt="Discord Logo" width={26} height={26} />
      </WideButton>
    </div>
  );
};

export default SocialLogin;
