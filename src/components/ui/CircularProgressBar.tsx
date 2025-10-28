"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

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
  semicircle?: boolean;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  remainingDays = 0,
  size = 120,
  strokeWidth = 8,
  gradientColors = ["#ef4444", "#22c55e"], // از قرمز به سبز
  backgroundColor = "var(--bg-inside-box)",
  showPercentage = false,
  showRemainingDays = true,
  showLabel = false,
  label = "",
  duration = 1000,
  className = "",
  textClassName = "",
  semicircle = false,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const [animatedPercentage, setAnimatedPercentage] = React.useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = semicircle ? Math.PI * radius : 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (animatedPercentage / 100) * circumference;

  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    const startTime = Date.now();
    const startPercentage = animatedPercentage;
    const targetPercentage = Math.min(Math.max(percentage, 0), 100);

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - (1 - progress) ** 3;

      const newPercentage =
        startPercentage + (targetPercentage - startPercentage) * easeOut;
      setAnimatedPercentage(newPercentage);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimatedPercentage(targetPercentage);
      }
    };

    requestAnimationFrame(animate);
  }, [percentage, duration]);

  const getColorByPercentage = (percent: number) => {
    if (percent <= 33) return "#c92a2a"; // قرمز
    if (percent <= 66) return "#cc830a"; // نارنجی
    return "#15a349"; // سبز
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <svg
        width={size}
        height={semicircle ? size / 2 + strokeWidth : size}
        className={semicircle ? "transform" : "transform -rotate-90"}
        style={{
          filter: "drop-shadow(0 0 6px rgba(0,0,0,0.1))",
          overflow: "visible",
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
          d={
            semicircle
              ? `M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${
                  size - strokeWidth / 2
                } ${size / 2}`
              : `M ${size / 2} ${strokeWidth / 2} A ${radius} ${radius} 0 1 1 ${
                  size / 2
                } ${size - strokeWidth / 2} A ${radius} ${radius} 0 1 1 ${
                  size / 2
                } ${strokeWidth / 2}`
          }
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
        />

        {/* Progress Circle/Semicircle */}
        <path
          d={
            semicircle
              ? `M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${
                  size - strokeWidth / 2
                } ${size / 2}`
              : `M ${size / 2} ${strokeWidth / 2} A ${radius} ${radius} 0 1 1 ${
                  size / 2
                } ${size - strokeWidth / 2} A ${radius} ${radius} 0 1 1 ${
                  size / 2
                } ${strokeWidth / 2}`
          }
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Center Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center font-dana"
        style={{
          top: semicircle ? "20%" : "0",
          height: semicircle ? "auto" : "100%",
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
          <div className="flex flex-col items-center mt-4">
            <span
              className={`text-4xl font-bold transition-colors duration-300`}
              style={{ color: getColorByPercentage(animatedPercentage) }}
            >
              <CountUp end={remainingDays} duration={duration / 1000} />
            </span>
            <span className="text-lg opacity-70">روز باقیمانده</span>
          </div>
        )}
        {showLabel && label && !showRemainingDays && (
          <span className="text-sm opacity-70 mt-1">{label}</span>
        )}
      </div>
    </div>
  );
};

export default CircularProgressBar;
