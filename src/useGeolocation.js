import {useEffect, useState,callback,enableHighAccuracy,maximumAge,timeout} from 'react'

const useGeolocation = ({enableHighAccuracy, maximumAge, timeout} = {}, callback) => {

  const [coordinates, setCoordinates] = useState({
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null
  })

  useEffect(() => {
    let didCancel
    const updateCoordinates = ({coords = {}, timestamp}) => {
      const {
        accuracy,
        altitude,
        altitudeAccuracy,
        heading,
        latitude,
        longitude,
        speed
      } = coords
      if (!didCancel) {
        setCoordinates({
          accuracy,
          altitude,
          altitudeAccuracy,
          heading,
          latitude,
          longitude,
          speed,
          timestamp,
          error: null
        })
        if (callback instanceof Function) {
          callback({
            accuracy,
            altitude,
            altitudeAccuracy,
            heading,
            latitude,
            longitude,
            speed,
            timestamp,
            error: null
          })
        }
      }
    }

    const setError = error => {
      if (!didCancel) {
        updateCoordinates({
          accuracy: null,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          latitude: null,
          longitude: null,
          speed: null,
          timestamp: null,
          error
        })
      }
    }

    let watchId
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updateCoordinates, setError)
      watchId = navigator.geolocation.watchPosition(
        updateCoordinates,
        setError,
        {enableHighAccuracy, maximumAge, timeout}
      )
    }
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId)
      }
      didCancel = true
    }
  }, [])

  return coordinates
}

export default useGeolocation
