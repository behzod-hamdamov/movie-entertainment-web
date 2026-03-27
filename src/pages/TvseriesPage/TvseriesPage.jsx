
import { ListWrapper } from "../../components/index";

import { filterTvS } from "../../utils/filterArr";

export function TvseriesPage({ searchedMovies, movies, setMovies }) {

  return (
      <div className="tv-series-page">
        {!searchedMovies ? (
          <>
            <ListWrapper moviesList={filterTvS(movies)} setMovies={setMovies} listTitle="Recommended for you" />
          </>
        ) : (
          ""
        )}
      </div>
  )
}