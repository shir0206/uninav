import React from "react";
import "./HeadingSettings.css";
import UniNavLogoSVG from "../../icons/UniNavLogoSVG.js";

import getLocaleString from "../../locale/locale";

export const HeadingSettings = () => {
  return (
    <div className="settings-heading">
      <h4 className="settings-title">{getLocaleString("POI_SETTINGS_TITLE")}</h4>
      <hr className="settings-title-hr"></hr>

      <UniNavLogoSVG width={250} height={250}></UniNavLogoSVG>
    </div>
  );
};
