import React from "react";
import BoxHeader from "../../shared/box header/BoxHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const UserSubscriptionStatus: React.FC = () => {
  return (
    <div className="order-2 md:order-1 col-span-12 md:col-span-6 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-7 bg-gradient-to-t from-secondary-box-background/90 to-main-box-background/90 backdrop-blur-[2px] h-[280px] rounded-lg p-4">
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
    </div>
  );
};

export default UserSubscriptionStatus;
