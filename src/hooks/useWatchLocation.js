import { useState, useEffect, useRef } from "react";

const useWatchLocation = (options = {}) => {
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
    setError(error.message);
  };

  // Clears the watch instance based on the saved watch id
  const cancelLocationWatch = () => {
    if (locationWatchId.current && navigator.geolocation) {
      navigator.geolocation.clearWatch(locationWatchId.current);
    }
  };

  useEffect(() => {
    // If the geolocation is not defined in the used browser we handle it as an error
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    // Start to watch the location with the Geolocation API
    locationWatchId.current = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      options
    );

    // Clear the location watch instance when React unmounts the used component
    return cancelLocationWatch;
  }, [options]);

  return { location, cancelLocationWatch, error };
};

export default useWatchLocation;
