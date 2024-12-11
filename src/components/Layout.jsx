import MainMenu from "./MainMenu";
import NavBar from "./Navbar";
import Tareas from "./Tareas";

const Layout = () => {
  return (
    <div className="drawer bg-neutral-300 text-base-content">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <NavBar />
        <div className="flex flex-row">
          <div className="w-1/10">
            <MainMenu />
          </div>
          <div className="w-full rounded-xl border-2 p-4 bg-slate-50"> {/* Clase para borde circular y borde visible */}
            <Tareas />
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
