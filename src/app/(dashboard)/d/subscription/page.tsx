"use client";
import BoxHeader from "@/components/d/shared/box header/BoxHeader";
import CurrentSubscription from "@/components/d/subscription/current subscription/CurrentSubscription";
import { ArrowLeft, Crown } from "lucide-react";
import React from "react";

const SubscriptionPage: React.FC = () => {
  return (
    <div className="order-2 md:order-1 col-span-12 md:col-span-6 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-7 bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg p-4 min-h-[500px]">
      <BoxHeader title="اشتراک" iconName="dollar-sign" />

      <div className="grid grid-cols-12 mt-6 gap-4">
        <CurrentSubscription />
        <div className="w-full h-full overflow-hidden rounded-md relative xl:col-span-4 hover:scale-102 duration-200 ease-in group">
          <div
            className="h-full p-4 rounded-md flex items-center justify-center flex-col gap-6 cursor-pointer"
            style={{
              background: "#020617",
              backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
              backgroundSize: "40px 40px, 40px 40px, 100% 100%",
            }}
          >
            <div className="space-y-2">
              <Crown className="mx-auto" size={50} strokeWidth={1.5} />
              <div className="text-center">
                <p className="text-xl font-medium">خرید یا تمدید اشتراک</p>
                <span className="text-sm">
                  دسترسی امکانات ویژه با خرید اشتراک
                </span>
              </div>
            </div>
            <div>
              <button className="bg-main-text-color/20 cursor-pointer py-2 px-4 rounded-sm flex items-center gap-1 text-sm ">
                برای ادامه کلیک کنید{" "}
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
  );
};

export default SubscriptionPage;
