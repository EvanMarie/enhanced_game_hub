import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import APIClient, { GetResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games');

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
    queryFn: () => apiClient.getAll({
            params: {
              genres: gameQuery.genre?.id,
              parent_platforms: gameQuery.platform?.id,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
            }
        })
 });

export default useGames

