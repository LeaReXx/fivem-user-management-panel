import type React from "react";
import ActiveSubscription from "./ActiveSubscription";

const CurrentSubscription: React.FC = () => {
  return (
    <div className="col-span-12 lg:col-span-12 xl:col-span-8 w-full order-3 xl:order-2">
      <ActiveSubscription />
    </div>
  );
};

export default CurrentSubscription;
