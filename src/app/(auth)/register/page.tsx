import { LogIn } from "lucide-react";
import Link from "next/link";
import type React from "react";
import RegisterForm from "@/components/auth/register/RegisterForm";
import AuthHeader from "@/components/auth/shared/AuthHeader";

const RegisterPage: React.FC = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="bg-content-box-bg-color-1 rounded-2xl w-[95%] max-w-[350px] p-3 mx-auto flex items-center justify-center">
        <div className="bg-linear-to-t border border-white/10 from-content-box-bg-color-1 to-content-box-bg-color-2 w-full h-full rounded-xl p-4">
          <AuthHeader title="ثبت نام">
            <Link
              href="/"
              className="flex gap-1 opacity-80 hover:opacity-100 cursor-pointer items-center"
            >
              <LogIn size={22} strokeWidth={1.5} />
              ورود
            </Link>
          </AuthHeader>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
