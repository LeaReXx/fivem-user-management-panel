"use client";
import type { Session } from "better-auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import bowser from "bowser";
import { Skeleton } from "@/components/ui/skeleton";
import { Monitor, Smartphone, Tablet, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function SessionsItem({ session }: { session: Session }) {
  const { ipAddress, userAgent } = session;
  const [uaParsed, setUaParsed] = useState<bowser.Parser.ParsedResult | null>(
    null,
  );
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [isLoadingCountry, setIsLoadingCountry] = useState(true);

  useEffect(() => {
    if (userAgent) {
      const parsedUserAgent = bowser.parse(userAgent);
      console.log(parsedUserAgent);
      setUaParsed(parsedUserAgent);
    }
  }, [userAgent]);

  useEffect(() => {
    const getIpInfo = async () => {
      try {
        const response = await fetch(
          `https://free.freeipapi.com/api/json/${ipAddress}`,
        );
        const data = await response.json();
        setCountryCode(data.countryCode || null);
      } catch (error) {
        console.error("Error fetching IP info:", error);
        setCountryCode(null);
      } finally {
        setIsLoadingCountry(false);
      }
    };
    if (ipAddress) {
      getIpInfo();
    }
  }, [ipAddress]);

  const getPlatformIcon = () => {
    if (!uaParsed?.platform?.type) {
      return <Monitor size={30} />;
    }

    const platformType = uaParsed.platform.type;

    switch (platformType) {
      case "desktop":
        return <Monitor size={30} />;
      case "mobile":
        return <Smartphone size={30} />;
      case "tablet":
        return <Tablet size={30} />;
      default:
        return <Monitor size={30} />;
    }
  };

  return (
    <div
      dir="ltr"
      className="bg-content-box-bg-color-2 border border-gray-500/10 shadow-sm rounded-md p-2 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="p-5 rounded-full bg-inside-box-bg-color">
          {getPlatformIcon()}
        </div>
        <div className="flex-1">
          <p className="font-medium">
            {uaParsed?.os?.name || "Unknown OS"} -{" "}
            {uaParsed?.browser?.name || "Unknown Browser"}
          </p>
          <div className="flex items-center gap-2 mt-1">
            {isLoadingCountry ? (
              <Skeleton className="rounded-md w-4 h-4" />
            ) : countryCode ? (
              <Image
                src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                alt={countryCode}
                width={16}
                height={16}
                className="rounded-sm"
                unoptimized
              />
            ) : null}
            <p className="text-sm opacity-70">{ipAddress}</p>
          </div>
        </div>
      </div>
      <Button variant="ghost" className="opacity-70 hover:opacity-100 ms-2 w-8! h-8! hover:bg-gray-500/20 rounded-full cursor-pointer">
        <X className="size-6" />
      </Button>
    </div>
  );
}

export default SessionsItem;
