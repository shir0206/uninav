export default function getAlert(alert) {
  const allAlerts = {
    cancelLocationWatch: {
      id: 100,
      msg: "הפסקנו לעקוב אחרי המיקום שלך",
    },
  };

  const alertMsg = (
    allAlerts[alert].id +
    " " +
    allAlerts[alert].msg
  ).toString();

  window.alert(alertMsg);
}
