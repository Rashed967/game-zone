import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true);
    apiClient
      .get<GameResponse>("/games", {
        signal: controller.signal
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return ;
        setError(err.message);
        setLoading(false);
      });
      return () => controller.abort()
  }, []);

  return {games, error, loading, setGames}
}

export default useGames