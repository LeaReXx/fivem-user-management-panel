"use client";
import { BadgePlus } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import WideButton from "../shared/WideButton";

type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const password = watch("password");

  const onSubmit = (data: RegisterFormData) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // Handle register logic here
  };

  return (
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
      <div>
        <Input
          {...register("password", {
            required: "رمز عبور الزامی است",
            minLength: {
              value: 8,
              message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message:
                "رمز عبور باید شامل حداقل یک حرف کوچک، یک حرف بزرگ و یک عدد باشد",
            },
          })}
          type="password"
          placeholder="رمز عبور"
          disabled={loading}
          icon="key-round"
          error={errors.password?.message}
        />
      </div>
      <div>
        <Input
          {...register("confirmPassword", {
            required: "تکرار رمز عبور الزامی است",
            validate: (value) =>
              value === password || "رمزهای عبور مطابقت ندارند",
          })}
          type="password"
          placeholder="تکرار رمز عبور"
          disabled={loading}
          icon="key-round"
          error={errors.confirmPassword?.message}
        />
      </div>
      <WideButton
        type="submit"
        text="ثبت نام"
        extendedClassName="bg-[#28976A] hover:bg-[#21815A] mt-8"
        disabled={loading}
        loading={loading}
      >
        <BadgePlus size={26} strokeWidth={1.5} />
      </WideButton>
    </form>
  );
};

export default RegisterForm;
