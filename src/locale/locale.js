import { langOptions } from "../constants/langOptions";

import iw from "./languages/iw";
import en from "./languages/en";

export default function getLocaleString(stringKey) {
  const language = langOptions.toString();

  switch (language) {
    case "iw":
      return iw(stringKey);
    case "en":
      return en(stringKey);
    default:
      return iw(stringKey);
  }
}
