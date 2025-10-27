import UserDetail from "@/components/d/settings/user detail/UserDetail";
import PageHeader from "@/components/d/shared/page header/PageHeader";
import React from "react";

const SettingsPage: React.FC = () => {
  return (
    <div className=" bg-linear-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg p-4 min-h-[500px]">
      <PageHeader title="تنظیمات" iconName="settings" />
      <div className="mt-4 grid grid-cols-12 gap-4">
        <UserDetail />
      </div>
    </div>
  );
};

export default SettingsPage;
