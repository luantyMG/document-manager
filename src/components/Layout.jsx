'use client'; // Añade esta línea al principio del archivo

import React, { useState } from "react";
import MainMenu from "./MainMenu";
import NavBar from "./Navbar";
import Tareas from "./Tareas";
import Adscripcion from "./Adscripcion";
import Bienvenida from "./Bienvenida";

const Layout = () => {
  const [currentComponent, setCurrentComponent] = useState("Bienvenida");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Bienvenida":
        return <Bienvenida />;
      case "Tareas":
        return <Tareas />;
      case "Adscripcion":
        return <Adscripcion />;
      default:
        return <Bienvenida />;
    }
  };

  return (
    <div className="drawer bg-neutral-300 text-base-content min-h-screen">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-full">
        <NavBar />
        <div className="flex flex-row h-full">
          <div className="w-1/10 h-full">
            {/* Pasamos el setCurrentComponent a MainMenu */}
            <MainMenu onMenuSelect={setCurrentComponent} />
          </div>
          <div className="w-full h-full rounded-xl border-2 p-4 bg-slate-50">
            {renderComponent()}
          </div>
        </div>
      </div>
      <div className="drawer-side z-40">
        <label className="drawer-overlay"></label>
      </div>
    </div>
  );
};

export default Layout;
