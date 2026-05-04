import axios from "axios";

// ✅ Your API key directly added
const API_KEY = "872e9993-a3b9-4605-a8a8-36ce561a7a9d";

export const getPlayers = async () => {
  try {
    const res = await axios.get(
      `https://api.cricapi.com/v1/players?apikey=${API_KEY}&offset=0`
    );

    console.log("API RESPONSE:", res.data); // optional debug

    return res.data.data || [];
  } catch (error) {
    console.log("API ERROR:", error);
    return [];
  }
};