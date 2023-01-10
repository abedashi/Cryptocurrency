import DashboardMain from "../components/DashboardMain";
import Sidebar from "../components/UI/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DashboardMain />
    </div>
  );
};

export default Dashboard;
