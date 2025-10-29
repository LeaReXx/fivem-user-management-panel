"use client";
import { LogOut, Menu, Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";
import { useNavbarStore } from "@/stores";
import { useThemeStore } from "@/stores/theme-store";
import UserProfile from "../user profile/UserProfile";
import WalletInfo from "../wallet info/WalletInfo";

const DashboardHeader = () => {
  const { toggleNavbar } = useNavbarStore();
  const { isDark, toggleTheme } = useThemeStore();
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onClickLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <div className="flex justify-between items-center bg-linear-to-t from-page-header-bg-color-1 to-page-header-bg-color-2 backdrop-blur-[2px] rounded-lg h-18 pe-4 ps-2">
      <div className="lg:hidden">
        <UserProfile />
      </div>

      <div className="hidden lg:block">
        <Suspense fallback={<Skeleton className="w-[200px] h-[52px]" />}>
          <WalletInfo />
        </Suspense>
      </div>

      <div className="flex gap-1 lg:gap-2">
        <button
          type="button"
          onClick={toggleTheme}
          className="cursor-pointer p-2 rounded-lg hover:bg-input-color/50 transition-transform duration-200 ease-in-out"
          title={`Switch to ${isMounted && isDark ? "light" : "dark"} mode`}
        >
          {isMounted && isDark ? (
            <Sun strokeWidth={1.5} />
          ) : (
            <Moon strokeWidth={1.5} />
          )}
        </button>
        <button
          type="button"
          onClick={toggleNavbar}
          className="lg:hidden cursor-pointer p-2 rounded-lg hover:bg-input-color/50"
        >
          <Menu strokeWidth={1.5} />
        </button>
        <button
          type="button"
          className="hidden lg:flex items-center gap-2 justify-center cursor-pointer p-2 hover:bg-input-color/50 rounded-md"
          onClick={onClickLogout}
        >
          <LogOut strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
