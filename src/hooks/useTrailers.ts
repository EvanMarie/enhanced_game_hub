import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";



const useTrailers = (gameId: number) => {
    /* we need gameID to fetch trailers for a specific game so the apiClient
    must be initialized inside this function */
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
    return useQuery({
  queryKey: ["trailers", gameId],
  // do not give arrow function, just pass the name of the created function
  queryFn: apiClient.getAll,  
});
}

export default useTrailers;