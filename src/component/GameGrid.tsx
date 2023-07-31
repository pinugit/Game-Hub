import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { gamesList, error } = useGames();
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
