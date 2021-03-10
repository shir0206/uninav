import React from "react";

const StopSVG = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M5 17C5 8.71573 11.7157 2 20 2C28.2843 2 35 8.71573 35 17C35 25.2843 28.2843 32 20 32C11.7157 32 5 25.2843 5 17Z"
        fill="#2E999F"
      />
      <rect x="14" y="11" width="12" height="12" rx="2" fill="#F9FAFC" />
      <rect x="14" y="17" width="12" height="6" fill="#E9E9E6" />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="40"
        height="40"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="2.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0196078 0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default StopSVG;
