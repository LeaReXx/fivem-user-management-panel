import { cva, type VariantProps } from "class-variance-authority";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";
import type * as React from "react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border",
        success:
          "bg-green-950/70 dark:bg-green-950/30 border-green-800 text-green-100 dark:text-green-400 [&>svg]:text-green-500",
        info: "bg-blue-950/70 dark:bg-blue-950/30 border-blue-800 text-blue-100 dark:text-blue-400 [&>svg]:text-blue-500",
        warning:
          "bg-yellow-950/70 dark:bg-yellow-950/30 border-yellow-800 text-yellow-100 dark:text-yellow-400 [&>svg]:text-yellow-500",
        error:
          "bg-red-950/70 dark:bg-red-950/30 border-red-800 text-red-100 dark:text-red-400 [&>svg]:text-red-500",
        notification:
          "bg-purple-950/70 dark:bg-purple-950/30 border-purple-800 text-purple-100 dark:text-purple-400 [&>svg]:text-purple-500",
      },
      clickable: {
        true: "cursor-pointer hover:shadow-md hover:scale-[1.01]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      clickable: false,
    },
  },
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
    className,
  );

  const content = (
    <div data-slot="alert" role="alert" className={alertClasses} {...props}>
      <div className="flex items-start gap-3">
        {icon && (
          <div className="shrink-0 mt-0.5">
            <DynamicIcon name={icon} strokeWidth={1.5} size={20} />
          </div>
        )}
        <div className="flex-1 min-w-0 space-y-1">{children}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
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
        "font-medium tracking-tight text-sm leading-tight",
        className,
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
      className={cn("text-sm [&_p]:leading-relaxed opacity-90", className)}
      {...props}
    />
  );
}

function AlertTime({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-time"
      className={cn("text-xs opacity-70", className)}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription, AlertTime };
