"use client";
import BoxHeader from "@/components/d/shared/box header/BoxHeader";
import CurrentSubscription from "@/components/d/subscription/current subscription/CurrentSubscription";
import SubscribePromotion from "@/components/d/subscription/subscribe promotion/SubscribePromotion";
import SubscriptionHistory from "@/components/d/subscription/subscription history/SubscriptionHistory";
import React from "react";

const SubscriptionPage: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4 bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg p-4 min-h-[500px]">
      <BoxHeader title="اشتراک" iconName="dollar-sign" />

      <CurrentSubscription />
      <SubscribePromotion />
      <SubscriptionHistory />
    </div>
  );
};

export default SubscriptionPage;
