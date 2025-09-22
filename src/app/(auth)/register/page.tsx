import RegisterForm from "@/components/auth/register/RegisterForm";
import AuthHeader from "@/components/auth/shared/AuthHeader";
import { LogIn } from "lucide-react";
import Link from "next/link";
import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center">
      <div className="bg-secondary-box-background/90 rounded-2xl w-[95%] max-w-[350px] p-3 mx-auto flex items-center justify-center">
        <div className="bg-gradient-to-t border border-white/10 from-secondary-box-background/90 pb-3 to-main-box-background/90 w-full h-full rounded-xl p-2">
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
