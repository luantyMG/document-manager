import MainMenu from "./MainMenu";
import NavBar from "./Navbar";
import Tareas from "./Tareas";

const Layout = () => {
  return (
    <div className="drawer bg-base-100 text-base-content">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <NavBar />
        <div className="flex flex-row p-4">
          <div className="w-1/4">
            <MainMenu />
          </div>
          <div className="w-full ml-4">
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
