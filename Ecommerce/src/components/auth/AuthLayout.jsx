import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { login } from "../../RTK/features/authSlice";

function AuthLayout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated){
      return <Navigate to="/login" />
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthLayout