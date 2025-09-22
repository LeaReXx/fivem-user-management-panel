"use client"
import Spinner from "@/components/ui/Spinner";
import { useRouter } from "next/navigation";
import React from "react";

interface WideButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  extendedClassName?: React.ButtonHTMLAttributes<HTMLButtonElement>["className"];
  loading?: boolean;
  link?: string;
}

const WideButton: React.FC<WideButtonProps> = ({
  text,
  extendedClassName = "bg-gray-500",
  children,
  loading,
  link,
  ...props
}) => {
  const router = useRouter();
  const buttonOnClick = () => {
    link && router.push(link);
    return;
  };
  return (
    <button
      className={`${extendedClassName} w-full disabled:opacity-70 cursor-pointer pe-2 duration-200 relative flex items-center py-2 text-white rounded-sm text-lg font-medium`}
      onClick={buttonOnClick}
      {...props}
    >
      {children ? (
        <span className="px-2 border-l border-white/20 absolute">
          {loading ? <Spinner /> : children}
        </span>
      ) : null}
      <span className="ps-2 w-full text-center">{text}</span>
    </button>
  );
};

export default WideButton;
