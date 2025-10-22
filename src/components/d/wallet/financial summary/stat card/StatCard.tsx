import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface StatCardProps {
  label: string;
  iconName: IconName;
  value: string;
}
const StatCard: React.FC<StatCardProps> = ({ label, iconName, value }) => {
  return (
    <div className="bg-inside-box-bg-color flex items-center sm:flex-col gap-4 sm:gap-0 col-span-12 sm:col-span-6 xl:col-span-3 rounded-lg p-4 shadow-sm">
      <div className="bg-white/10 rounded-sm p-2 w-fit h-fit shadow-sm">
        <DynamicIcon name={iconName} size={32} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-1 sm:gap-0">
        <div className="sm:mt-2">
          <p className="opacity-80">{label}</p>
        </div>
        <div className="text-xl font-medium sm:mt-4 sm:text-center">
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
