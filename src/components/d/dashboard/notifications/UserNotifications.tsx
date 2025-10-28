import type React from "react";
import {
  Alert,
  AlertDescription,
  AlertTime,
  AlertTitle,
} from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { formatRelativeTime } from "@/lib/utils";
import BoxHeader from "../../shared/box header/BoxHeader";

interface NotificationItem {
  id: number;
  variant:
    | "default"
    | "success"
    | "info"
    | "warning"
    | "error"
    | "notification";
  title: string;
  description: string;
  href?: string;
  icon?: string;
  timestamp: Date;
}

const notifications: NotificationItem[] = [
  {
    id: 1,
    variant: "success",
    title: "موفقیت آمیز",
    description:
      "تراکنش شما با موفقیت انجام شد. مبلغ 50,000 تومان به کیف پول شما اضافه گردید.",
    href: "/d/wallet",
    icon: "check-circle",
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
  },
  {
    id: 2,
    variant: "info",
    title: "اطلاعیه جدید",
    description:
      "سرور به‌روزرسانی جدیدی دریافت کرده است. لطفاً برای تجربه بهتر مجدداً وارد شوید.",
    icon: "info",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: 3,
    variant: "warning",
    title: "هشدار امنیتی",
    description:
      "کلمه عبور شما از 90 روز پیش تغییر نکرده است. توصیه می‌شود آن را تغییر دهید.",
    href: "/d/settings",
    icon: "shield",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: 4,
    variant: "error",
    title: "خطا در پرداخت",
    description:
      "پرداخت شما با مشکل مواجه شد. لطفاً مجدداً تلاش کنید یا با پشتیبانی تماس بگیرید.",
    href: "/d/shop",
    icon: "x-circle",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  },
  {
    id: 5,
    variant: "notification",
    title: "پیام جدید",
    description: "یک پیام جدید از مدیریت سرور برای شما دریافت شده است.",
    icon: "mail",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
  },
];

const UserNotifications: React.FC = () => {
  return (
    <div className="order-1 md:order-2 relative space-y-4 col-span-12 md:col-span-6 md:col-start-7 md:col-end-13 lg:col-start-7 lg:col-end-13 bg-linear-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 rounded-lg p-4 sm:h-[425px] 2xl:h-[300px] lg:z-10">
      <BoxHeader title="اعلانات" iconName="bell">
        <Badge
          className="border-main-text-color/70 text-main-text-color/70 py-2"
          variant="dashed"
        >
          {notifications.length} اعلان
        </Badge>
      </BoxHeader>

      <div className="overflow-y-auto bg-inside-box-bg-color transition-[height] rounded-lg p-2 space-y-2 h-80 sm:h-[340px] 2xl:h-[220px] duration-400 ease-out lg:hover:h-[440px] lg:hover:shadow-lg lg:hover:outline outline-gray-500/60">
        {notifications.map((notification) => (
          <Alert
            key={notification.id}
            variant={notification.variant}
            href={notification.href}
            icon={notification.icon as any}
          >
            <AlertTitle>{notification.title}</AlertTitle>
            <AlertDescription>{notification.description}</AlertDescription>
            <AlertTime>{formatRelativeTime(notification.timestamp)}</AlertTime>
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default UserNotifications;
