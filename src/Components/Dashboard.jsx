import { useState } from "react";
import { players } from "../data/players";
import PlayerCard from "./PlayerCard";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const filtered = players.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl text-red-500 mb-4">
          Cricket Players 🏏
        </h1>

        <input
          placeholder="Search player..."
          className="p-2 w-full mb-4 bg-gray-200 dark:bg-gray-800 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <PlayerCard key={p.id} player={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;