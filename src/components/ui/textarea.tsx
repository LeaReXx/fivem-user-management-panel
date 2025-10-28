import type * as React from "react";

import { cn } from "@/lib/utils";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  error?: string;
}

function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <div className="relative flex flex-col">
      <textarea
        data-slot="textarea"
        className={cn(
          "border border-main-text-color/10 bg-input-color flex field-sizing-content min-h-16 w-full rounded-sm px-3 py-3 shadow-md transition-[color,box-shadow] outline-none focus:outline-2 focus:outline-white/30 focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-80 placeholder:text-main-text-color/60 placeholder:font-light",
          error ? "border border-red-500" : "",
          className,
        )}
        {...props}
      />
      {error && (
        <span className="text-red-100 text-sm mt-1 px-2 block bg-red-500/70 py-1 rounded-sm">
          {error}
        </span>
      )}
    </div>
  );
}

export { Textarea };
