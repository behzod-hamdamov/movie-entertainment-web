import { Routes, Route, useNavigate } from "react-router";

import { useEffect, useState } from "react";

import { LoginPage, SignupPage, HomePage, MoviesPage, TvseriesPage, BookmarksPage } from "./pages/index";

import { ProtectedRoute } from "./components/index";

import { MainLayout } from "./layouts";

import { moviesList } from "./utils/mock/movies-list";

function App() {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [movies, setMovies] = useState(moviesList);
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0].type === "reload";
    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn")

    if (isReload) {
      if (!isUserLoggedIn) {
        navigate("/login", {replace: true})
      } else {
        navigate("/", {replace: true});
      }
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          element={
            <MainLayout
              setSearchedMovies={setSearchedMovies}
              movies={movies}
              setSearchValue={setSearchValue}
            />
          }
        >
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage
                  searchedMovies={searchedMovies}
                  movies={movies}
                  setMovies={setMovies}
                  searchValue={searchValue}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <MoviesPage
                  searchedMovies={searchedMovies}
                  movies={movies}
                  setMovies={setMovies}
                  searchValue={searchValue}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tvseries"
            element={
              <ProtectedRoute>
                <TvseriesPage
                  searchedMovies={searchedMovies}
                  movies={movies}
                  setMovies={setMovies}
                  searchValue={searchValue}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <ProtectedRoute>
                <BookmarksPage
                  searchedMovies={searchedMovies}
                  movies={movies}
                  setMovies={setMovies}
                  searchValue={searchValue}
                />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
