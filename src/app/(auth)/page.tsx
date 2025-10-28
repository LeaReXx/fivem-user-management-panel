import { UserPlus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import LoginForm from "@/components/auth/login/LoginForm";
import SocialLogin from "@/components/auth/login/SocialLogin";
import AuthHeader from "@/components/auth/shared/AuthHeader";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoginPage() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="bg-content-box-bg-color-1 rounded-2xl w-[95%] max-w-[350px] p-3 mx-auto flex items-center justify-center">
        <div className="bg-linear-to-t border border-white/10 from-content-box-bg-color-1 to-content-box-bg-color-2 w-full h-full rounded-xl p-4">
          <AuthHeader title="ورود با ایمیل">
            <Link
              href="/register"
              className="flex gap-1 opacity-80 hover:opacity-100 cursor-pointer"
            >
              <UserPlus size={22} strokeWidth={1.5} />
              ثبت نام
            </Link>
          </AuthHeader>
          <LoginForm />
          <div className="flex items-center w-full opacity-70 gap-3 my-6 text-xl font-medium justify-center">
            <hr className="w-full border-main-text-color/40 border" />
            یا
            <hr className="w-full border-main-text-color/40 border" />
          </div>

          <Suspense fallback={<Skeleton className="w-full h-[45px]" />}>
            <SocialLogin />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
