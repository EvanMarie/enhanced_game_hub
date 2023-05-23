import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import Screenshots from "../components/ScreenShots";

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
    <Box maxWidth="1300px" margin="auto">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Box marginBottom={3}>
            <Heading color="deeppink">{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
          </Box>
          <Box marginBottom={3}>
            <GameAttributes game={game} />
          </Box>
        </GridItem>
        <GridItem>
          <Box marginBottom={3}>
            <Heading fontSize="2xl" color="purple.400" marginBottom={2}>
              Screenshots & Trailer
            </Heading>
            <Screenshots gameId={game.id} />
          </Box>
          <GameTrailer gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
