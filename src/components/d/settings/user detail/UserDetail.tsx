"use client";
import { User } from "lucide-react";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import VerifyAccountModal from "./verify account modal/VerifyAccountModal";

const UserDetail = () => {
  return (
    <>
      <VerifyAccountModal />
      <div className="bg-inside-box-bg-color col-span-12 md:col-span-6 rounded-lg p-4">
        <div className="pb-4 flex justify-between items-center">
          <p className="flex gap-2 font-medium">
            <User size={22} strokeWidth={1.5} /> اطلاعات کاربر
          </p>
          <div>
            <Button
              size="sm"
              className="bg-linear-to-t from-blue-500/90 to-blue-500/60"
            >
              <Link href="/d/settings?verify=open" className="mr-2">
                تایید حساب کاربری
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 w-full items-center max-w-[400px] mx-auto xl:flex-row xl:max-w-none xl:items-start">
          <div className="w-full mx-auto max-w-[250px] xl:max-w-[150px] 2xl:max-w-[180px] bg-yellow-500/50 p-1 rounded-md">
            <div className="aspect-square w-full">
              <img
                src="/profile.jpg"
                className="size-full object-cover rounded-sm"
              />
            </div>
            <div className="py-1 px-2 text-center w-full">
              <span className="text-sm font-normal">در انتظار تایید حساب</span>
            </div>
          </div>
          <div className="space-y-4 w-full">
            <div>
              <label>نام</label>
              <Input value="سپهر آقاپور" icon="user" disabled />
            </div>
            <div>
              <label>ایمیل</label>
              <Input value="petrol_cs@yahoo.com" icon="mail" disabled />
            </div>
            <div>
              <label>تلفن</label>
              <Input value="09353195043" icon="phone" disabled />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDetail;
