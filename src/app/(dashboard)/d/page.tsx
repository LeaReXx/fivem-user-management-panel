"use client";
import { useNavbarStore } from "@/stores";
import { Home, Menu } from "lucide-react";
import React from "react";

const DashboardPage: React.FC = () => {
  const { toggleNavbar } = useNavbarStore();

  return (
    <div className="p-6">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleNavbar}
        className="lg:hidden cursor-pointer fixed top-4 right-4 z-30 bg-white/10 backdrop-blur-lg border border-white/20 text-white p-3 rounded-lg shadow-lg hover:bg-white/20 transition-colors"
      >
        <Menu size={24} />
      </button>

      <div className="flex gap-2">
        <Home />
        <p className="text-xl font-medium">داشبورد</p>
      </div>
    </div>
  );
};

export default DashboardPage;
