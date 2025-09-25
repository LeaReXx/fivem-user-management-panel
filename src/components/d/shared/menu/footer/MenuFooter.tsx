import { LogOut } from "lucide-react";
import UserProfile from "../../user profile/UserProfile";
("react");

const MenuFooter: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-normal items-end w-full h-[15%] pb-4">
      <div className="hidden lg:block">
        <UserProfile />
      </div>

      <button className="flex cursor-pointer lg:hidden items-center gap-6 text-white opacity-80 bg-red-500/20 hover:bg-red-500/60 p-3 rounded-lg transition-colors w-full">
        <LogOut size={20} />
        <span>خروج از حساب</span>
      </button>
    </div>
  );
};

export default MenuFooter;
