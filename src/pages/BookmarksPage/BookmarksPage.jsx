import { ListWrapper } from "../../components/index";

import { filterBooking, filterMovies, filterTvS } from "../../utils/filterArr";

export function BookmarksPage({ searchedMovies, movies, setMovies }) {
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
        ""
      )}
    </div>
  );
}
