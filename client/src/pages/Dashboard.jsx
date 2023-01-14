import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardMain from "../components/DashboardMain";
import Sidebar from "../components/UI/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="flex">
      <Sidebar />
      <DashboardMain />
    </div>
  );
};

export default Dashboard;
