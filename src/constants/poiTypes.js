import areaIcon from "../icons/area.svg";
import artIcon from "../icons/art.svg";
import benchIcon from "../icons/bench.svg";
import historyIcon from "../icons/history.svg";
import tableIcon from "../icons/table.svg";
import lookoutIcon from "../icons/lookout.svg";

import getString from "../strings/strings";

export default [
  {
    name: "bench",
    key: "bench",
    label: getString("POI_BENCH"),
    icon: benchIcon,
  },
  {
    name: "area",
    key: "area",
    label: getString("POI_AREA"),
    icon: areaIcon,
  },
  {
    name: "table",
    key: "table",
    label: getString("POI_TABLE"),
    icon: tableIcon,
  },
  {
    name: "art",
    key: "art",
    label: getString("POI_ART"),
    icon: artIcon,
  },
  {
    name: "lookout",
    key: "lookout",
    label: getString("POI_LOOKOUT"),
    icon: lookoutIcon,
  },
  {
    name: "history",
    key: "history",
    label: getString("POI_HISTORY"),
    icon: historyIcon,
  },
];
