import { Route, Routes } from "react-router-dom";
import { pages } from "./utils/Pages";

export const AppRoutes = () => {
  return (
    <Routes>
      {pages.map((pagina) => {
        return (
          <Route
            key={pagina.titulo}
            element={pagina.componente}
            path={pagina.url}
          />
        );
      })}
    </Routes>
  );
};
