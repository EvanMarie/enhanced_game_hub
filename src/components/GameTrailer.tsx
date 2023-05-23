import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  /* to find out the shape of the data and know how to access what we need:
  this also tells us how to shape the properties of the trailer in Trailer.ts entity
  console.log(data); */

  if (isLoading) return null;
  if (error) throw error;

  // a game may not have a trailer, i.e. optional chaining
  const trailerData = data?.results[0];

  return trailerData ? (
    <video src={trailerData.data[480]} poster={trailerData.preview} controls />
  ) : null;
};

export default GameTrailer;
