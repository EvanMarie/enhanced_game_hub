import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { GetResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore((selector) => selector.gameQuery);
  return useInfiniteQuery<GetResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
            params: {
              genres: gameQuery.genreId,
              parent_platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
              page: pageParam,
            }
        }),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },
      staleTime: ms('1 day'), 
      }
  );
    };

export default useGames

