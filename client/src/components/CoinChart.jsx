import { Line } from "react-chartjs-2";
import { getCoinChart } from "../utils/APIs";
import { useState } from "react";
import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinChart = ({ id, days }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [coordinates, setCoordinates] = useState({
    labels: [],
    datasets: [
      {
        label: "Price",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const getCoinChartData = async () => {
      const data = await getCoinChart(id, days);
      setCoordinates({
        labels: data.prices.map((price) => `day ${data.prices.indexOf(price)}`),
        datasets: [
          {
            label: `Prices`,
            data: data.prices.map((price) => price),
            borderColor: "rgb(144, 238, 144)",
            backgroundColor: "#5E7FA6",
          },
        ],
      });
      setIsLoading(false);
    };
    getCoinChartData();
  }, [id, days]);

  if (isLoading) {
    return (
      <div
        role="status"
        class="w-full h-96 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
      >
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
        <div class="w-48 h-2 mb-1 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div class="flex items-baseline mt-1 space-x-6">
          <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
          <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
          <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
          <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
          <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <Line
        data={coordinates}
        width={400}
        className="h-96"
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default CoinChart;
