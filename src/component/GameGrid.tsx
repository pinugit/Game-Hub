import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface game {
  id: number;
  name: string;
}

interface gameObjectList {
  count: number;
  games: game[];
}

const GameGrid = () => {
  const [gamesList, setGamesList] = useState<game[]>([]);
  const [error, setError] = useState("");

  console.log(gamesList);

  useEffect(() => {
    apiClient
      .get<gameObjectList>("/games")
      .then((res) => setGamesList(res.data.games))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <ol>
      {gamesList.map((game) => (
        <li>{game.name}</li>
      ))}
    </ol>
  );
};

export default GameGrid;
