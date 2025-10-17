"use client";
import Input from "@/components/ui/Input";
import { useQueryState } from "nuqs";
import React, { useState } from "react";

const ShopSearch: React.FC = () => {
  const [filter, setFilter] = useQueryState("search");
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLowerCase() || null);
  };
  return (
    <div className="sm:w-1/2 sm:max-w-[320px]">
      <Input placeholder="جستجو..." onInput={handleSearchInputChange} icon="search" />
    </div>
  );
};
export default ShopSearch;
