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
      <aside className="hidden lg:flex sticky top-0 overflow-hidden right-0 h-dvh max-h-[1000px] lg:w-70 xl:w-75 z-40">
        <div className="m-4 me-0 bg-linear-to-t w-full lg:flex lg:flex-col px-4 from-navbar-bg-color-1 to-navbar-bg-color-2 backdrop-blur-[2px] rounded-xl border-white/20 shadow-lg">
          <div className="flex items-center justify-between h-[12%] border-b border-white/20">
            <BrandLogo />
          </div>
          
          <Navbar />
          <MenuFooter />
        </div>
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
        lg:hidden fixed right-0 overflow-hidden px-4 top-0 h-dvh w-70 bg-linear-to-t from-navbar-bg-color-1 to-navbar-bg-color-2 backdrop-blur-[2px] rounded-l-xl border-white/20 shadow-lg z-50 flex flex-col
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
