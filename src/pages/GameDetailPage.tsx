import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { id } = useParams();
  // appeasing TS by telling it slug will never be null
  // + sets ID to number. I had to switch to using ID rather than slug, due to API issues
  const { data: game, isLoading, error } = useGame(+id!);

  if (isLoading) return <Spinner />;

  // if there is an error or there is no game, throw error
  if (error || !game) throw error;

  // return data about game
  return (
    <>
      <Heading color="deeppink">{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
