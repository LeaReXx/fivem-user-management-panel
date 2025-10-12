import React from "react";
import ActiveSubscription from "./ActiveSubscription";
import NoSubscription from "./NoSubscription";

const CurrentSubscription: React.FC = () => {
  return (
    <div className="col-span-12 lg:col-span-12 xl:col-span-8 w-full order-2 xl:order-1">
      <ActiveSubscription />
    </div>
  );
};

export default CurrentSubscription;
