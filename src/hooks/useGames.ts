import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import apiClient, { GetResponse } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useQuery<GetResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>  
    apiClient
        .get<GetResponse<Game>>('/games', {
            params: {
              genres: gameQuery.genre?.id,
              parent_platforms: gameQuery.platform?.id,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
            }
        })
        .then((response) => response.data),
 });

export default useGames

