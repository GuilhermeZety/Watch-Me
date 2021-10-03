//import Button Component
import { Button } from '../components/Button';
//Scss
import '../styles/sidebar.scss';
//hooks
import { useGenres } from "../hooks/useGenres";
import { useSelectedGenreContext } from "../hooks/useSelectedGenreContext";

export function SideBar() {

  const { selectedGenreId, setSelectedGenreId } = useSelectedGenreContext();

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  const { genres } = useGenres(selectedGenreId);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      
      <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
    </nav>
  )
}