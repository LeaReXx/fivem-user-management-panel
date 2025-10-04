"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  error?: string;
  onChange?: (date: Date | undefined) => void;
  value?: Date;
  placeholder?: string;
}

export const Calendar22 = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ error, onChange, value, placeholder = "تاریخ تولد" }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(value);
    
    React.useEffect(() => {
      if (onChange) onChange(date);
    }, [date, onChange]);

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          {/* Trigger styled to match the input component: dark background, rounded-sm, padding, shadow, focus, disabled behavior */}
          <button
            ref={ref}
            id="date"
            className={`flex w-full items-center justify-between border border-foreground/10 bg-secondary-box-background placeholder:text-white/40 rounded-sm py-3 px-3 shadow-md focus:outline-2 focus:outline-white/30 focus:shadow-lg disabled:opacity-80 ${!date ? "text-white/40" : "text-white"} ${error ? "border-red-500" : ""}`}
          >
            {date ? date.toLocaleDateString() : placeholder}
            <ChevronDownIcon className="size-4 opacity-50 text-white/40" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full overflow-hidden p-0 bg-secondary-box-background text-white rounded-sm shadow-lg border-0"
          align="start"
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {error && (
        <span className="text-red-400 text-sm mt-1 px-2 block bg-red-900/20 py-1 rounded">
          {error}
        </span>
      )}
    </div>
  );
});

Calendar22.displayName = "Calendar22";
