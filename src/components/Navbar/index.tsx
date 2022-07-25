import { useThemeColorHook } from "../../hooks/ThemeColorHook"
import colorsVariables from "../../utils/colors-variables"
import { ButtonChangeTheme } from "../ButtonChangeTheme";
import { MoonSVG, SunSVG } from "../../utils/svgs";
import { FileSearch, MagnifyingGlass } from "phosphor-react";

export const Navbar = () => {

  const { theme } = useThemeColorHook();

  return(
    <div
    style={{
      backgroundColor : colorsVariables.COLOR_SECONDARY[theme]
    }}
    className="h-12 w-full flex justify-between p-2 items-center">

      <div className="flex">
        <span className="flex items-center">
          <input type="text" className="p-1 bg-neutral-600 outline-none" />
          <span className="bg-stone-800 w-8 h-full flex justify-center items-center rounded-r-md">
            <MagnifyingGlass color="#fff" size={20} />
          </span>
        </span>
      </div>


      <div className="flex gap-6 items-center">

      
        <span>
          <ButtonChangeTheme>
            { theme === "DARK" ? <SunSVG /> : <MoonSVG /> }
          </ButtonChangeTheme>
        </span>

        <span className="flex items-center gap-2">
          <span className="flex flex-col items-start leading-4">
            <b>Henrique Higa</b>
            <p>Desenvolvedor</p>
          </span>
          <span className="h-7 w-7 bg-white rounded-full"></span>
        </span>


        <span>
          <button>Sair</button>
        </span>
      </div>
    </div>
  )
}