"use client";
import React, { useState } from "react";
import Input from "../shared/Input";
import WideButton from "../shared/WideButton";
import { LogIn } from "lucide-react";

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-14">
      <div>
        <Input
          id="username"
          type="text"
          icon="mail"
          placeholder="ایمیل"
          disabled={loading}
        />
      </div>
      <div>
        <Input
          id="password"
          type="password"
          placeholder="رمز عبور"
          disabled={loading}
          icon="key-round"
        />
      </div>
      <WideButton
        type="submit"
        text="ورود"
        extendedClassName="bg-[#28976A] hover:bg-[#21815A]"
        disabled={loading}
        loading={loading}
      >
        <LogIn size={26} strokeWidth={1.5} />
      </WideButton>
    </form>
  );
};

export default LoginForm;
