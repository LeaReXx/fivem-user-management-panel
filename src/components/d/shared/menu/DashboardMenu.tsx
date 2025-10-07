"use client";
import React from "react";
import { useNavbarStore } from "@/stores";
import BrandLogo from "./brand logo/BrandLogo";
import Navbar from "./navbar/Navbar";
import MenuFooter from "./footer/MenuFooter";

const DashboardMenu: React.FC = () => {
  const { isOpen, closeNavbar } = useNavbarStore();

  return (
    <>
      {/* Desktop Menu - Always visible on large screens */}
      <aside className="hidden lg:flex fixed overflow-hidden right-0 px-4 top-0 h-full lg:w-65 xl:w-70 bg-gradient-to-t from-navbar-bg-color-1 to-navbar-bg-color-2 backdrop-blur-[2px] rounded-l-xl border-white/20 shadow-lg z-40 flex-col">
        <div className="flex items-center justify-between h-[12%] border-b border-white/20">
          <BrandLogo />
        </div>
        <Navbar />
        <MenuFooter />
      </aside>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-white/10 backdrop-blur-sm z-50"
          onClick={closeNavbar}
        />
      )}

      {/* Mobile Menu */}
      <aside
        className={`
        lg:hidden fixed right-0 overflow-hidden px-4 top-0 h-[100dvh] w-70 bg-gradient-to-t from-navbar-bg-color-1 to-navbar-bg-color-2 backdrop-blur-[2px] rounded-l-xl border-white/20 shadow-lg z-50 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between h-[12%] border-b border-white/20">
          <BrandLogo />
        </div>
        <Navbar />
        <MenuFooter />
      </aside>
    </>
  );
};

export default DashboardMenu;
