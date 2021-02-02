import React, { useState } from "react";
import QrReader from "react-qr-scanner";

export const Test = (props) => {
  const [state, setState] = useState({
    delay: 100,
    result: "No result",
  });

  const handleScan = (data) => {
    console.log(data);

    if (data) {
      setState(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <QrReader
        delay={state.delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{state.result}</p>
    </div>
  );
};
