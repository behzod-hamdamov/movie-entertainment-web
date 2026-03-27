import { Routes, Route } from "react-router";

import { LoginPage, SignupPage, HomePage } from "./pages/index";

import { useState } from "react";

import { ProtectedRoute } from "./components/index";

import { MainLayout } from "./layouts";

import { moviesList } from "./utils/mock/movies-list"

function App() {
  const [searchedMovies, setSearchedMovies] = useState(null)
  const [movies, setMovies] = useState(moviesList)

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<MainLayout setSearchedMovies={setSearchedMovies} movies={movies} />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage searchedMovies={searchedMovies} movies={movies} />
              </ProtectedRoute>
            }
          />
          <Route path="/tvseries" element={
            <HomePage />
          } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
