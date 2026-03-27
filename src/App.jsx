import { Routes, Route } from "react-router";

import { LoginPage, SignupPage, HomePage, MoviesPage, TvseriesPage, BookmarksPage } from "./pages/index";

import { useState } from "react";

import { ProtectedRoute } from "./components/index";

import { MainLayout } from "./layouts";

import { moviesList } from "./utils/mock/movies-list";

function App() {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [movies, setMovies] = useState(moviesList);
  const [filteredMovies, setFilteredMovies] = useState(moviesList);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          element={
            <MainLayout
              setSearchedMovies={setSearchedMovies}
              movies={filteredMovies}
              setFilteredMovies={setFilteredMovies}
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
