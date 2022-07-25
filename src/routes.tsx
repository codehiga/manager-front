import { useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { ThemeColorContext } from "./contexts/ThemeColorContext"
import { Dashboard } from "./pages/Dashboard"
import colorsVariables from "./utils/colors-variables"

export const AppRoutes = () => {

  const { theme } = useContext(ThemeColorContext);

  return(
    <div className='container-routes'>
      <Navbar />
      <div 
        style={{
          backgroundColor : colorsVariables.BG_COLOR[theme],
          height: "calc(100% - 3rem)"
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}