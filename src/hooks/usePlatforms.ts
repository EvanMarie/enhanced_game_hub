import { useQuery } from "@tanstack/react-query";
import APIClient, { GetResponse } from "../services/api-client";
import ms from "ms";
import platforms from "../data/platforms"
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('1 day'),
   initialData: platforms,
})

export default usePlatforms;

