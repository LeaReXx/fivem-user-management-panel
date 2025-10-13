import UserNotifications from "@/components/d/dashboard/notifications/UserNotifications";
import FeaturedProducts from "@/components/d/dashboard/featured products/FeaturedProducts";
import UserSubscriptionStatus from "@/components/d/dashboard/subscription status/UserSubscriptionStatus";
import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <UserSubscriptionStatus />
      <UserNotifications />
      <FeaturedProducts />
    </div>
  );
};

export default DashboardPage;
