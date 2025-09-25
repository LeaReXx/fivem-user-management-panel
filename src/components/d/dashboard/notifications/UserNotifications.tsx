import React from "react";
import BoxHeader from "../../shared/box header/BoxHeader";
import { Badge } from "@/components/ui/badge";

const UserNotifications: React.FC = () => {
  return (
    <div className="order-1 md:order-2 col-span-12 md:col-span-6 md:col-start-7 md:col-end-13 lg:col-start-7 lg:col-end-13 bg-gradient-to-t from-secondary-box-background/90 to-main-box-background/90 backdrop-blur-[2px] h-[280px] rounded-lg p-4">
      <BoxHeader title="اعلانات" iconName="bell">
        <Badge className="border-gray-300 text-gray-300 py-2" variant="dashed">
          4 اعلان
        </Badge>
      </BoxHeader>
    </div>
  );
};

export default UserNotifications;
