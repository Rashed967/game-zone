
import useData from "./useData";

export interface GameGenre {
    id : number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}


const useGenre = () => useData<GameGenre>('/genres')
export default useGenre;