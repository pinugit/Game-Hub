import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface game {
  id: number;
  name: string;
}

interface gameObjectList {
  count: number;
  results: game[];
}

const GameGrid = () => {
  const [gamesList, setGamesList] = useState<game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<gameObjectList>("/games")
      .then((res) => {
        setGamesList(res.data.results);
      })

      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ol>
        {gamesList.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ol>
    </>
  );
};

export default GameGrid;
