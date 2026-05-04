import { Link } from "react-router-dom";

const PlayerCard = ({ player }) => {
  return (
    <Link to={`/player/${player.id}`}>
      <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded border border-red-500 hover:scale-105 transition">

        <img
          src={player.image}
          className="w-16 h-16 rounded-full mx-auto mb-2"
        />

        <h2 className="text-center font-bold text-yellow-400">
          {player.name}
        </h2>

        <p className="text-center">{player.country}</p>
      </div>
    </Link>
  );
};

export default PlayerCard;