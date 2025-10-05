import React, { useEffect, useState } from "react";
import Input from "@/components/auth/shared/Input";
import { Button } from "@/components/ui/button";
import nationalities from "@/data/nationalities.json";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar22 } from "@/components/ui/datePicker";
import { useForm, Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { CharacterFormData } from "@/types/character";

interface CharacterFormProps {
  onSubmit?: (data: CharacterFormData) => void;
  initialData?: Partial<CharacterFormData>;
  disabled?: boolean;
}

const CharacterForm: React.FC<CharacterFormProps> = ({
  onSubmit: formOnSubmit,
  initialData,
  disabled = false,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CharacterFormData>({
    defaultValues: {
      firstName: initialData?.firstName || "",
      lastName: initialData?.lastName || "",
      gender: initialData?.gender || "",
      nationality: initialData?.nationality || "",
      birthDate: initialData?.birthDate,
      backstory: initialData?.backstory || "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        gender: initialData.gender || "",
        nationality: initialData.nationality || "",
        birthDate: initialData.birthDate,
        backstory: initialData.backstory || "",
      });
      setIsEditMode(true);
    }
  }, [initialData, reset]);

  return (
    <div className="text-center">
      <form
        className={`grid grid-cols-12 gap-4 ${disabled ? 'opacity-75' : ''}`}
        onSubmit={formOnSubmit ? handleSubmit(formOnSubmit) : (e) => e.preventDefault()}
      >
        <div className="col-span-12 sm:col-span-6">
          <Input
            placeholder="نام"
            disabled={disabled}
            {...register("firstName", {
              required: "نام الزامی است",
            })}
            error={errors.firstName?.message}
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Input
            placeholder="نام خانوادگی"
            disabled={disabled}
            {...register("lastName", {
              required: "نام خانوادگی الزامی است",
            })}
            error={errors.lastName?.message}
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <div>
            <Controller
              name="gender"
              control={control}
              rules={{
                required: "جنسیت الزامی است",
              }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
                  <SelectTrigger
                    dir="rtl"
                    className={errors.gender ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="جنسیت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectGroup dir="rtl">
                      <SelectItem value="male">مرد</SelectItem>
                      <SelectItem value="female">زن</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && (
              <span className="text-red-400 text-sm mt-1 px-2 block bg-red-900/20 py-1 rounded">
                {errors.gender.message}
              </span>
            )}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <div>
            <Controller
              name="nationality"
              control={control}
              rules={{
                required: "ملیت الزامی است",
              }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
                  <SelectTrigger
                    dir="rtl"
                    className={`${
                      errors.nationality ? "border-red-500" : ""
                    } capitalize`}
                  >
                    <SelectValue placeholder="ملیت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" position="item-aligned">
                    {Object.entries(nationalities.continents).map(
                      ([continent, nationalitiesList], continentIndex) => (
                        <SelectGroup dir="rtl" key={continentIndex}>
                          <SelectLabel className="font-semibold text-md">
                            {continent}
                          </SelectLabel>
                          {nationalitiesList.map(
                            (nationality, nationalityIndex) => (
                              <SelectItem
                                key={`${continentIndex}-${nationalityIndex}`}
                                value={nationality.nationality_en}
                                className="capitalize"
                              >
                                {nationality.nationality_fa} (
                                {nationality.nationality_en})
                              </SelectItem>
                            )
                          )}
                        </SelectGroup>
                      )
                    )}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.nationality && (
              <span className="text-red-400 text-sm mt-1 px-2 block bg-red-900/20 py-1 rounded">
                {errors.nationality.message}
              </span>
            )}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Controller
            name="birthDate"
            control={control}
            rules={{
              required: "تاریخ تولد الزامی است",
              validate: (value) => {
                if (!value) return true;
                const age = new Date().getFullYear() - value.getFullYear();
                return age >= 18 || "سن کاراکتر باید حداقل 18 سال باشد";
              },
            }}
            render={({ field }) => (
              <Calendar22
                value={field.value}
                onChange={field.onChange}
                disabled={disabled}

                error={errors.birthDate?.message}
              />
            )}
          />
        </div>
        <div className="col-span-12">
          <Textarea
            className="min-h-[200px] md:min-h-[300px]"
            disabled={disabled}
            placeholder="بک استوری کاراکتر"
            
            {...register("backstory", {
              required: "بک استوری الزامی است",
              minLength: {
                value: 100,
                message: "بک استوری باید حداقل 100 کاراکتر باشد",
              },
            })}
            error={errors.backstory?.message}
          />
        </div>
        {!disabled && (
          <div className="mt-2 text-end col-span-12">
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-md"
            >
              {isEditMode ? "ویرایش کاراکتر" : "ثبت کاراکتر"}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CharacterForm;
