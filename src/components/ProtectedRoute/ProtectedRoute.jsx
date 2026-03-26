import { Navigate } from "react-router";

export function ProtectedRoute({ children }) {
  const user = localStorage.getItem("isUserLoggedIn");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}