import { useParams } from "react-router-dom";
import { players } from "../data/players";
import Navbar from "./Navbar";

const PlayerDetails = () => {
  const { id } = useParams();
  const player = players.find((p) => p.id === id);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <div className="text-center mt-10">
        <img
          src={player.image}
          className="w-24 h-24 rounded-full mx-auto"
        />

        <h1 className="text-2xl text-red-500 mt-4">
          {player.name}
        </h1>

        <p>{player.country}</p>

        <p>Runs: {player.stats.runs}</p>
        <p>Matches: {player.stats.matches}</p>
      </div>
    </div>
  );
};

export default PlayerDetails;