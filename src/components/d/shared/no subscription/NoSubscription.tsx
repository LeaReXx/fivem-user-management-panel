import CircularProgressBar from "@/components/ui/CircularProgressBar";
import {
  Calendar,
  CalendarClock,
  CalendarX,
  CircleDollarSign,
  TrendingUp,
  ShoppingBag,
  AlertCircle,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NoSubscription: React.FC = () => {
  return (
    <div className="absolute top-0 right-0 h-full w-full backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-4">
      <AlertCircle className="text-red-500" size={45} strokeWidth={1.5} />
      <div className="text-center">
        <p className="text-xl font-bold text-red-500">بدون اشتراک</p>
        <p className="text-sm font-medium text-center px-4 mt-2">
          شما در حال حاضر هیچ اشتراک فعالی ندارید
        </p>
      </div>
      <Link href="/d/subscription/new" className="mt-1">
        <Button className="flex items-center gap-2">
          <ShoppingBag className="size-5" strokeWidth={1.5} />
          خرید اشتراک
        </Button>
      </Link>
    </div>
  );
};

export default NoSubscription;
