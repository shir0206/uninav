export default function getAlert(alert) {
  const allAlerts = {
    startLocationWatch: {
      id: 1000,
      msg: "התחלנו לעקוב אחרי המיקום שלך",
    },
    cancelLocationWatch: {
      id: 1001,
      msg: "הפסקנו לעקוב אחרי המיקום שלך",
    },
    enableLocationWatch: {
      id: 1002,
      msg: "אפשר בבקשה להדליק את הGPS?",
    },
  };

  const alertMsg = (
    allAlerts[alert].id +
    " " +
    allAlerts[alert].msg
  ).toString();

  window.alert(alertMsg);
}
