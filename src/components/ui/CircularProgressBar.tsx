"use client";
import React from "react";

interface CircularProgressBarProps {
  percentage: number;
  remainingDays?: number;
  size?: number;
  strokeWidth?: number;
  gradientColors?: [string, string];
  backgroundColor?: string;
  showPercentage?: boolean;
  showRemainingDays?: boolean;
  showLabel?: boolean;
  label?: string;
  duration?: number;
  className?: string;
  textClassName?: string;
  labelClassName?: string;
  daysClassName?: string;
  semicircle?: boolean;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  remainingDays = 0,
  size = 120,
  strokeWidth = 8,
  gradientColors = ["#ef4444", "#22c55e"], // از قرمز به سبز
  backgroundColor = "#374151",
  showPercentage = true,
  showRemainingDays = false,
  showLabel = false,
  label = "",
  duration = 1000,
  className = "",
  textClassName = "",
  labelClassName = "",
  daysClassName = "",
  semicircle = false,
}) => {
  const [animatedPercentage, setAnimatedPercentage] = React.useState(0);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = semicircle ? Math.PI * radius : 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;
  
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(Math.min(Math.max(percentage, 0), 100));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [percentage]);

  const getColorByPercentage = (percent: number) => {
    if (percent <= 33) return "#ef4444"; // قرمز
    if (percent <= 66) return "#f59e0b"; // نارنجی
    return "#22c55e"; // سبز
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={semicircle ? size / 2 + strokeWidth : size}
        className={semicircle ? "transform" : "transform -rotate-90"}
        style={{ 
          filter: "drop-shadow(0 0 6px rgba(0,0,0,0.1))",
          overflow: "visible"
        }}
      >
        <defs>
          <linearGradient 
            id={gradientId} 
            x1={semicircle ? "0%" : "0%"} 
            y1={semicircle ? "50%" : "0%"} 
            x2={semicircle ? "100%" : "100%"} 
            y2={semicircle ? "50%" : "100%"}
          >
            <stop offset="0%" stopColor={gradientColors[0]} />
            <stop offset="100%" stopColor={gradientColors[1]} />
          </linearGradient>
        </defs>
        
        {/* Background Circle/Semicircle */}
        <path
          d={semicircle 
            ? `M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`
            : `M ${size / 2} ${strokeWidth / 2} A ${radius} ${radius} 0 1 1 ${size / 2} ${size - strokeWidth / 2} A ${radius} ${radius} 0 1 1 ${size / 2} ${strokeWidth / 2}`
          }
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          opacity={0.3}
          strokeLinecap="round"
        />
        
        {/* Progress Circle/Semicircle */}
        <path
          d={semicircle 
            ? `M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`
            : `M ${size / 2} ${strokeWidth / 2} A ${radius} ${radius} 0 1 1 ${size / 2} ${size - strokeWidth / 2} A ${radius} ${radius} 0 1 1 ${size / 2} ${strokeWidth / 2}`
          }
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{
            transitionDuration: `${duration}ms`,
          }}
        />
        
        {/* Inner glow effect */}
        <path
          d={semicircle 
            ? `M ${strokeWidth / 2} ${size / 2} A ${radius - strokeWidth / 2} ${radius - strokeWidth / 2} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`
            : `M ${size / 2} ${strokeWidth / 2} A ${radius - strokeWidth / 2} ${radius - strokeWidth / 2} 0 1 1 ${size / 2} ${size - strokeWidth / 2} A ${radius - strokeWidth / 2} ${radius - strokeWidth / 2} 0 1 1 ${size / 2} ${strokeWidth / 2}`
          }
          stroke={getColorByPercentage(animatedPercentage)}
          strokeWidth={1}
          fill="transparent"
          opacity={0.2}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      
      {/* Center Content */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center font-dana"
        style={{ 
          top: semicircle ? '20%' : '0',
          height: semicircle ? 'auto' : '100%'
        }}
      >
        {showPercentage && (
          <span 
            className={`text-2xl font-bold transition-colors duration-300 ${textClassName}`}
            style={{ color: getColorByPercentage(animatedPercentage) }}
          >
            {Math.round(animatedPercentage)}%
          </span>
        )}
        {showRemainingDays && (
          <div className="flex flex-col items-center">
            <span 
              className={`text-3xl font-extrabold transition-colors duration-300 ${daysClassName}`}
              style={{ color: getColorByPercentage(animatedPercentage) }}
            >
              {remainingDays}
            </span>
            <span className={`text-sm opacity-70 ${labelClassName}`}>
              روز باقیمانده
            </span>
          </div>
        )}
        {showLabel && label && !showRemainingDays && (
          <span className={`text-sm opacity-70 mt-1 ${labelClassName}`}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
};

export default CircularProgressBar;