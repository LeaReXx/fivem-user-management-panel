"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";
import { useThemeStore } from "@/stores/theme-store";

const BrandLogo: React.FC = () => {
  const [logoPath, setLogoPath] = React.useState<string | null>(null);
  const pathname = usePathname();
  const { isDark } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", isDark);
    }

    if (pathname === "/") {
      setLogoPath("/logo.png");
      return;
    }
    setLogoPath(isDark ? "/logo.png" : "/logo-dark.png");
  }, [isDark, mounted, pathname]);

  return (
    <div className="mx-auto">
      {logoPath && (
        <Image
          src={logoPath}
          alt="Logo"
          className="md:w-40"
          loading="eager"
          width={150}
          height={50}
          quality={70}
        />
      )}
    </div>
  );
};
export default BrandLogo;
