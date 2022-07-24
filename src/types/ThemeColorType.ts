import { Dispatch, SetStateAction } from "react";

export interface IThemeColorType {
  theme : 'DARK' | 'LIGHT',
  setTheme : Dispatch<SetStateAction<"DARK" | "LIGHT">>
}