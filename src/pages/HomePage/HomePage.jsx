import { useState } from "react";

import { filterTrend, filterRec } from "../../utils/filterArr";

import { ListWrapper, TrendingList } from "../../components/index";

export function HomePage({ searchedMovies, movies, setMovies }) {
  const trendingMovies = filterTrend(movies);
  const recommendedMovies = filterRec(movies);

  return (
    <div className="home-page">
      {!searchedMovies ? (
        <>
          <TrendingList moviesList={trendingMovies} setMovies={setMovies} />
          <ListWrapper moviesList={recommendedMovies} setMovies={setMovies} listTitle="Recommended for you" />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
