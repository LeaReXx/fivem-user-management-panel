import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React, { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconName;
  extendClassName?: string;
};

const Input: FC<InputProps> = ({ icon, extendClassName, ...props }) => {
  return (
    <div className="relative flex items-center justify-center">
      {icon && (
        <DynamicIcon
          name={icon}
          size={22}
          strokeWidth={1.5}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-white z-10 ${
            props.disabled ? "opacity-30" : "opacity-40"
          }`}
        />
      )}
      <input
        className={`${extendClassName} bg-secondary-box-background disabled:opacity-80 w-full rounded-sm py-3 placeholder:font-light placeholder:text-white/40 outline-0 focus:outline-2 focus:outline-white/30 shadow-md focus:shadow-lg ${
          icon ? "pr-10" : "px-2"
        }`}
        {...props}
      />
    </div>
  );
};

export default Input;
