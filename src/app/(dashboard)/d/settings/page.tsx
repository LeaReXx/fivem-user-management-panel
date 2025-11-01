import { Suspense } from "react";
import ActiveSessions from "@/components/d/settings/active sessions/ActiveSessions";
import SocialConnections from "@/components/d/settings/social connections/SocialConnections";
import UserDetail from "@/components/d/settings/user detail/UserDetail";
import PageHeader from "@/components/d/shared/page header/PageHeader";
import UserDetailSkeleton from "@/components/loading/page/d/settings/user detail skeleton/UserDetailSkeleton";
import SessionsItemSkeleton from "@/components/loading/page/d/settings/session item skeleton/SessionsItemSkeleton";

const SettingsPage: React.FC = async () => {
  return (
    <div className=" bg-linear-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg p-4 min-h-[500px]">
      <PageHeader title="تنظیمات" iconName="settings" />
      <div className="mt-4 grid grid-cols-12 gap-4">
        <Suspense fallback={<UserDetailSkeleton />}>
          <UserDetail />
        </Suspense>
        <SocialConnections />
        <Suspense fallback={<SessionsItemSkeleton />}>
          <ActiveSessions />
        </Suspense>
      </div>
    </div>
  );
};

export default SettingsPage;
