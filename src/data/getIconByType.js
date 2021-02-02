import areaIcon from "../icons/area.svg";
import artIcon from "../icons/art.svg";
import benchIcon from "../icons/bench.svg";
import historyIcon from "../icons/history.svg";
import tableIcon from "../icons/table.svg";
import lookoutIcon from "../icons/lookout.svg";

export default function getIconByType(type) {
  switch (type) {
    case "area":
      return areaIcon;
    case "art":
      return artIcon;
    case "bench":
      return benchIcon;
    case "history":
      return historyIcon;
    case "table":
      return tableIcon;
    case "lookout":
      return lookoutIcon;
    default:
      return null;
  }
}
