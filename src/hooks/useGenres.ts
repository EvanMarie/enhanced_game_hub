import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { GetResponse } from "../services/api-client";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

/* returning object with 3 properties to minimize the impact on components 
which are consumers of this hook. Genres are available right away, no 
spinner necessary */

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => 
    apiClient
        .get<GetResponse<Genre>>('/genres')
        .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres } 
});

export default useGenres;