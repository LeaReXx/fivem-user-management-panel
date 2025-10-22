"use client";

import { Skeleton } from "@/components/ui/skeleton";

const ShopHeaderSkeleton = () => {
  return (
    <div className="flex justify-between items-center">
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default ShopHeaderSkeleton;
