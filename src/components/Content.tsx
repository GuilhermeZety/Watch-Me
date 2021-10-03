import { useGenres } from "../hooks/useGenres";
import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "./MovieCard";

import '../styles/content.scss';
import { useSelectedGenreContext } from "../hooks/useSelectedGenreContext";

export function Content() {
  const { selectedGenreId } = useSelectedGenreContext();
  const { movies } = useMovies(selectedGenreId);
  const { selectedGenre } = useGenres(selectedGenreId);

  return (      
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}