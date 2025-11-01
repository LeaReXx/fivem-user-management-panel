import { Skeleton } from "@/components/ui/skeleton";
import { Monitor } from "lucide-react";

const ActiveSessionsSkeleton = () => {
  return (
    <div className="bg-inside-box-bg-color col-span-12 md:col-span-6 rounded-lg p-4">
      <div className="pb-4 flex justify-between items-center">
        <p className="flex gap-2 font-medium">
          <Monitor size={22} strokeWidth={1.5} /> نشست های فعال
        </p>
      </div>
      <div className="space-y-2">
        <SessionsItemSkeleton />
        <SessionsItemSkeleton />
        <SessionsItemSkeleton />
      </div>
    </div>
  );
};

export default ActiveSessionsSkeleton;

const SessionsItemSkeleton = () => {
  return (
    <div
      dir="ltr"
      className="bg-content-box-bg-color-2 border border-gray-500/10 shadow-sm rounded-md p-2 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <Skeleton className="w-[70px] h-[70px] rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-[200px]" />
          <div className="flex items-center gap-2">
            <Skeleton className="w-4 h-4 rounded-sm" />
            <Skeleton className="h-4 w-[120px]" />
          </div>
        </div>
      </div>
      <Skeleton className="w-8 h-8 rounded-full" />
    </div>
  );
};
