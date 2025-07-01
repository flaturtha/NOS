import React from "react";

export function FlourishDivider() {
  return (
    <div className="w-full flex justify-center my-6">
      <svg
        width="120"
        height="16"
        viewBox="0 0 120 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="opacity-60"
      >
        <path
          d="M2 8c20-8 96-8 116 0"
          stroke="#8B0000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="60" cy="8" r="3" fill="#8B0000" />
      </svg>
    </div>
  );
} 