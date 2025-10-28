"use client";
import { User } from "lucide-react";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/Input";
import VerifyAccountModal from "./verify account modal/VerifyAccountModal";

const UserDetail = () => {
  const [, setIsOpenVerifyModal] = useQueryState("verify");

  const handleOpenVerifyModlal = () => {
    setIsOpenVerifyModal("open");
  };

  return (
    <>
      <VerifyAccountModal />
      <div className="bg-inside-box-bg-color col-span-12 xl:col-span-6 rounded-lg p-4">
        <div className="pb-4 flex justify-between items-center">
          <p className="flex gap-2 font-medium">
            <User size={22} strokeWidth={1.5} /> اطلاعات کاربر
          </p>
          <div>
            <Button
              size="sm"
              onClick={handleOpenVerifyModlal}
              className="bg-linear-to-t from-blue-500/90 to-blue-500/60"
            >
              تایید حساب کاربری
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 w-full items-start max-w-[600px] mx-auto sm:flex-row xl:max-w-none xl:flex-col 2xl:flex-row xl:items-start">
          <div className="w-full mx-auto max-w-[250px] sm:max-w-[200px] xl:max-w-[250px] 2xl:max-w-[180px] bg-yellow-500/50 p-1 rounded-md">
            <div className="aspect-square w-full">
              <Image
                src="/profile.jpg"
                className="size-full object-cover rounded-sm"
                alt="profile"
                width={200}
                height={200}
                unoptimized
              />
            </div>
            <div className="py-1 px-2 text-center w-full">
              <span className="text-sm font-normal">در انتظار تایید حساب</span>
            </div>
          </div>
          <div className="space-y-4 w-full">
            <div>
              <label htmlFor="full-name">نام</label>
              <Input
                value="سپهر آقاپور"
                icon="user"
                name="full-name"
                disabled
              />
            </div>
            <div>
              <label htmlFor="email">ایمیل</label>
              <Input
                value="petrol_cs@yahoo.com"
                name="email"
                icon="mail"
                disabled
              />
            </div>
            <div>
              <label htmlFor="phone">تلفن</label>
              <Input value="09353195043" icon="phone" name="phone" disabled />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDetail;
