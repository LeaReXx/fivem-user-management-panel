import React, { useState } from "react";
import {
  Calendar,
  CalendarClock,
  CalendarX,
  CircleDollarSign,
  TrendingUp,
} from "lucide-react";
import CircularProgressBar from "@/components/ui/CircularProgressBar";
import NoSubscription from "./NoSubscription";

const ActiveSubscription: React.FC = () => {
  const [isActiveSubscription, setIsActiveSubscription] = useState(false);

  return (
    <div className="overflow-hidden relative bg-inside-box-bg-color/90 rounded-lg p-4 w-full">
      {!isActiveSubscription && <NoSubscription />}
      <div className="pb-4">
        <p className="flex gap-2 font-medium">
          <CalendarClock size={22} strokeWidth={1.5} /> اشتراک فعال
        </p>
      </div>
      <div className="flex flex-col justify-between gap-y-4 md:gap-8 md:flex-row items-center">
        <div className="mx-auto">
          <CircularProgressBar
            percentage={75}
            remainingDays={32}
            size={200}
            strokeWidth={15}
            gradientColors={["#ef4444", "#22c55e"]}
            showRemainingDays={true}
            duration={3000}
            semicircle={true}
          />
        </div>
        <div className="border border-dashed border-main-text-color/70 rounded-md px-6 py-2 w-full">
          <div className="flex justify-between items-center border-b border-main-text-color/20 p-2">
            <span className="flex gap-3 items-center opacity-80">
              <TrendingUp /> اشتراک فعلی
            </span>
            <span className="font-medium">پریمیوم</span>
          </div>
          <div className="flex justify-between items-center border-b border-main-text-color/20 p-2">
            <span className="flex gap-3 items-center opacity-80">
              <Calendar /> تاریخ شروع
            </span>
            <span className="font-medium">1404/6/28</span>
          </div>
          <div className="flex justify-between items-center border-b border-main-text-color/20 p-2">
            <span className="flex gap-3 items-center opacity-80">
              <CalendarX /> تاریخ پایان
            </span>
            <span className="font-medium">1404/7/28</span>
          </div>
          <div className="flex justify-between items-center p-2">
            <span className="flex gap-3 items-center opacity-80">
              <CircleDollarSign /> هزینه اشتراک
            </span>
            <span className="font-medium">250,000 تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveSubscription;
