import { Outlet } from "react-router-dom";
import Navbar from "./UI/Navbar";

const DashboardMain = () => {
  return (
    <div className="xl:ml-60 p-10 max-xl:pt-0 min-h-screen w-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default DashboardMain;
