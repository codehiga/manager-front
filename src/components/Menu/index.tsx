import { ArrowBendDownRight } from "phosphor-react";
import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useRoutes } from "react-router-dom";
import { ThemeColorContext } from "../../contexts/ThemeColorContext"
import colorsVariables from "../../utils/colors-variables"
import menuItems from "../../utils/menu-items";


export const Menu = () => {

  const { theme } = useContext(ThemeColorContext);
  const { pathname } = useLocation();

  const [ activeItemMenu, setActiveItemMenu ] = useState<string>();
  

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return(
    <div
      style={{
        backgroundColor : colorsVariables.COLOR_MAIN[theme],
        width : "250px",

        height:'calc(100% - 48px)'
      }}
      className="min-h-full flex flex-col"
    >
      <div className="h-12 flex justify-center items-center bg-zinc-800 text-white">
        <Link to={"/"}><b>CMS</b></Link>
      </div>
      <div style={{height:'calc(100% - 48px)'}} className="p-2 flex flex-col gap-2 overflow-auto">
        {menuItems.labels.map((item) => {

          if(item.active){
            return(
              <>
                <div  
                  className={
                    `p-2 
                    rounded-md 
                    flex 
                    items-center 
                    hover:bg-zinc-700 
                    transition-all 
                    text-slate-200
                    cursor-pointer
                    ${pathname === item.path  ? 'bg-zinc-700 ' : ''}`
                  } 
                  key={item.name} 
                  onClick={() => activeItemMenu !== item.name ? setActiveItemMenu(item.name) : setActiveItemMenu('')}
                  
                >
                  {item.name}
                </div>
                <div className={`
                opacity-0 
                h-0
                flex-col 
                gap-2
                pointer-events-none
                ${activeItemMenu === item.name && 'opacity-100 pointer-events-auto h-auto'} 

                `}>
                  { 
                    item.sub && item.sub.map((sub) => (
                      <Link className={
                        `p-2
                        px-4 
                        rounded-md 
                        flex 
                        items-center 
                        hover:bg-zinc-700 
                        text-slate-200
                        indent-2
                        mb-2
                        ${pathname === sub.path  ? 'bg-zinc-700 ' : ''}`
                        }
                        key={sub.name} 
                        to={sub.path}>
                          <ArrowBendDownRight /> {sub.name}
                      </Link>
                    ))
                  }
                </div>
              </>
            )
          }
          
        })}
      </div>
    </div>
  )
}