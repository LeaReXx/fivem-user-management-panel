"use client";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const UserProfile: React.FC = () => {
  useEffect(() => {
    const getUserSession = async () => {
      const { data: session } = await authClient.getSession();
    };
    getUserSession();
  }, []);
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full w-12 overflow-hidden">
        <img src="/profile.jpg" alt="Profile" className="w-full" />
      </div>
      <div className="lg:space-y-1">
        <p className="font-light opacity-90">سپهر آقاپور</p>
        <span className="text-sm opacity-70">ثبت نام در 28 مرداد 1404</span>
      </div>
    </div>
  );
};

export default UserProfile;
