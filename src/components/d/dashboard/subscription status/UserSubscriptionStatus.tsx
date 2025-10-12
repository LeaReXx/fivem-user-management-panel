"use client";
import React, { useState } from "react";
import BoxHeader from "../../shared/box header/BoxHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  Calendar,
  CalendarX2,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import CircularProgressBar from "@/components/ui/CircularProgressBar";
import Link from "next/link";
import NoSubscription from "../../subscription/current subscription/NoSubscription";

const UserSubscriptionStatus: React.FC = () => {
  const [isActiveSubscription, setIsActiveSubscription] = useState(false);

  return (
    <div className="order-2 relative overflow-hidden md:order-1 col-span-12 md:col-span-6 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-7 bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2  rounded-lg p-4">
      {!isActiveSubscription && <NoSubscription />}
      <BoxHeader title="وضعیت اشتراک" iconName="dollar-sign">
        <div className="flex gap-2">
          <Badge
            className="border-green-600 text-green-600 dark:border-green-400 dark:text-green-400"
            variant="dashed"
          >
            اشتراک فعال
          </Badge>
          <Button size="sm" variant="default">
            تمدید اشتراک
          </Button>
        </div>
      </BoxHeader>
      <div className="mt-8 flex items-center flex-col w-full 2xl:h-[80%] mx-auto max-w-[400px] sm:max-w-none xl:max-w-[450px] 2xl:max-w-none sm:flex-row md:flex-col 2xl:flex-row 2xl:mt-4 gap-6 justify-between">
        <div className="w-full sm:w-1/3 md:w-full 2xl:w-1/3 flex items-center justify-center m-4">
          <CircularProgressBar
            percentage={0}
            remainingDays={0}
            size={220}
            strokeWidth={15}
            gradientColors={["#ef4444", "#22c55e"]}
            showPercentage={false}
            showRemainingDays={true}
            duration={3000}
            semicircle={true}
          />
        </div>
        <div className="w-full sm:w-2/3 md:w-full space-y-3 2xl:2/3 2xl:max-w-[450px]">
          <div className="flex items-center justify-between bg-gradient-to-r from-inside-box-bg-color/90 to-transparent p-3 rounded-md">
            <span className="flex gap-2 items-center opacity-80">
              <TrendingUp strokeWidth={1.5} size={22} /> نوع اشتراک
            </span>
            <span className="text-lg font-medium">پرمیوم</span>
          </div>
          <div>
            <div className="flex justify-between w-full space-x-4">
              <div className="flex w-1/2 justify-between flex-col bg-inside-box-bg-color/60 border border-gray-500/90 p-2 gap-1 rounded-md mt-2">
                <span className="flex gap-2 items-center opacity-80 text-sm">
                  <Calendar strokeWidth={1.5} size={20} /> تاریخ شروع
                </span>
                <span className="text-center">۱۴۰۲/۰۴/۲۵</span>
              </div>
              <div className="flex w-1/2 justify-between flex-col bg-inside-box-bg-color/60 border border-gray-500/90  p-2 gap-1 rounded-md mt-2">
                <span className="flex gap-2 items-center opacity-80 text-sm">
                  <CalendarX2 strokeWidth={1.5} size={20} /> تاریخ پایان
                </span>
                <span className="text-center">۱۴۰۲/۰۵/۲۵</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSubscriptionStatus;
