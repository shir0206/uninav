import { langOptions } from "../constants/langOptions";

export default function getString(string) {
  const lang = langOptions.toString();

  const allStrings = {
    PERMISSION_DENIED: {
      en: "User denied the request for Geolocation.",
      iw: "לצערנו, לא נתת הרשאות מיקום לאתר.",
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
  };

  return (allStrings[string])[lang];
}
