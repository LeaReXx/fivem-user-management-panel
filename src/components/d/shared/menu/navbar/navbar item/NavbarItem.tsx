import React from "react";
import Link from "next/link";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface NavbarItemProps {
  href: string;
  icon: IconName;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  href,
  icon,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`
          flex items-center gap-6 py-1.5 px-4 rounded-lg transition-colors
          ${
            isActive
              ? "bg-gradient-to-t from-brand-color/70 to-brand-color/50 font-medium text-white shadow-md"
              : "opacity-90 hover:bg-brand-color/20"
          }
        `}
      >
        <span className="bg-brand-color p-1.5 rounded-sm text-white shadow-md">
          <DynamicIcon name={icon} size={22} strokeWidth={isActive ? 2 : 1.5} />
        </span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavbarItem;
