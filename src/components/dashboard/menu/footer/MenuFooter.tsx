import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useEffect } from "react";
("react");

const MenuFooter: React.FC = () => {
  useEffect(() => {
    const getUserSession = async () => {
      const { data: session } = await authClient.getSession();
      console.log("User session:", session);
    };
    getUserSession();
  }, []);
  return (
    <div className="flex justify-center md:justify-normal items-end w-full h-[15%] pb-4">
      <div className="hidden md:flex items-center gap-2 ">
        <div className="rounded-full w-14 overflow-hidden">
          <img src="/profile.jpg" alt="Profile" className="w-full" />
        </div>
        <div className="space-y-1">
          <p className="text-lg font-light opacity-90">سپهر آقاپور</p>
          <span className="text-sm opacity-70">ثبت نام در 28 مرداد 1404</span>
        </div>
      </div>

      <button className="flex cursor-pointer md:hidden items-center gap-6 text-white opacity-80 bg-red-500/20 hover:bg-red-500/60 p-3 rounded-lg transition-colors w-full">
        <LogOut size={20} />
        <span>خروج از حساب</span>
      </button>
    </div>
  );
};

export default MenuFooter;
