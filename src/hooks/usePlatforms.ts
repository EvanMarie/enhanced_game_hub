import { useQuery } from "@tanstack/react-query";
import APIClient, { GetResponse } from "../services/api-client";
import ms from "ms";
import platforms from "../data/platforms"

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('1 day'),
   initialData: platforms,
})

export default usePlatforms;

