import { Routes, Route } from "react-router";

import { LoginPage, SignupPage, HomePage } from "./pages/index";

import { ProtectedRoute } from "./components/index";

function App() {
  const user = localStorage.getItem("isUserLoggedIn");

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
