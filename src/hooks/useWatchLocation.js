import { useState, useEffect, useRef } from "react";
import { geoPropTypes } from "react-geolocated";

import getString from "../strings/strings";

const useWatchLocation = (isLocateUser, options = {}) => {
  // store location in state
  const [location, setLocation] = useState();

  // store error message in state
  const [error, setError] = useState();

  // save the returned id from the geolocation's `watchPosition` to be able to cancel the watch instance
  const locationWatchId = useRef(null);

  // Success handler for geolocation's `watchPosition` method
  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  // Error handler for geolocation's `watchPosition` method
  const handleError = (error) => {
    const errorMsg = getString(showErrorMsg(error));
    setError(errorMsg);
  };

  function showErrorMsg(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return "PERMISSION_DENIED";
      case error.POSITION_UNAVAILABLE:
        return "POSITION_UNAVAILABLE";
      case error.TIMEOUT:
        return "TIMEOUT";
      case error.UNKNOWN_ERROR:
        return "UNKNOWN_ERROR";
    }
  }

  // Clears the watch instance based on the saved watch id
  const cancelLocationWatch = () => {
    if (locationWatchId.current && navigator.geolocation) {
      navigator.geolocation.clearWatch(locationWatchId.current);
    }
  };

  useEffect(() => {
    if (!isLocateUser) return;

    // If the geolocation is not defined in the used browser we handle it as an error
    if (!navigator.geolocation) {
      setError(getString("GEOLOCATION_NOT_SUPPORTED"));
      return;
    }

    // Start to watch the location with the Geolocation API
    locationWatchId.current = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      options
    );

    console.log("updating user location");

    // Clear the location watch instance when React unmounts the used component
    return cancelLocationWatch;
  }, [isLocateUser, options]);

  return { location, cancelLocationWatch, error };
};

export default useWatchLocation;
