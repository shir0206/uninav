import React, { useState } from "react";
import QrReader from "react-qr-reader";

import "./QRReader.css";
import { useHistory } from "react-router-dom";

export const QRReader = (props) => {
  const history = useHistory();

  const [scannedText, setScannedText] = useState({
    delay: 100,
    result: "No result",
  });

  const handleScan = (scannedCode) => {
    if (scannedCode) {
      console.log(scannedCode);

      setScannedText(scannedCode);
      const path = "/uninav/pois/" + scannedCode;
      history.push(path);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="qr-reader-container">
      <QrReader
        delay={scannedText.delay}
        onError={handleError}
        onScan={handleScan}
        className={"qr-reader"}
        facingMode={"environment"}
      />
      <p>{scannedText.result}</p>
    </div>
  );
};
