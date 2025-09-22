"use client";
import React, { useState } from "react";
import Input from "../shared/Input";
import WideButton from "../shared/WideButton";
import { AtSign, Brain } from "lucide-react";
import SuccessResetPassword from "./SuccessResetPassword";

const ForgotPasswordForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [successResetPassword, setSuccessResetPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessResetPassword(true);
    }, 2000);
    // Handle login logic here
  };

  return (
    <>
      {successResetPassword ? (
        <SuccessResetPassword />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-12">
          <div>
            <Input
              id="username"
              type="text"
              icon="mail"
              placeholder="ایمیل"
              disabled={loading}
            />
          </div>
          <p className="flex gap-1 opacity-80 text-sm">
            <Brain size={18} strokeWidth={1.5} />
            <span>برای بازگردانی کلمه عبور ایمیل خود را وارد کنید</span>
          </p>
          <WideButton
            type="submit"
            text="ارسال ایمیل"
            extendedClassName="bg-[#28976A] hover:bg-[#21815A] mt-2"
            disabled={loading}
            loading={loading}
          >
            <AtSign size={26} strokeWidth={1.5} />
          </WideButton>
        </form>
      )}
    </>
  );
};

export default ForgotPasswordForm;
