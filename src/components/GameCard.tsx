import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import CriticScore from "../assets/CriticScore";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcons
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />{" "}
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" fontFamily="monospace">
          {game.name}

          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
