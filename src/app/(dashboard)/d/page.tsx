import UserNotifications from "@/components/d/dashboard/notifications/UserNotifications";
import ShopItems from "@/components/d/dashboard/shop items/ShopItems";
import UserSubscriptionStatus from "@/components/d/dashboard/subscription status/UserSubscriptionStatus";
import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <UserSubscriptionStatus />
      <UserNotifications />
      <ShopItems />
    </div>
  );
};

export default DashboardPage;
