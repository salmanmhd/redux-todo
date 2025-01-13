import { Outlet, NavLink } from "react-router-dom";
import SideBar from "./components/SideBar";
function AppLayout() {
  return (
    <div className="main flex h-screen w-full">
      <SideBar />
      <main className="right-container flex w-full flex-col items-center bg-blue-950 text-white">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
