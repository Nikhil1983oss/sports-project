import Navbar from "./Navbar";
import { players } from "../data/players";
import StatsChart from "./StatsChart";

const StatsCard = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition">

      <Navbar />

      <div className="p-6">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-6 
        bg-gradient-to-r from-red-500 to-yellow-400 text-transparent bg-clip-text">
          📊 Cricket Stats Dashboard
        </h1>

        {/* CHART */}
        <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-xl shadow-lg">
          <StatsChart players={players} />
        </div>

        {/* PLAYER STATS CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {players.map((p) => (
            <div
              key={p.id}
              className="bg-gray-200 dark:bg-gray-900 p-4 rounded-xl border border-red-500 
              hover:shadow-[0_0_20px_red] transition"
            >
              <h2 className="text-yellow-400 font-bold">{p.name}</h2>

              <p>🏏 Runs: {p.stats.runs}</p>
              <p>🎯 Matches: {p.stats.matches}</p>
              <p>📈 Avg: {p.stats.average}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StatsCard;