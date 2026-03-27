import "./SearchBarr.scss";

import searchIcon from "../../assets/icons/search-icon.svg";

import {
  filterByName,
  filterMovies,
  filterTvS,
  filterBooking,
} from "../../utils/filterArr";

export function SearchBar({ page, setSearchedMovies, movies, setSearchValue }) {
  const pageTitles = {
    home: "Search for movies or TV series",
    movies: "Search for movies",
    tvseries: "Search for TV series",
    bookmarks: "Search for bookmarked shows",
  };

  const pageLists = {
    home: movies,
    movies: filterMovies(movies),
    tvseries: filterTvS(movies),
    bookmarks: filterBooking(movies),
  };

  const inputEvent = (e) => {
    if (page) {
      if (!e.target.value.trim().length) {
        setSearchedMovies(null);
        return;
      }
      const result = filterByName(
        pageLists[page],
        e.target.value.trimStart().toLowerCase()
      );
      setSearchValue(e.target.value.trim());
      setSearchedMovies(result);
    }
  };

  return (
    <div className="search-input">
      <img src={searchIcon} alt="search-icon" />
      <input
        type="text"
        name="search-input"
        id="search-input"
        placeholder={pageTitles[page]}
        onChange={inputEvent}
      />
    </div>
  );
}
