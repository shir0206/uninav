import React from "react";

const LocateSVG = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {props.isActive ? (
      <path
        d="M11 7C12.0609 7 13.0783 7.42143 13.8284 8.17157C14.5786 8.92172 15 9.93913 15 11C15 12.0609 14.5786 13.0783 13.8284 13.8284C13.0783 14.5786 12.0609 15 11 15C9.93913 15 8.92172 14.5786 8.17157 13.8284C7.42143 13.0783 7 12.0609 7 11C7 9.93913 7.42143 8.92172 8.17157 8.17157C8.92172 7.42143 9.93913 7 11 7ZM2.05 12H0V10H2.05C2.5 5.83 5.83 2.5 10 2.05V0H12V2.05C16.17 2.5 19.5 5.83 19.95 10H22V12H19.95C19.5 16.17 16.17 19.5 12 19.95V22H10V19.95C5.83 19.5 2.5 16.17 2.05 12ZM11 4C9.14348 4 7.36301 4.7375 6.05025 6.05025C4.7375 7.36301 4 9.14348 4 11C4 12.8565 4.7375 14.637 6.05025 15.9497C7.36301 17.2625 9.14348 18 11 18C12.8565 18 14.637 17.2625 15.9497 15.9497C17.2625 14.637 18 12.8565 18 11C18 9.14348 17.2625 7.36301 15.9497 6.05025C14.637 4.7375 12.8565 4 11 4Z"
        style={{ fill: "var(--color_basic)" }}
      />
    ) : (
      <>
        <path
          fill-rule="evenodd"
          clipRule="evenodd"
          d="M12.8444 7.45062C12.2798 7.15725 11.648 7 11 7C9.93913 7 8.92172 7.42143 8.17157 8.17157C7.42143 8.92172 7 9.93913 7 11C7 11.648 7.15725 12.2798 7.45062 12.8444L12.8444 7.45062ZM15.0233 5.27172C13.8529 4.44965 12.4496 4 11 4C9.14348 4 7.36301 4.7375 6.05025 6.05025C4.7375 7.36301 4 9.14348 4 11C4 12.4496 4.44965 13.8529 5.27172 15.0233L3.83446 16.4606C2.86755 15.1938 2.22954 13.6638 2.05 12H0V10H2.05C2.5 5.83 5.83 2.5 10 2.05V0H12V2.05C13.6638 2.22954 15.1938 2.86755 16.4606 3.83446L15.0233 5.27172ZM14.3338 8.78964L8.78964 14.3338C9.44011 14.7651 10.2079 15 11 15C12.0609 15 13.0783 14.5786 13.8284 13.8284C14.5786 13.0783 15 12.0609 15 11C15 10.2079 14.7651 9.44011 14.3338 8.78964ZM6.64395 16.4795C7.87625 17.4592 9.41025 18 11 18C12.8565 18 14.637 17.2625 15.9497 15.9497C17.2625 14.637 18 12.8565 18 11C18 9.41025 17.4592 7.87625 16.4795 6.64395L17.9071 5.21639C19.0185 6.54223 19.7549 8.19218 19.95 10H22V12H19.95C19.5 16.17 16.17 19.5 12 19.95V22H10V19.95C8.19218 19.7549 6.54224 19.0185 5.21639 17.9071L6.64395 16.4795Z"
          style={{ fill: "var(--grey_7)" }}
        />
        <rect
          x="20.2998"
          y="2.54956"
          width="1"
          height="26"
          transform="rotate(45 20.2998 2.54956)"
          style={{ fill: "var(--grey_7)" }}
        />
      </>
    )}
  </svg>
);
export default LocateSVG;
