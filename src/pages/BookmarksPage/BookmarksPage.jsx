import { ListWrapper } from "../../components/index";

import { filterBooking, filterMovies, filterTvS } from "../../utils/filterArr";

export function BookmarksPage({ searchedMovies, movies, setMovies, searchValue}) {
  console.log(searchedMovies);
  return (
    <div className="tv-series-page">
      {!searchedMovies ? (
        <>
          <ListWrapper
            moviesList={filterMovies(filterBooking(movies))}
            setMovies={setMovies}
            listTitle="Bookmarked Movies"
          />
          <ListWrapper
            moviesList={filterTvS(filterBooking(movies))}
            setMovies={setMovies}
            listTitle="Bookmarked TV Series"
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
