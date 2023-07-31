import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { gamesList, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {gamesList.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
