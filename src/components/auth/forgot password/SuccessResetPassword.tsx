import { ArrowLeft, BadgeCheck, Info } from "lucide-react";
import React from "react";
import WideButton from "../shared/WideButton";
import { useRouter } from "next/navigation";

const SuccessResetPassword: React.FC = () => {
  const router = useRouter();
  const handleBackToLogin = () => {
    router.push("/");
  };
  return (
    <div className="mt-4">
      <BadgeCheck
        size={50}
        fill="white"
        strokeWidth={2.5}
        color="green"
        className="mx-auto"
      />
      <p className="font-medium mt-2 text-center">
        ایمیل بازگردانی کلمه عبور با موفقیت ارسال شد
      </p>
      <div className="bg-[#4A5300] px-2 py-1 rounded-sm mt-2 text-sm flex gap-1">
        <Info size={22} className="inline" />
        <span>در صورت عدم وجود ایمیل در Inbox پوشه Spam را چک کنید</span>
      </div>
      <WideButton
        type="submit"
        text="بازگشت به صفحه ورود"
        extendedClassName="bg-[#28976A] hover:bg-[#21815A] mt-4"
        onClick={handleBackToLogin}
      >
        <ArrowLeft size={26} strokeWidth={1.5} />
      </WideButton>
    </div>
  );
};

export default SuccessResetPassword;
