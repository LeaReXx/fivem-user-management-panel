import { Skeleton } from "@/components/ui/skeleton";

const LinkedAccountsSkeleton = () => {
  return (
    <div
      dir="ltr"
      className="overflow-hidden rounded-lg border border-main-text-color/10 p-1"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between px-1 py-2">
        <div className="relative w-full flex items-center">
          <Skeleton className="h-6 w-25" />
        </div>
        <div className="flex items-center">
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
      </div>

      {/* Discord Card Section */}
      <div className="relative rounded-lg overflow-hidden border border-main-text-color/10 p-2">
        <div className="relative flex items-center gap-4">
          {/* Avatar Skeleton */}
          <Skeleton className="w-14 h-14 rounded-full shrink-0" />

          {/* User Info Skeleton */}
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedAccountsSkeleton;
