import { Routes, Route } from "react-router";

import { LoginPage, SignupPage, HomePage } from "./pages/index";

import { ProtectedRoute } from "./components/index";

import { MainLayout } from "./layouts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
