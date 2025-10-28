"use client";
import { AtSign, Brain } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import WideButton from "../shared/WideButton";
import SuccessResetPassword from "./SuccessResetPassword";

type ForgotPasswordFormData = {
  email: string;
};

const ForgotPasswordForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [successResetPassword, setSuccessResetPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();

  const onSubmit = (_data: ForgotPasswordFormData) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccessResetPassword(true);
    }, 2000);
    // Handle forgot password logic here
  };

  return (
    <>
      {successResetPassword ? (
        <SuccessResetPassword />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-12"
        >
          <div>
            <Input
              {...register("email", {
                required: "ایمیل الزامی است",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "فرمت ایمیل نامعتبر است",
                },
              })}
              type="email"
              icon="mail"
              placeholder="ایمیل"
              disabled={loading}
              error={errors.email?.message}
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
