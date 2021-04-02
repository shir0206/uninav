export default function getLocaleString(stringKey) {
  const allStrings = {
    PERMISSION_DENIED:
      "לצערנו, לא נמצא המיקום שלך. בבקשה להדליק את ה- GPS או לתת הרשאות מיקום.",

    CHANGE_PERMISSIONS_LINK: "בקישור הבא אפשר לקרוא הסבר איך לשנות זאת:",

    POSITION_UNAVAILABLE: "המיקום אינו זמין",

    TIMEOUT: "תם משך הזמן של בקשת המיקום",

    UNKNOWN_ERROR: "התרחשה תקלה בלתי צפויה.",

    GEOLOCATION_NOT_SUPPORTED: "נתוני מיקום אינם נתמכים.",

    SCAN_BTN: "סריקה",

    TRACKS_BTN: "מסלולים",

    POIS_BTN: "נקודות עניין",

    OK: "אישור",

    POI_SETTINGS_TITLE: "אילו נקודות עניין מעניינות אותך היום?",

    POI_BENCH: "ספסלים",

    POI_AREA: "מרחב",

    POI_TABLE: "שולחנות",

    POI_ART: "אומנות",

    POI_LOOKOUT: "נקודת תצפית",

    POI_HISTORY: "אתר היסטורי",

    POI_HIDE_ALL: "הסתרת כל הנקודות",

    TRACKS_TITLE: "המסלולים שלנו",

    TRACK_LENGTH: "אורך בק''מ",
    LOCATION_ERROR_TITLE: "אופס... בעיית מיקום",

    NEAR_POI_TITLE: "הגעת לנקודת עניין",

    WANT_MORE_INTO: "רוצה לדעת עוד?",

    YES: "כן, בטח",

    LATER: "מאוחר יותר",
  };

  return allStrings[stringKey];
}
