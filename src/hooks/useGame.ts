import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

const useGame = (id: number) => useQuery({
    // any time the slug changes, ReactQuery will fetch another game from backend
    queryKey: ["games", id],
    queryFn: () => apiClient.get(id),
});

export default useGame;