import React from "react";
import BoxHeader from "../../shared/box header/BoxHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SubscriptionStatus: React.FC = () => {
  return (
    <div className="bg-gradient-to-t from-secondary-box-background/90 to-main-box-background/90  backdrop-blur-[2px] w-1/2 h-[250px] rounded-lg p-2">
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

export default SubscriptionStatus;
