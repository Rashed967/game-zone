
import genres from '../data/genres'

export interface GameGenre {
    id : number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}


const useGenre = () => ({data: genres, isLoading: false, error: null})
export default useGenre;