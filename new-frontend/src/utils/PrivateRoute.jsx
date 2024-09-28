import { Navigate } from "react-router-dom";

export default function PrivateRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/admin/auth/login" />;
}