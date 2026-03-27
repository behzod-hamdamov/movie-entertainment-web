import "./TrendingList.scss"

import {TrendingItem} from "../TrendingItem/TrendingItem"

export function TrendingList({moviesList, setMovies}) {
  return (
      <div className="list-wrapper">
        <h3>Trending</h3>
        <ul className="trending-list">
          {moviesList.map((movie) => <TrendingItem movie={movie} setMovies={setMovies} key={movie.id}/>)}
        </ul>
      </div>
  )
}
