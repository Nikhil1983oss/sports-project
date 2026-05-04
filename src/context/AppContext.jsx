import { createContext, useEffect, useState } from "react";
import { getPlayers } from "../Components/services/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getPlayers();
      console.log(data); // 👈 DEBUG
      setPlayers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ players, loading }}>
      {children}
    </AppContext.Provider>
  );
};