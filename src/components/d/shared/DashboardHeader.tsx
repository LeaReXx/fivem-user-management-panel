"use client";
import { authClient } from "@/lib/auth-client";
import { useNavbarStore } from "@/stores";
import { LogOut, Menu } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardHeader = () => {
  const { toggleNavbar } = useNavbarStore();
  const router = useRouter();
  const onClickLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to home page
        },
      },
    });
  };
  return (
    <div className="flex justify-between items-center bg-gradient-to-t from-secondary-box-background/90 to-main-box-background/90 rounded-xl p-2">
      <button
        onClick={toggleNavbar}
        className="lg:hidden cursor-pointer text-white p-2 rounded-lg hover:bg-white/20"
      >
        <Menu size={24} />
      </button>
      <div>
        <button
          className="flex items-center gap-2 cursor-pointer"
          onClick={onClickLogout}
        >
          <LogOut strokeWidth={1.5} />
          <span>خروج از حساب</span>
        </button>
      </div>
    </div>
  );
};
export default DashboardHeader;
