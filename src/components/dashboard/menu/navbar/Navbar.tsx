"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useNavbarStore } from "@/stores";
import NavbarItem from "./navbar item/NavbarItem";
import { useMenuItems } from "@/hooks/useMenuItems";

const Navbar: React.FC = () => {
  const { closeNavbar } = useNavbarStore();
  const { visibleMenuItems } = useMenuItems();
  const pathname = usePathname();

  // تابع برای تشخیص اینکه آیا منوی فعلی active است یا نه
  const isMenuActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="flex flex-col h-[75%] md:h-[75%] pt-6">
      <div className="mb-8">
        <ul className="space-y-3">
          {visibleMenuItems.map((item) => (
            <NavbarItem
              key={item.id}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={isMenuActive(item.href)}
              onClick={closeNavbar}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
