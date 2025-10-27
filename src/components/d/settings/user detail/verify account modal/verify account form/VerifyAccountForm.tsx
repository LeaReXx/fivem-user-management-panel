"use client";

import { useState } from "react";
import SubmitInfoForm from "./submit info form/SubmitInfoForm";
import SubmitVerificationForm from "./submit verification form/SubmitVerificationForm";

interface UserInfoForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface VerificationForm {
  code: string;
}

const VerifyAccountForm = () => {
  const [step, setStep] = useState<"info" | "verification">("info");
  const [userInfo, setUserInfo] = useState<UserInfoForm | null>(null);

  const handleSubmitInfo = (data: UserInfoForm) => {
    setUserInfo(data);
    setStep("verification");
    // اینجا می‌توانید کد را به سرور ارسال کنید
    console.log("ارسال کد به شماره:", data.phoneNumber);
  };

  const handleSubmitVerification = (data: VerificationForm) => {
    // اینجا می‌توانید کد تایید را به سرور ارسال کنید
    console.log("کد تایید:", data.code);
    console.log("اطلاعات کاربر:", userInfo);
    // پس از تایید موفق، می‌توانید modal را ببندید یا اقدامات بعدی را انجام دهید
  };

  const handleBackToInfo = () => {
    setStep("info");
  };

  const handleResendCode = () => {
    console.log("ارسال مجدد کد");
    // اینجا می‌توانید درخواست ارسال مجدد کد را به سرور ارسال کنید
  };

  return (
    <div className="flex flex-col items-center justify-center w-full" dir="rtl">
      {step === "info" ? (
        <SubmitInfoForm onSubmit={handleSubmitInfo} />
      ) : (
        <SubmitVerificationForm
          phoneNumber={userInfo?.phoneNumber || ""}
          onSubmit={handleSubmitVerification}
          onBack={handleBackToInfo}
          onResend={handleResendCode}
        />
      )}
    </div>
  );
};

export default VerifyAccountForm;
