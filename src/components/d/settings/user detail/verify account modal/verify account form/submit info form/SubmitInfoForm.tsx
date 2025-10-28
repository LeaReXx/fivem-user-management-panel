"use client";

import { useForm } from "react-hook-form";
import { Alert } from "@/components/ui/alert";
import Input from "@/components/ui/Input";

interface UserInfoForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface SubmitInfoFormProps {
  onSubmit: (data: UserInfoForm) => void;
}

const SubmitInfoForm = ({ onSubmit }: SubmitInfoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfoForm>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
      <Alert title="توجه" variant="info" icon="info">
        جهت دسترسی به امکانات پنل کاربری لطفاً فرم زیر را تکمیل کنید, این اطلاعات
        به صورت خصوصی ذخیره می شود.
      </Alert>
      <div>
        <label className="block text-sm mb-2 font-medium">نام</label>
        <Input
          {...register("firstName", {
            required: "نام الزامی است",
            minLength: {
              value: 2,
              message: "نام باید حداقل ۲ کاراکتر باشد",
            },
          })}
          placeholder="نام خود را وارد کنید"
          error={errors.firstName?.message}
        />
      </div>

      <div>
        <label className="block text-sm mb-2 font-medium">نام خانوادگی</label>
        <Input
          {...register("lastName", {
            required: "نام خانوادگی الزامی است",
            minLength: {
              value: 2,
              message: "نام خانوادگی باید حداقل ۲ کاراکتر باشد",
            },
          })}
          placeholder="نام خانوادگی خود را وارد کنید"
          error={errors.lastName?.message}
        />
      </div>

      <div>
        <label className="block text-sm mb-2 font-medium">شماره تلفن</label>
        <Input
          {...register("phoneNumber", {
            required: "شماره تلفن الزامی است",
            pattern: {
              value: /^09[0-9]{9}$/,
              message: "شماره تلفن معتبر نیست (مثال: ۰۹۱۲۳۴۵۶۷۸۹)",
            },
          })}
          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
          type="tel"
          error={errors.phoneNumber?.message}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-sm font-medium transition-colors shadow-md hover:shadow-lg mt-6"
      >
        ارسال کد تایید
      </button>
    </form>
  );
};

export default SubmitInfoForm;
