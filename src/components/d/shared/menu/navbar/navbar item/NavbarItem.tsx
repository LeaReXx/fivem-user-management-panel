import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";
import type React from "react";

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
              ? "bg-linear-to-t from-brand-color to-brand-color/70 font-medium shadow-md text-white"
              : "opacity-90 hover:bg-brand-color/30"
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
