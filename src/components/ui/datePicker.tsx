"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DatePickerProps {
  error?: string;
  onChange?: (date: Date | undefined) => void;
  value?: Date;
  placeholder?: string;
  disabled?: boolean;
  size?: "sm" | "md";
}

export const Calendar22 = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      error,
      onChange,
      value,
      placeholder = "تاریخ تولد",
      disabled = false,
      size = "md",
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(value);

    React.useEffect(() => {
      if (onChange) onChange(date);
    }, [date, onChange]);

    const sizeClasses = {
      sm: "py-2 px-2 text-sm",
      md: "py-3 px-3 text-base",
    };

    return (
      <div className="flex flex-col gap-1">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              ref={ref}
              id="date"
              className={`flex w-full items-center justify-between font-normal border border-main-text-color/10 bg-input-color placeholder:text-main-text-color/60 rounded-sm shadow-md focus:outline-2 focus:outline-white/30 focus:shadow-lg disabled:opacity-80 ${sizeClasses[size]} ${
                !date ? "text-main-text-color/60" : "text-main-text-color"
              } ${error ? "border-red-500" : ""}`}
              disabled={disabled}
            >
              {date ? date.toLocaleDateString() : placeholder}
              <ChevronDownIcon className="size-4 opacity-50 text-main-text-color/40" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="w-full overflow-hidden p-0 bg-input-color text-main-text-color rounded-sm shadow-lg border-0"
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
          <span className="text-red-100 text-sm px-2 block bg-red-500/70 py-1 rounded">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Calendar22.displayName = "Calendar22";
