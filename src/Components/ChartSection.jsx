import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartSection = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Runs",
        data: [200, 450, 300, 600, 700],
        borderColor: "red",
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="mb-4 text-lg font-bold">Performance Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default ChartSection;