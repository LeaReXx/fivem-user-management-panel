import LoginForm from "@/components/auth/login/LoginForm";
import SocialLogin from "@/components/auth/login/SocialLogin";
import AuthHeader from "@/components/auth/shared/AuthHeader";
import { UserPlus } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center">
      <div className="bg-secondary-box-background/90 rounded-2xl w-[95%] max-w-[350px] p-3 mx-auto flex items-center justify-center">
        <div className="bg-gradient-to-t border border-white/10 from-secondary-box-background/90 pb-8 to-main-box-background/90 w-full h-full rounded-xl p-2">
          <AuthHeader title="ورود با ایمیل">
            <Link
              href="/register"
              className="flex gap-1 opacity-80 hover:opacity-100 cursor-pointer"
            >
              <UserPlus size={22} strokeWidth={1.5}  />
              ثبت نام
            </Link>
          </AuthHeader>
          <LoginForm />
          <div className="flex items-center w-full opacity-70 gap-3 my-6 text-xl font-medium justify-center">
            <hr className="w-full border-white/30 border-1" />
            یا
            <hr className="w-full border-white/30 border-1" />
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}
