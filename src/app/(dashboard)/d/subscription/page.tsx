"use client";
import BoxHeader from "@/components/d/shared/box header/BoxHeader";
import { ArrowLeft, Crown, Gift, Sparkles, Star, Zap } from "lucide-react";
import React, { useState } from "react";

const SubscriptionPage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="order-2 md:order-1 col-span-12 md:col-span-6 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-7 bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg p-4 min-h-[500px]">
      <BoxHeader title="اشتراک" iconName="dollar-sign" />
    </div>
  );
};

export default SubscriptionPage;
