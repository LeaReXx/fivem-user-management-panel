"use client";
import { authClient } from "@/lib/auth-client";
import { useNavbarStore } from "@/stores";
import { LogOut, Menu, Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserProfile from "../user profile/UserProfile";
import WalletInfo from "../wallet info/WalletInfo";
import { useThemeStore } from "@/stores/theme-store";

const DashboardHeader = () => {
  const { toggleNavbar } = useNavbarStore();
  const { isDark, toggleTheme } = useThemeStore();
  const router = useRouter();

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
    <div className="flex justify-between items-center bg-gradient-to-t from-page-header-bg-color-1 to-page-header-bg-color-2 backdrop-blur-[2px] rounded-lg h-18 pe-4 ps-2">
      <div className="lg:hidden">
        <UserProfile />
      </div>
      <div className="hidden lg:block">
        <WalletInfo />
      </div>

      <div className="flex gap-1 lg:gap-2">
        <button
          onClick={toggleTheme}
          className="cursor-pointer p-2 rounded-lg hover:bg-inside-box-bg-color/50 transition-transform duration-200 ease-in-out"
          title={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? <Sun strokeWidth={1.5} /> : <Moon strokeWidth={1.5} />}
        </button>
        <button
          onClick={toggleNavbar}
          className="lg:hidden cursor-pointer p-2 rounded-lg hover:bg-inside-box-bg-color/50"
        >
          <Menu strokeWidth={1.5} />
        </button>
        <button
          className="hidden lg:flex items-center gap-2 justify-center cursor-pointer p-2 hover:bg-inside-box-bg-color/50 rounded-md"
          onClick={onClickLogout}
        >
          <LogOut strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
