import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

/* returning object with 3 properties to minimize the impact on components 
which are consumers of this hook. Genres are available right away, no 
spinner necessary */

const useGenres = () => ({ data: genres, isLoading: false, error: null} );

export default useGenres;