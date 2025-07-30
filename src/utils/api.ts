import axios from "axios";

const API_BASE = "https://swapi.info/api";

export const fetchMovies = async () => {
  try {
    const res = await axios.get(`${API_BASE}/films`);
    
   return res.data
  } catch (err) {
    console.error("Failed to fetch films from swapi.dev:", err);
    return [];
  }
};
