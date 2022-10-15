import { Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
};
