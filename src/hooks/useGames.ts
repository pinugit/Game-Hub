import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image:string;
}

interface GameObjectList {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [gamesList, setGamesList] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController()
    apiClient
      .get<GameObjectList>("/games", {signal:controller.signal})
      .then((res) => {
        setGamesList(res.data.results);
      })

      .catch((err) => {
        if (err instanceof CanceledError) return; 
        setError(err.message);
      });

      return () => controller.abort();
  }, []);
  return {gamesList, error};
}
export default useGames