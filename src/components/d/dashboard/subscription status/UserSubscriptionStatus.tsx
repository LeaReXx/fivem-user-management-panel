"use client";
import React from "react";
import BoxHeader from "../../shared/box header/BoxHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, CalendarX2, TrendingUp } from "lucide-react";
import CircularProgressBar from "@/components/ui/CircularProgressBar";

const UserSubscriptionStatus: React.FC = () => {
  return (
    <div className="order-2 md:order-1 col-span-12 md:col-span-6 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-7 bg-gradient-to-t from-secondary-box-background/90 to-main-box-background/90 backdrop-blur-[2px] rounded-lg p-4">
      <BoxHeader title="وضعیت اشتراک" iconName="dollar-sign">
        <div className="flex gap-2">
          <Badge className="border-green-500 text-green-500" variant="dashed">
            اشتراک فعال
          </Badge>
          <Button size="sm" variant="default">
            تمدید اشتراک
          </Button>
        </div>
      </BoxHeader>
      <div className="mt-8 flex items-center flex-col-reverse w-full 2xl:h-[80%] mx-auto max-w-[400px] sm:max-w-none xl:max-w-[450px] 2xl:max-w-none sm:flex-row md:flex-col-reverse 2xl:flex-row 2xl:mt-4 gap-6 justify-between">
        <div className="w-full sm:w-2/3 md:w-full space-y-3 2xl:2/3 2xl:max-w-[450px]">
          <div className="flex items-center justify-between bg-gradient-to-r from-gray-500/60 to-transparent p-3 rounded-md">
            <span className="flex gap-2 items-center opacity-80">
              <TrendingUp strokeWidth={1.5} size={22} /> نوع اشتراک
            </span>
            <span className="text-lg font-medium">پرمیوم</span>
          </div>
          <div>
            <div className="flex justify-between w-full space-x-4">
              <div className="flex w-1/2 justify-between flex-col bg-gray-500/30 border border-gray-500/50 p-3 rounded-md mt-2">
                <span className="flex gap-2 items-center opacity-80 text-sm">
                  <Calendar strokeWidth={1.5} size={20} /> تاریخ شروع
                </span>
                <span className="text-center">۱۴۰۲/۰۴/۲۵</span>
              </div>
              <div className="flex w-1/2 justify-between flex-col bg-gray-500/30 border border-gray-500/50  p-3 rounded-md mt-2">
                <span className="flex gap-2 items-center opacity-80 text-sm">
                  <CalendarX2 strokeWidth={1.5} size={20} /> تاریخ پایان
                </span>
                <span className="text-center">۱۴۰۲/۰۵/۲۵</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 md:w-full 2xl:w-1/3 flex items-center justify-center m-4">
          <CircularProgressBar
            percentage={80}
            remainingDays={23}
            size={220}
            strokeWidth={15}
            gradientColors={["#ef4444", "#22c55e"]}
            showPercentage={false}
            showRemainingDays={true}
            duration={1000}
            className=""
            daysClassName="text-white font-dana"
            labelClassName="text-gray-300 font-dana"
            semicircle={true}
          />
        </div>
      </div>
    </div>
  );
};

export default UserSubscriptionStatus;
