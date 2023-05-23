import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import CriticScore from "../assets/CriticScore";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import PlatformIcons from "./PlatformIcons";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Link to={"/games/" + game.id}>
        <Image src={getCroppedImageUrl(game.background_image)} />
      </Link>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcons
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />{" "}
          <CriticScore score={game.metacritic} />
        </HStack>
        <Link to={"/games/" + game.id}>
          <Heading fontSize="2xl" fontFamily="monospace">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </Link>
      </CardBody>
    </Card>
  );
};

export default GameCard;
