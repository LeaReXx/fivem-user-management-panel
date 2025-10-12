"use client";
import BoxHeader from "@/components/d/shared/box header/BoxHeader";
import CurrentSubscription from "@/components/d/subscription/current subscription/CurrentSubscription";
import SubscriptionHistory from "@/components/d/subscription/subscription history/SubscriptionHistory";
import { ArrowLeft, Crown, Sparkle, Sparkles } from "lucide-react";
import React from "react";

const SubscriptionPage: React.FC = () => {
  return (
    <div className="order-2 md:order-1 col-span-12 md:col-span-6 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-7 bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg p-4 min-h-[500px]">
      <BoxHeader title="اشتراک" iconName="dollar-sign" />

      <div className="grid grid-cols-12 mt-6 gap-4">
        <CurrentSubscription />
        <div className="col-span-12 order-1 xl:order-2 xl:col-span-4 gradient-border hover:scale-102 duration-200 ease-in group cursor-pointer">
          <div className="w-full h-full bg-inside-box-bg-color overflow-hidden rounded-md relative">
            <div className="absolute h-full w-full top-0 right-0 opacity-30">
              <Sparkles
                size={28}
                strokeWidth={1.5}
                className="absolute top-[15%] right-[10%]"
              />
              <Sparkle
                size={28}
                strokeWidth={1.5}
                className="absolute bottom-[15%] left-[10%]"
              />
            </div>
            <div className="h-full p-4 rounded-md flex items-center justify-center flex-col gap-6 cursor-pointer">
              <div className="space-y-2">
                <Crown className="mx-auto" size={50} strokeWidth={1.5} />
                <div className="text-center">
                  <p className="text-xl font-semibold">خرید یا تمدید اشتراک</p>
                  <span className="text-sm">
                    دسترسی امکانات ویژه با خرید اشتراک
                  </span>
                </div>
              </div>
              <div>
                <button className="bg-main-text-color/10 group-hover:bg-main-text-color/20 cursor-pointer py-2 px-4 font-normal rounded-sm flex items-center gap-1 text-sm">
                  برای ادامه کلیک کنید
                  <ArrowLeft
                    size={20}
                    strokeWidth={1.5}
                    className="group-hover:mr-2 duration-200 ease-in"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscriptionHistory />
    </div>
  );
};

export default SubscriptionPage;
