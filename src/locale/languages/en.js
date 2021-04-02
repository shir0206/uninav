export default function getLocaleString(stringKey) {
  const allStrings = {
    PERMISSION_DENIED: "User denied the request for Geolocation.",

    CHANGE_PERMISSIONS_LINK: "XXX",

    POSITION_UNAVAILABLE: "Location information is unavailable.",

    TIMEOUT: "The request to get user location timed out.",

    UNKNOWN_ERROR: "An unknown error occurred.",

    GEOLOCATION_NOT_SUPPORTED: "Geolocation is not supported.",

    SCAN_BTN: "Scan",

    TRACKS_BTN: "Tracks",

    POIS_BTN: "POIs",

    OK: "OK",

    POI_SETTINGS_TITLE: "Which POIs do interest you today?",

    POI_BENCH: "Bench",

    POI_AREA: "Area",

    POI_TABLE: "Table",

    POI_ART: "Art",

    POI_LOOKOUT: "Lookout",

    POI_HISTORY: "History",

    POI_HIDE_ALL: "Hide all POIs",

    TRACKS_TITLE: "Our Tracks",

    TRACK_LENGTH: "Length (km)",

    LOCATION_ERROR_TITLE: "Oops... Location Error",

    NEAR_POI_TITLE: "You're near a POI",

    WANT_MORE_INTO: "Would you like to learn more?",

    YES: "Yes, sure",

    LATER: "Later",
  };

  return allStrings[stringKey];
}
