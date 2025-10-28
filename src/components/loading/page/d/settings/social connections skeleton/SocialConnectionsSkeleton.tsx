import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "lucide-react";

const SocialConnectionsSkeleton = () => {
  return (
    <div className="bg-inside-box-bg-color col-span-12 md:col-span-6 rounded-lg p-4">
      {/* Header */}
      <div className="pb-4 flex justify-between items-center">
        <p className="flex gap-2 font-medium">
          <Link size={22} strokeWidth={1.5} /> اتصالات
        </p>
      </div>
      <div>
        <div dir="ltr" className="relative overflow-hidden rounded-lg border border-main-text-color/10">
          <div className="relative flex items-center gap-4 p-4 bg-main-bg-color/80 ">
            {/* Avatar Skeleton */}
            <Skeleton className="w-16 h-16 rounded-full shrink-0" />

            {/* Content Skeleton */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-32" />
              </div>
              <Skeleton className="h-4 w-48" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConnectionsSkeleton;
