import React from "react";
import "./POIPopupContent.css";

export const POIPopupContent = ({ poi, getIconByType }) => {
  return (
    <>
      {poi.img && <img src={poi.img} alt={poi.desc} className="poi-img"></img>}
      <hr className="poi-hr poi-img-hr-top "></hr>
      <hr className="poi-hr poi-img-hr-bottom"></hr>
      <img
        className="poi-type"
        src={getIconByType(poi.type)}
        alt={poi.type}
      ></img>

      <h1 className="poi-name">{poi.name}</h1>
      <div className="poi-content">
        <hr className={"poi-hr poi-hr-desc poi-hr-type-" + poi.type}></hr>
        <div>
          <h2 className="poi-desc">{poi.desc}</h2>
        </div>
      </div>
    </>
  );
};
