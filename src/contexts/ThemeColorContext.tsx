import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { IThemeColorType } from "../types/ThemeColorType";

export const ThemeColorContext = createContext<IThemeColorType>({} as IThemeColorType);

export const ThemeColorProvider = ({children} : PropsWithChildren) => {

  const [ theme, setTheme ] = useState<'DARK' | 'LIGHT'>('DARK');

  useEffect(() => {

    let localStorageTheme = localStorage.getItem("theme");
    if(localStorageTheme === "DARK" || localStorageTheme === "LIGHT") return setTheme(localStorageTheme);
    localStorage.setItem("theme", theme);
  }, [])

  return(
    <ThemeColorContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeColorContext.Provider>
  )
}