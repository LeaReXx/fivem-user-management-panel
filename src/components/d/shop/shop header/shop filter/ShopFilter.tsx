"use client";
import { useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const options = [
  { value: "expensive", label: "گران‌ترین" },
  { value: "cheap", label: "ارزان‌ترین" },
  { value: "discount", label: "تخفیف‌دار" },
  { value: "free", label: "رایگان" },
];

const ShopFilter = () => {
  const [filter, setFilter] = useQueryState("filter");

  const handleChange = (value: string) => {
    setFilter(value || null);
  };

  return (
    <div>
      <Select onValueChange={handleChange} value={filter ?? undefined}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="مرتب‌سازی بر اساس" />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ShopFilter;