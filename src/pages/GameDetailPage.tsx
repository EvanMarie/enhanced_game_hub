import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { id } = useParams();
  // appeasing TS by telling it slug will never be null
  const { data, isLoading, error } = useGame(+id!);

  if (isLoading) return <Spinner />;

  // if there is an error or there is no game, throw error
  if (error || !data) throw error;

  // return data about game
  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
