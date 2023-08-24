
import { useContext } from "react";
import { AuthContext } from "../../utils/auth-context";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }: { children:JSX.Element }) {
  const { currentUser } = useContext(AuthContext)
  let location = useLocation()
  console.log("this is current user's id :"+currentUser?.uid);      

  if (!currentUser) {
    // Redirect the user to the home page.
    // Please! Close the mustache {{}}
    return <Navigate to="/rotract-club-thane/" state={ { from: location } } replace />;
  }

  return children;
}

export default RequireAuth
