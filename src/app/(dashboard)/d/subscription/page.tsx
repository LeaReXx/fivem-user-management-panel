"use client";
import PageHeader from "@/components/d/shared/page header/PageHeader";
import CurrentSubscription from "@/components/d/subscription/current subscription/CurrentSubscription";
import SubscribePromotion from "@/components/d/subscription/subscribe promotion/SubscribePromotion";
import SubscriptionHistory from "@/components/d/subscription/subscription history/SubscriptionHistory";
import React from "react";

const SubscriptionPage: React.FC = () => {
  return (
    <div className=" bg-linear-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg p-4 min-h-[500px]">
      <PageHeader title="اشتراک" iconName="dollar-sign" />
      <div className="grid grid-cols-12 gap-4 mt-4">
        <CurrentSubscription />
        <SubscribePromotion />
        <SubscriptionHistory />
      </div>
    </div>
  );
};

export default SubscriptionPage;
