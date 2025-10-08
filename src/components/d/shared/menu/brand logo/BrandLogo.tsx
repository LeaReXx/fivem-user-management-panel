"use client";
import { useThemeStore } from "@/stores/theme-store";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const BrandLogo: React.FC = () => {
  const [logoPath, setLogoPath] = React.useState<string | null>(null);
  const pathname = usePathname();
  const { isDark } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", isDark);
    }

    if (pathname === "/") {
      setLogoPath("/logo.png");
      return;
    }
    setLogoPath(isDark ? "/logo.png" : "/logo-dark.png");
  }, [isDark, mounted]);

  return (
    <div className="mx-auto">
      {logoPath && (
        <Image
          src={logoPath}
          alt="Logo"
          className="md:w-40"
          width={150}
          height={100}
          quality={50}
        />
      )}
    </div>
  );
};
export default BrandLogo;
