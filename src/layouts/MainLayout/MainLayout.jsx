import "./MainLayout.scss";

import { Outlet } from "react-router";

import { useState } from "react";

import { Header, SearchBar } from "../../components";

export function MainLayout({ setSearchedMovies, movies, setSearchValue }) {
  const [page, setPage] = useState("home");

  return (
    <div className="wrapper">
      <Header setPage={setPage} setSearchedMovies={setSearchedMovies} />
      <main className="layout-main">
        <SearchBar
          page={page}
          setSearchedMovies={setSearchedMovies}
          movies={movies}
          setSearchValue={setSearchValue}
        />
        <Outlet />
      </main>
    </div>
  );
}
