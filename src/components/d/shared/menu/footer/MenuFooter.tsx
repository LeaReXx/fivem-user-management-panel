import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import UserProfile from "../../user profile/UserProfile";

const MenuFooter: React.FC = () => {
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
    <div className="flex justify-center md:justify-normal items-end w-full h-[15%] pb-4">
      <div className="hidden lg:block">
        <UserProfile />
      </div>

      <button
        type="button"
        onClick={onClickLogout}
        className="flex cursor-pointer lg:hidden items-center gap-6 text-white opacity-80 bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-colors w-full"
      >
        <LogOut size={20} />
        <span>خروج از حساب</span>
      </button>
    </div>
  );
};

export default MenuFooter;
