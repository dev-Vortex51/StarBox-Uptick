import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { type RootState } from "./../app/store";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return user ? children : <Navigate to='/login' />;
};

export default ProtectedRoute;
