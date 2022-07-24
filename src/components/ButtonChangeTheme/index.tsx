import { PropsWithChildren, useContext } from "react"
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

export const ButtonChangeTheme = ({children} : PropsWithChildren) => {

  const { setTheme, theme } = useContext(ThemeColorContext);

  function handleChangeTheme() {

    if(theme === "DARK"){
      localStorage.setItem("theme", "LIGHT")
      setTheme("LIGHT")
    };

    if(theme === "LIGHT"){
      localStorage.setItem("theme", "DARK")
      setTheme("DARK")
    };
  }

  return(
    <button className="flex justify-center items-center" onClick={handleChangeTheme}>
      {children}
    </button>
  )
}