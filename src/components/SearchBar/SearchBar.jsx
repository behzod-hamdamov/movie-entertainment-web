import "./SearchBarr.scss";

import searchIcon from "../../assets/icons/search-icon.svg";

import { filterByName } from "../../utils/filterArr";

export function SearchBar({ page, setSearchedMovies, movies }) {
  const pageTitles = {
    home: "Search for movies or TV series",
    movies: "Search for movies",
    tvseries: "Search for TV series",
    bookmarks: "Search for bookmarked shows",
  };

  const inputEvent = (e) => {
    if (!e.target.value.trim().length) {
      setSearchedMovies(null)
      return
    }
    const result = filterByName(
      movies,
      e.target.value.trimStart().toLowerCase()
    );
    setSearchedMovies(result);
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
