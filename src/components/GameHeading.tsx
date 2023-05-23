import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const genreId = useGameQueryStore((selector) => selector.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(
    (selector) => selector.gameQuery.platformId
  );
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={2} fontSize="5xl" color="deeppink">
      {heading}
    </Heading>
  );
};

export default GameHeading;
