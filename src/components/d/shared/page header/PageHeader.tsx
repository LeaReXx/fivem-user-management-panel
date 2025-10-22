import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React from "react";

interface PageHeaderProps {
  title: string;
  iconName: IconName;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  iconName,
  children,
}) => {
  return (
    <div className="w-1/3">
      <div className="flex gap-2 items-center">
        {iconName && (
          <div className="bg-brand-color p-2 w-fit rounded-full">
            <DynamicIcon size={20} name={iconName} color="#ffffff" />
          </div>
        )}
        {title && <h2 className="font-medium text-lg">{title}</h2>}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default PageHeader;
