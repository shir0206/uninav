import React, { useState } from "react";
import "./splashScreen.css";
import UniversityLogoSVG from "../icons/UniversityLogoSVG.js";
import UniNavLogoSVG from "../icons/UniNavLogoSVG.js";

export const SplashScreen = (props) => {
  return (
    <div className="splash-screen">
      <div className="university-logo">
        <UniversityLogoSVG></UniversityLogoSVG>
      </div>
      <div className="uninav-logo">
        <UniNavLogoSVG></UniNavLogoSVG>
      </div>
    </div>
  );
};
