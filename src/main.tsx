import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MenuLateral } from "./components/MenuLateral";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { AppRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <article className="flex w-full h-screen">
        <MenuLateral />
        <div className="w-full h-full flex flex-col bg-[#FBFBFB]">
          <Navbar />
          <div className="w-full h-full px-6 overflow-auto">
            <AppRoutes />
          </div>
        </div>
      </article>
    </BrowserRouter>
  </React.StrictMode>
);
