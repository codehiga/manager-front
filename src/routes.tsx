import { useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Menu } from "./components/Menu"
import { ThemeColorContext } from "./contexts/ThemeColorContext"
import { Cliente } from "./pages/Cliente"
import { Clientes } from "./pages/Clientes"
import { Dashboard } from "./pages/Dashboard"
import colorsVariables from "./utils/colors-variables"

export const AppRoutes = () => {

  const { theme } = useContext(ThemeColorContext);

  return(
    <div className='container-routes'>
      <Menu />
      <div 
        style={{
          backgroundColor : colorsVariables.BG_COLOR[theme],
          height: "calc(100% - 3rem)"
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="clientes" element={<Clientes />}/>
          <Route path="/clientes/:id" element={<Cliente />}/>
        </Routes>
      </div>
    </div>
  )
}