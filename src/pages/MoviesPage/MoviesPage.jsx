import { ListWrapper } from "../../components/index";

import { filterMovies } from "../../utils/filterArr";

export function MoviesPage({ searchedMovies, movies, setMovies }) {
  return (
    <div className="movies-page">
      {!searchedMovies ? (
        <>
          <ListWrapper
            moviesList={filterMovies(movies)}
            setMovies={setMovies}
            listTitle="Movies"
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
