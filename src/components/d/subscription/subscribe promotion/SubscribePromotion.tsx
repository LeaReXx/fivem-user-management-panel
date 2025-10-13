import { ArrowLeft, Crown, Sparkle, Sparkles } from "lucide-react";
import React from "react";

const SubscribePromotion: React.FC = () => {
  return (
    <div className="col-span-12 order-2 xl:order-3 xl:col-span-4 gradient-border hover:scale-102 duration-200 ease-in group cursor-pointer">
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
  );
};

export default SubscribePromotion;
