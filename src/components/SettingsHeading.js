import React from "react";
import "./settingsHeading.css";
import UniNavLogoSVG from "../icons/UniNavLogoSVG.js";

import getString from "../strings/strings";

export const SettingsHeading = (props) => {
  return (
    <div className="settings-heading">
      <h4 className="settings-title">{getString("POI_SETTINGS_TITLE")}</h4>
      <hr className="settings-title-hr"></hr>

      <UniNavLogoSVG width={250} height={250}></UniNavLogoSVG>
    </div>
  );
};
