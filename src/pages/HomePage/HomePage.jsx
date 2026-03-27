import { useState } from "react";

import { filterTrend, filterRec } from "../../utils/filterArr";

import { ListWrapper, TrendingList } from "../../components/index";

export function HomePage({ searchedMovies, movies, setMovies, searchValue }) {
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
        <ListWrapper
          moviesList={searchedMovies}
          setMovies={setMovies}
          listTitle={`Found ${searchedMovies.length} results for ‘${searchValue}’`}
        />
      )}
    </div>
  );
}
