import { useContext, useEffect } from "react"
import { Link, useLocation, useRoutes } from "react-router-dom";
import { ThemeColorContext } from "../../contexts/ThemeColorContext"
import colorsVariables from "../../utils/colors-variables"
import menuItems from "../../utils/menu-items";

export const Menu = () => {

  const { theme } = useContext(ThemeColorContext);
  const { pathname } = useLocation();
  

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return(
    <div
      style={{
        backgroundColor : colorsVariables.COLOR_MAIN[theme],
        width : "250px"
      }}
      className="min-h-full flex flex-col"
    >
      <div className="h-12 flex justify-center items-center bg-zinc-800 text-white">
        <b>CMS</b>
      </div>
      <div style={{height:'calc(100% - 48px)'}} className="p-2 flex flex-col gap-2">
        {menuItems.labels.map((item) => {

          if(item.active){
            return(
              <>
                <Link 
                  className={
                    `p-2 
                    rounded-md 
                    flex 
                    items-center 
                    hover:bg-zinc-700 
                    transition-all 
                    text-slate-200 
                    ${pathname === item.path  ? 'bg-zinc-700 ' : ''}`
                  } 
                  key={item.name} 
                  to={item.path}
                >
                  {item.name}
                </Link>
                { 
                  item.sub && item.sub.map((sub) => (
                    <Link className={
                      `p-2 
                      rounded-md 
                      flex 
                      items-center 
                      hover:bg-zinc-700 
                      transition-all 
                      text-slate-200
                      indent-4
                      ${pathname === sub.path  ? 'bg-zinc-700 ' : ''}`
                      }
                      key={sub.name} 
                      to={sub.path}>
                        {'>'} {sub.name}
                    </Link>
                  ))
                }
              </>
            )
          }
          
        })}
      </div>
    </div>
  )
}