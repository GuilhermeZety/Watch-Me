import { useEffect, useState } from "react";
import { api } from "../services/api";

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

export function useGenres(selectedGenreId: number) {
    
    const [genres, setGenres] = useState<GenreResponseProps[]>([]);

    const initialGenre:GenreResponseProps = {
      id: 0,
      name: 'family',
      title: '',
    }
      
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(initialGenre);

    useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
          setGenres(response.data);
        });
      }, []);

      useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
          setGenres(response.data);
        });
      }, []);
      
    useEffect(() => {
        api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
        setSelectedGenre(response.data);
        })
    }, [selectedGenreId]);

      return {genres, selectedGenre}
}