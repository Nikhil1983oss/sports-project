import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StatsChart = ({ players }) => {
  const data = {
    labels: players.map((p) => p.name),
    datasets: [
      {
        label: "Runs",
        data: players.map((p) => p.stats.runs),
        backgroundColor: "#ef4444",
      },
    ],
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg">
      <Bar data={data} />
    </div>
  );
};

export default StatsChart;