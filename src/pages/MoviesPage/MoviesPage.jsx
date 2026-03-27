import { ListWrapper } from "../../components/index";

import { filterMovies } from "../../utils/filterArr";

export function MoviesPage({ searchedMovies, movies, setMovies, searchValue }) {
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
        <ListWrapper
          moviesList={searchedMovies}
          setMovies={setMovies}
          listTitle={`Found ${searchedMovies.length} results for ‘${searchValue}’`}
        />
      )}
    </div>
  );
}
