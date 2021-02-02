import React from "react";

const ScanSVG = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15ZM16 15V18H18V15H16ZM14 15H16V13H14V11M14 15H16V13H14V11H16V13M14 15H16V13H14V11M14 15H16V13H14V11H16V13H18V11M14 15H16V13H14V11H16V13H18V11M14 15H16V13H14V11H16V13H18V11M14 15H16V13H14V11H16V13H18V11"
      style={{ fill: "var(--color_default_btn)" }}
    />
    <path d="M6 11H4V13H6V11Z" style={{ fill: "var(--color_default_btn)" }} />
    <path d="M13 11H9V13H11V15H13V11Z" style={{ fill: "var(--color_default_btn)" }} />
    <path d="M13 6H11V10H13V6Z" style={{ fill: "var(--color_default_btn)" }} />
    <path
      d="M2 6V2H6V0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6H2Z"
      style={{ fill: "var(--color_default_btn)" }}
    />
    <path
      d="M23.4142 0.585786C23.0391 0.210714 22.5304 0 22 0H18V2H22V6H24V2C24 1.46957 23.7893 0.960859 23.4142 0.585786Z"
      style={{ fill: "var(--color_default_btn)" }}
    />
    <path
      d="M2 22V18H0V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H6V22H2Z"
      style={{ fill: "var(--color_default_btn)" }}
    />
    <path
      d="M22 18V22H18V24H22C22.5304 24 23.0391 23.7893 23.4142 23.4142C23.7893 23.0391 24 22.5304 24 22V18H22Z"
      style={{ fill: "var(--color_default_btn)" }}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4H4V10H10V4ZM6 6V8H8V6H6Z"
      style={
        props.selectedNavButton
          ? { fill: "var(--color_accent)" }
          : { fill: "var(--color_default_btn)" }
      }
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 14H4V20H10V14ZM6 16V18H8V16H6Z"
      style={
        props.selectedNavButton
          ? { fill: "var(--color_accent)" }
          : { fill: "var(--color_default_btn)" }
      }
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4H14V10H20V4ZM16 6V8H18V6H16Z"
      style={
        props.selectedNavButton
          ? { fill: "var(--color_accent)" }
          : { fill: "var(--color_default_btn)" }
      }
    />
  </svg>
);
export default ScanSVG;
