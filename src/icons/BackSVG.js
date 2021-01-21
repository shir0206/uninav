import React from "react";

const BackSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.9">
      <path
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
        style={{ fill: "var(--color_default_btn)" }}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 13L16.2 13L10.6 18.6L12 20L20 12L12 4L10.6 5.4L16.2 11L4 11L4 13Z"
        style={{ fill: "var(--color_default_background)" }}
      />
    </g>
  </svg>
);
export default BackSVG;
