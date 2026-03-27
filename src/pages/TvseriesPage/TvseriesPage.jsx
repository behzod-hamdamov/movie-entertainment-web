import { ListWrapper } from "../../components/index";

import { filterTvS } from "../../utils/filterArr";

export function TvseriesPage({ searchedMovies, movies, setMovies, searchValue }) {
  return (
    <div className="tv-series-page">
      {!searchedMovies ? (
        <>
          <ListWrapper
            moviesList={filterTvS(movies)}
            setMovies={setMovies}
            listTitle="TV Series"
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
