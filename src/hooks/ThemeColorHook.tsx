import { useContext } from "react"
import { ThemeColorContext } from "../contexts/ThemeColorContext";

export const useThemeColorHook = () => {
  return useContext(ThemeColorContext);
}