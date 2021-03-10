import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import "./QRReader.css";
import { useHistory } from "react-router-dom";

export const QRReader = (props) => {
  const history = useHistory();

  const [scannedText, setScannedText] = useState({
    delay: 100,
    result: "No result",
  });

  const handleScan = (data) => {
    if (data) {
      console.log(data);

      setScannedText(data.text);
      const path = "/uninav/pois/" + data.text;
      history.push(path);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  // facingMode={"rear"}

  return (
    <div>
      <QrReader
        delay={scannedText.delay}
        onError={handleError}
        onScan={handleScan}
        className={"qr-reader"}
      />
      <p>{scannedText.result}</p>
    </div>
  );
};
