import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-4 gap-y-0.5 items-start [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border",
        success:
          "bg-green-950/30 border-green-800 text-green-400 [&>svg]:text-green-500",
        info: "bg-blue-950/30 border-blue-800 text-blue-400 [&>svg]:text-blue-500",
        warning:
          "bg-yellow-950/30 border-yellow-800 text-yellow-400 [&>svg]:text-yellow-500",
        error:
          "bg-red-950/30 border-red-800 text-red-400 [&>svg]:text-red-500",
        notification:
          "bg-purple-950/30 border-purple-800 text-purple-400 [&>svg]:text-purple-500",
      },
      clickable: {
        true: "cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      clickable: false,
    },
  }
);

interface AlertProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof alertVariants> {
  href?: string;
  icon?: IconName;
}

function Alert({
  className,
  variant,
  href,
  icon,
  children,
  ...props
}: AlertProps) {
  const alertClasses = cn(
    alertVariants({ variant, clickable: !!href }),
    className
  );

  const content = (
    <div data-slot="alert" role="alert" className={alertClasses} {...props}>
      {icon && <DynamicIcon name={icon} className="w-5 h-5" strokeWidth={1.5} />}
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block" target="_blank">
        {content}
      </Link>
    );
  }

  return content;
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight text-sm",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

function AlertTime({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-time"
      className={cn(
        "col-start-2 text-sm text-white/70 opacity-70",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription, AlertTime };
