import FeaturedProducts from "@/components/d/dashboard/featured products/FeaturedProducts";
import UserNotifications from "@/components/d/dashboard/notifications/UserNotifications";
import UserSubscriptionStatus from "@/components/d/dashboard/subscription status/UserSubscriptionStatus";

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
