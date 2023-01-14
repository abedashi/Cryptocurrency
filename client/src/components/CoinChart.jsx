import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const CoinChart = ({ chartData }) => {
  return <Line data={chartData} />;
};

export default CoinChart;
