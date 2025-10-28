"use client";

import { useForm } from "react-hook-form";
import Input from "@/components/ui/Input";

interface VerificationForm {
  code: string;
}

interface SubmitVerificationFormProps {
  phoneNumber: string;
  onSubmit: (data: VerificationForm) => void;
  onBack: () => void;
  onResend: () => void;
}

const SubmitVerificationForm = ({
  phoneNumber,
  onSubmit,
  onBack,
  onResend,
}: SubmitVerificationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationForm>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold mb-2">تایید شماره تلفن</h2>
        <p className="text-sm text-main-text-color/70">
          کد تایید به شماره <span className="font-semibold">{phoneNumber}</span>{" "}
          ارسال شد
        </p>
      </div>

      <div>
        <label className="block text-sm mb-2 font-medium">کد تایید</label>
        <Input
          {...register("code", {
            required: "کد تایید الزامی است",
            pattern: {
              value: /^[0-9]{4,6}$/,
              message: "کد تایید باید ۴ تا ۶ رقم باشد",
            },
          })}
          placeholder="کد تایید را وارد کنید"
          type="number"
          inputMode="numeric"
          maxLength={6}
          error={errors.code?.message}
        />
      </div>

      <div className="flex gap-3 mt-6">
        <button
          type="button"
          onClick={onBack}
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
        className="w-full text-sm text-blue-600 hover:text-blue-500 py-2 transition-colors"
        onClick={onResend}
      >
        ارسال مجدد کد
      </button>
    </form>
  );
};

export default SubmitVerificationForm;
