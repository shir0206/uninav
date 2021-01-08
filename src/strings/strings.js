import { langOptions } from "../constants/langOptions";

export default function getString(string) {
  const lang = langOptions.toString();

  const allStrings = {
    PERMISSION_DENIED: {
      en: "User denied the request for Geolocation.",
      iw:
        "לצערנו, לא נמצא המיקום שלך. בבקשה להדליק את ה- GPS או לתת הרשאות מיקום.",
    },
    CHANGE_PERMISSIONS_LINK: {
      en: "XXX",
      iw: "בקישור הבא אפשר לקרוא הסבר איך לשנות זאת:",
    },
    POSITION_UNAVAILABLE: {
      en: "Location information is unavailable.",
      iw: "המיקום אינו זמין",
    },
    TIMEOUT: {
      en: "The request to get user location timed out.",
      iw: "תם משך הזמן של בקשת המיקום",
    },
    UNKNOWN_ERROR: {
      en: "An unknown error occurred.",
      iw: "התרחשה תקלה בלתי צפויה.",
    },
    GEOLOCATION_NOT_SUPPORTED: {
      en: "Geolocation is not supported.",
      iw: "נתוני מיקום אינם נתמכים.",
    },
    SCAN_BTN: {
      en: "Scan",
      iw: "סריקה",
    },
    ROUTES_BTN: {
      en: "Routes",
      iw: "מסלולים",
    },
    POIS_BTN: {
      en: "POIs",
      iw: "נקודות עניין",
    },
    TOO_FAR: {
      en: "You're too far away! Wanna me to follow you?",
      iw: "לא מצאתי אותך באוניברסיטה! לאתר אותך?",
    },
    OK: {
      en: "OK",
      iw: "אישור",
    },

    POI_SETTINGS_TITLE: {
      en: "Which POIs do interest you today?",
      iw: "אילו נקודות עניין מעניינות אותך היום?",
    },

    POI_BENCH: {
      en: "Bench",
      iw: "ספסלים",
    },

    POI_AREA: {
      en: "Area",
      iw: "מרחב",
    },

    POI_TABLE: {
      en: "Table",
      iw: "שולחנות",
    },

    POI_ART: {
      en: "Art",
      iw: "אומנות",
    },
    POI_LOOKOUT: {
      en: "Lookout",
      iw: "נקודת תצפית",
    },

    POI_HISTORY: {
      en: "History",
      iw: "אתר היסטורי",
    },

    POI_HIDE_ALL: {
      en: "Hide all POIs",
      iw: "הסתרת כל הנקודות",
    },
  };

  return allStrings[string][lang];
}
