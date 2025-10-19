import { Image } from "lucide-react";

const NoImageHolder = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full w-full bg-gray-400 dark:bg-gray-500">
      <Image size={54} strokeWidth={1.5} className="mx-auto opacity-50" />
      <p className="text-lg font-medium mt-1 opacity-50">بدون عکس</p>
    </div>
  );
};

export default NoImageHolder;
