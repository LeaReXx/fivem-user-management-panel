"use client";
import React, { useState } from "react";
import Input from "../shared/Input";
import WideButton from "../shared/WideButton";
import { BadgePlus, Eye, EyeOff, Link, UserPlus } from "lucide-react";

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPassword(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // Handle login logic here
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
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
      <div className="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="رمز عبور"
          disabled={loading}
          extendClassName="pe-12"
          icon="key-round"
        />
        <button
          type="button"
          disabled={loading}
          onClick={toggleShowPassword}
          className="absolute top-1/2 opacity-70 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-default -translate-y-1/2 left-2 cursor-pointer hover:bg-main-box-background py-1 px-1.5 rounded-sm"
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      </div>
      <div>
        <Input
          id="password"
          type="password"
          placeholder="تکرار رمز عبور"
          disabled={loading}
          icon="key-round"
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
