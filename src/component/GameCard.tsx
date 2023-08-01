import { Card, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card borderRadius={15} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Heading fontSize={"2xl"}>{game.name}</Heading>
    </Card>
  );
};

export default GameCard;
