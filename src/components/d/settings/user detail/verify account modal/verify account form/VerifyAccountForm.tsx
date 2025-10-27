"use client";

import { Alert } from "@/components/ui/alert";
import Input from "@/components/ui/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";

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

  const {
    register: registerInfo,
    handleSubmit: handleSubmitInfo,
    formState: { errors: errorsInfo },
  } = useForm<UserInfoForm>();

  const {
    register: registerVerification,
    handleSubmit: handleSubmitVerification,
    formState: { errors: errorsVerification },
  } = useForm<VerificationForm>();

  const onSubmitInfo = (data: UserInfoForm) => {
    setUserInfo(data);
    setStep("verification");
    // اینجا می‌توانید کد را به سرور ارسال کنید
    console.log("ارسال کد به شماره:", data.phoneNumber);
  };

  const onSubmitVerification = (data: VerificationForm) => {
    // اینجا می‌توانید کد تایید را به سرور ارسال کنید
    console.log("کد تایید:", data.code);
    console.log("اطلاعات کاربر:", userInfo);
    // پس از تایید موفق، می‌توانید modal را ببندید یا اقدامات بعدی را انجام دهید
  };

  const handleBackToInfo = () => {
    setStep("info");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full" dir="rtl">
      {step === "info" ? (
        <form
          onSubmit={handleSubmitInfo(onSubmitInfo)}
          className="w-full space-y-4"
        >
          <Alert title="توجه" variant="info" icon="info">
            جهت دسترسی به امکانات پنل کاربری لطفاً فرم زیر را تکمیل کنید, این
            اطلاعات به صورت خصوصی ذخیره می شود.
          </Alert>
          <div>
            <label className="block text-sm mb-2 font-medium">نام</label>
            <Input
              {...registerInfo("firstName", {
                required: "نام الزامی است",
                minLength: {
                  value: 2,
                  message: "نام باید حداقل ۲ کاراکتر باشد",
                },
              })}
              placeholder="نام خود را وارد کنید"
              error={errorsInfo.firstName?.message}
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">
              نام خانوادگی
            </label>
            <Input
              {...registerInfo("lastName", {
                required: "نام خانوادگی الزامی است",
                minLength: {
                  value: 2,
                  message: "نام خانوادگی باید حداقل ۲ کاراکتر باشد",
                },
              })}
              placeholder="نام خانوادگی خود را وارد کنید"
              error={errorsInfo.lastName?.message}
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">شماره تلفن</label>
            <Input
              {...registerInfo("phoneNumber", {
                required: "شماره تلفن الزامی است",
                pattern: {
                  value: /^09[0-9]{9}$/,
                  message: "شماره تلفن معتبر نیست (مثال: ۰۹۱۲۳۴۵۶۷۸۹)",
                },
              })}
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              type="tel"
              error={errorsInfo.phoneNumber?.message}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-sm font-medium transition-colors shadow-md hover:shadow-lg mt-6"
          >
            ارسال کد تایید
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleSubmitVerification(onSubmitVerification)}
          className="w-full space-y-4"
        >
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2">تایید شماره تلفن</h2>
            <p className="text-sm text-main-text-color/70">
              کد تایید به شماره{" "}
              <span className="font-semibold">{userInfo?.phoneNumber}</span>{" "}
              ارسال شد
            </p>
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">کد تایید</label>
            <Input
              {...registerVerification("code", {
                required: "کد تایید الزامی است",
                pattern: {
                  value: /^[0-9]{4,6}$/,
                  message: "کد تایید باید ۴ تا ۶ رقم باشد",
                },
              })}
              placeholder="کد تایید را وارد کنید"
              type="text"
              inputMode="numeric"
              maxLength={6}
              error={errorsVerification.code?.message}
            />
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={handleBackToInfo}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-sm font-medium transition-colors shadow-md hover:shadow-lg"
            >
              بازگشت
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-sm font-medium transition-colors shadow-md hover:shadow-lg"
            >
              تایید
            </button>
          </div>

          <button
            type="button"
            className="w-full text-sm text-blue-400 hover:text-blue-300 py-2 transition-colors"
            onClick={() => console.log("ارسال مجدد کد")}
          >
            ارسال مجدد کد
          </button>
        </form>
      )}
    </div>
  );
};

export default VerifyAccountForm;
