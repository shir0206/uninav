import areaIcon from "../icons/area.svg";
import artIcon from "../icons/art.svg";
import benchIcon from "../icons/bench.svg";
import historyIcon from "../icons/history.svg";
import tableIcon from "../icons/table.svg";
import lookoutIcon from "../icons/lookout.svg";

import getLocaleString from "../locale/locale";

export default [
  {
    name: "bench",
    key: "bench",
    label: getLocaleString("POI_BENCH"),
    icon: benchIcon,
  },
  {
    name: "area",
    key: "area",
    label: getLocaleString("POI_AREA"),
    icon: areaIcon,
  },
  {
    name: "table",
    key: "table",
    label: getLocaleString("POI_TABLE"),
    icon: tableIcon,
  },
  {
    name: "art",
    key: "art",
    label: getLocaleString("POI_ART"),
    icon: artIcon,
  },
  {
    name: "lookout",
    key: "lookout",
    label: getLocaleString("POI_LOOKOUT"),
    icon: lookoutIcon,
  },
  {
    name: "history",
    key: "history",
    label: getLocaleString("POI_HISTORY"),
    icon: historyIcon,
  },
];
