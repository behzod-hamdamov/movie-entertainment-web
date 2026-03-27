import "./ListWrapper.scss";

import { ListItem } from "../ListItem/ListItem";

export function ListWrapper({ moviesList, setMovies, listTitle }) {
  return (
    <div className="list-wrapper">
      <h3>{listTitle}</h3>
      <ul className="list">
        {moviesList.map((movie) => (
          <ListItem movie={movie} setMovies={setMovies} key={movie.id} />
        ))}
      </ul>
    </div>
  );
}
