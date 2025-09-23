import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconName;
  extendClassName?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ icon, extendClassName, error, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative flex flex-col">
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
          ref={ref}
          type={inputType}
          className={`${extendClassName} bg-secondary-box-background disabled:opacity-80 w-full rounded-sm py-3 placeholder:font-light placeholder:text-white/40 outline-0 focus:outline-2 focus:outline-white/30 shadow-md focus:shadow-lg ${
            icon ? "pr-10" : "px-2"
          } ${isPasswordField ? "pl-12" : icon ? "pl-2" : "px-2"} ${error ? "border border-red-500" : ""}`}
          {...props}
        />
        {isPasswordField && (
          <button
            type="button"
            disabled={props.disabled}
            onClick={toggleShowPassword}
            className={`absolute opacity-70 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-default left-2 cursor-pointer hover:bg-main-box-background py-1 px-1.5 rounded-sm ${
              error ? "top-[30%]" : "top-1/2"
            } transform -translate-y-1/2`}
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        )}
      </div>
      {error && (
        <span className="text-red-400 text-sm mt-1 px-2 block bg-red-900/20 py-1 rounded">
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
