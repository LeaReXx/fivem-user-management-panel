"use client";
import { useThemeStore } from "@/stores/theme-store";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useState } from "react";

const BrandLogo: React.FC = () => {
  const [logoPath, setLogoPath] = React.useState<string>("/logo-dark.png");

  const { isDark } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", isDark);
    }
    setLogoPath(isDark ? "/logo.png" : "/logo-dark.png");
  }, [isDark, mounted]);

  return (
    <div className="mx-auto">
      <Image
        src={logoPath}
        alt="Logo"
        className="md:w-40"
        width={150}
        height={100}
        quality={50}
      />
    </div>
  );
};
export default BrandLogo;
