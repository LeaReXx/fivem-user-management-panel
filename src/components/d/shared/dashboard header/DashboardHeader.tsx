"use client";
import { authClient } from "@/lib/auth-client";
import { useNavbarStore } from "@/stores";
import { LogOut, Menu, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import UserProfile from "../user profile/UserProfile";
import WalletInfo from "../wallet info/WalletInfo";

const DashboardHeader = () => {
  const { toggleNavbar } = useNavbarStore();
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
    <div className="flex justify-between items-center bg-gradient-to-t from-secondary-box-background/90 to-main-box-background/90 backdrop-blur-[2px] rounded-lg h-18 pe-4 ps-2">
      <div className="lg:hidden">
        <UserProfile />
      </div>
      <button
        onClick={toggleNavbar}
        className="lg:hidden cursor-pointer text-white p-2 rounded-lg hover:bg-white/20"
      >
        <Menu size={24} />
      </button>
      <div className="hidden lg:block">
        <WalletInfo />
      </div>
      <div className="hidden lg:flex lg:space-x-2">
        <button
          className="flex items-center gap-2 justify-center cursor-pointer p-2 hover:bg-white/10 rounded-md"
          onClick={onClickLogout}
        >
          <LogOut strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};
export default DashboardHeader;
