import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface GameGenre {
    id : number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface GameGenreResponse {
    count: number;
    results: GameGenre[]
}

const useGenre = () => {
    const [genres, setGenres] = useState<GameGenre[]>([])
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true)
        apiClient.get<GameGenreResponse>('/genres', {
            signal: controller.signal
        })
        .then(res => {
            setGenres(res.data.results)
            setIsLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setIsLoading(false)
        })
        return () => controller.abort();
    }, [])
    return {genres, error, isLoading}
};

export default useGenre;