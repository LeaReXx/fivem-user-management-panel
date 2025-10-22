"use client";

import { Skeleton } from "@/components/ui/skeleton";

const ShopHeaderSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-0 sm:justify-between sm:items-center sm:flex-row md:w-2/3">
      <Skeleton className="sm:w-1/2 sm:max-w-[320px] h-[50px]" />
      <Skeleton className="max-h-[180px] h-[50px]" />
    </div>
  );
};

export default ShopHeaderSkeleton;
