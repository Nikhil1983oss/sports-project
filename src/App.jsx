import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import PlayerDetails from "./Components/PlayerDetails";
import StatsCard from "./Components/StatsCard";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition duration-300">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/player/:id" element={<PlayerDetails />} />
          <Route path="/stats" element={<StatsCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;