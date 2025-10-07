"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import WideButton from "../shared/WideButton";
import { Brain, LogIn } from "lucide-react";
import Link from "next/link";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<LoginFormData>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);

      // Handle successful login here
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const onError = () => {
    setLoading(false); // Make sure loading is false on validation error
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-3 mt-14"
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
      <div>
        <Input
          {...register("password", {
            required: "رمز عبور الزامی است",
            minLength: {
              value: 6,
              message: "رمز عبور باید حداقل ۶ کاراکتر باشد",
            },
          })}
          type="password"
          placeholder="رمز عبور"
          disabled={loading}
          icon="key-round"
          error={errors.password?.message}
        />
      </div>
      <WideButton
        type="submit"
        text="ورود"
        extendedClassName="bg-[#28976A] hover:bg-[#21815A]"
        disabled={loading || isSubmitting}
        loading={loading || isSubmitting}
      >
        <LogIn size={26} strokeWidth={1.5} />
      </WideButton>
      <Link
        href="/forgot-password"
        className="flex gap-1 opacity-80 hover:opacity-100 cursor-pointer text-sm"
      >
        <Brain size={18} strokeWidth={1.5} /> <span>فراموشی رمز عبور</span>
      </Link>
    </form>
  );
};

export default LoginForm;
