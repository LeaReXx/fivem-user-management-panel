"use client";
import { useQueryState } from "nuqs";
import type React from "react";
import { useState } from "react";
import Input from "@/components/ui/Input";

const ShopSearch: React.FC = () => {
  const [filter, setFilter] = useQueryState("search");
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLowerCase() || null);
  };
  return (
    <div className="sm:w-1/2 sm:max-w-[320px]">
      <Input
        placeholder="جستجو..."
        onInput={handleSearchInputChange}
        icon="search"
      />
    </div>
  );
};
export default ShopSearch;
