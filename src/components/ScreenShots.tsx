import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  const images = data?.results;

  // on small devices, there will be 1 column, and medium or larger, 2 columns
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
