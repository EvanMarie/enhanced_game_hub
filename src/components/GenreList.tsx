import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(
    (selector) => selector.gameQuery.genreId
  );
  const setSelectedGenreId = useGameQueryStore(
    (selector) => selector.setGenreId
  );

  if (error) return null;
  // not using spinner, but keeping in case retrieval of genres changes
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} color="deeppink">
        Genres
      </Heading>
      <List>
        {data?.results.map((data) => (
          <ListItem
            onClick={() => setSelectedGenreId(data.id)}
            key={data.id}
            paddingY="5px"
            paddingX="5px"
            borderRadius="5px"
            _hover={{
              backgroundColor: "purple.500",
              color: "cyan",
              fontWeight: "bold",
            }}
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                // image will fill the container while preserving aspect ratio
                objectFit="cover"
                src={getCroppedImageUrl(data.image_background)}
                onClick={() => setSelectedGenreId(data.id)}
              />{" "}
              <Button
                // to fix extra long genre names
                whiteSpace="normal"
                textAlign="left"
                fontWeight={data.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(data.id)}
                fontSize="xl"
                color={data.id === selectedGenreId ? "cyan" : ""}
                textDecoration={data.id === selectedGenreId ? "underline" : ""}
                variant="link"
                _hover={{
                  textDecoration: "",
                  fontWeight: "bold",
                }}
              >
                {data.name === "Massively Multiplayer" ? "MMO" : data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
