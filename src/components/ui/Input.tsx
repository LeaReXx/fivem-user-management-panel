import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React, {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconName;
  extendClassName?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, extendClassName, error, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = props.name === "password";
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
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-main-text-color z-10 ${
                props.disabled ? "opacity-30" : "opacity-70"
              }`}
            />
          )}
          <input
            ref={ref}
            type={inputType}
            className={`${extendClassName} border border-main-text-color/10 bg-inside-box-bg-color/90 autofill:bg-none autofill:bg-transparent disabled:opacity-80 w-full rounded-sm py-3 placeholder:font-normal font-normal placeholder:text-main-text-color/60 outline-0 focus:outline-2 focus:outline-white/30 shadow-md focus:shadow-lg ${
              icon ? "pr-10" : "px-2"
            } ${isPasswordField ? "pl-12" : icon ? "pl-2" : "px-2"} ${
              error ? "border border-red-500" : ""
            }`}
            {...props}
          />
          {isPasswordField && (
            <button
              type="button"
              disabled={props.disabled}
              onClick={toggleShowPassword}
              className={`absolute opacity-70 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-default left-2 cursor-pointer hover:bg-content-box-bg-color-1 py-1 px-1.5 rounded-sm ${
                error ? "top-6" : "top-1/2"
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
  }
);

Input.displayName = "Input";

export default Input;
