import { Skeleton } from "@/components/ui/skeleton";

const UserDetailSkeleton = () => {
  return (
    <div className="bg-inside-box-bg-color col-span-12 md:col-span-6 rounded-lg p-4">
      {/* Header */}
      <div className="pb-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Skeleton className="w-5 h-5" />
          <Skeleton className="h-5 w-24" />
        </div>
        <Skeleton className="h-8 w-32" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-4 w-full items-center max-w-[400px] mx-auto xl:flex-row xl:max-w-none xl:items-start">
        {/* Profile Image Section */}
        <div className="w-full mx-auto max-w-[250px] xl:max-w-[150px] 2xl:max-w-[180px]">
          <Skeleton className="aspect-square w-full rounded-md" />
          <div className="py-1 px-2 text-center w-full mt-2">
            <Skeleton className="h-4 mx-auto w-3/4" />
          </div>
        </div>

        {/* Form Fields Section */}
        <div className="space-y-4 w-full">
          {/* Name Field */}
          <div>
            <Skeleton className="h-4 w-12 mb-2" />
            <Skeleton className="h-12 w-full rounded-sm" />
          </div>

          {/* Email Field */}
          <div>
            <Skeleton className="h-4 w-16 mb-2" />
            <Skeleton className="h-12 w-full rounded-sm" />
          </div>

          {/* Phone Field */}
          <div>
            <Skeleton className="h-4 w-12 mb-2" />
            <Skeleton className="h-12 w-full rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailSkeleton;
