import { useThemeColorHook } from "../../hooks/ThemeColorHook"
import colorsVariables from "../../utils/colors-variables"
import { ButtonChangeTheme } from "../ButtonChangeTheme";
import { MoonSVG, SunSVG } from "../../utils/svgs";

export const Menu = () => {

  const { theme } = useThemeColorHook();

  return(
    <div
    style={{
      backgroundColor : colorsVariables.COLOR_SECONDARY[theme]
    }}
    className="h-12 w-full flex justify-between p-2 items-center">

      <div>
        <span>
          <input type="text" className="rounded-full px-2" />
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