import { useEffect, useState } from "react";
import { api } from "../services/api";

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }

export function useMovies(SelectedGenreId: number) {
    const [movies, setMovies] = useState<MovieProps[]>([]);

    useEffect(() => {
      api.get<MovieProps[]>(`movies/?Genre_id=${SelectedGenreId}`).then(response => {
        setMovies(response.data);
      });
    }, [SelectedGenreId]);

    return {movies};
}