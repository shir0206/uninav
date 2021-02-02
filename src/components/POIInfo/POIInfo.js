import React, { useEffect, useState } from "react";

import "./POIInfo.css";
import { useHistory, useParams } from "react-router-dom";
import firebase from "../../firebase/Firebase";
import { POIInfoContent } from "../POIInfoContent/POIInfoContent";

export const POIInfo = (props) => {
  let history = useHistory();
  const { poiId } = useParams();

  const [poi, setPOI] = useState(null);

  useEffect(
    () => {
      if (props.mapPOIs.length !== 0) {
        const currentPOI = props.mapPOIs.find((p) => p.id === poiId);
        console.log(currentPOI);
        setPOI(currentPOI);
        return;
      }

      // DB Request, extract all the data from Firebase
      firebase
        .database()
        .ref("mapPOIs")
        .once("value", (querySnapShot) => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let dataArr = [...data];
          console.log(data);

          // Initialize the state with all the data recieved from DB
          props.setMapPOIs(dataArr);

          const currentPOI = dataArr.find((p) => p.id === poiId);
          console.log(currentPOI);

          setPOI(currentPOI);
        });
    },
    [] // Occurs when the state within is changing (once)
  );

  return (
    <>
      {props.mapPOIs && props.mapPOIs.length !== 0 && poi && (
        <POIInfoContent poi={poi}></POIInfoContent>
      )}
    </>
  );
};
