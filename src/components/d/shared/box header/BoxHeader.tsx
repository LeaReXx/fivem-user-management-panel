import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import type React from "react";

interface BoxHeaderProps {
  title: string;
  iconName?: IconName;
  children?: React.ReactNode;
}

const BoxHeader: React.FC<BoxHeaderProps> = ({ title, iconName, children }) => {
  return (
    <div className="flex items-center justify-between col-span-12 order-1">
      <div className="flex gap-2 items-center">
        {iconName && (
          <div className="bg-brand-color p-2 w-fit rounded-full">
            <DynamicIcon size={20} name={iconName} color="#ffffff" />
          </div>
        )}
        {title && <h2>{title}</h2>}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default BoxHeader;
