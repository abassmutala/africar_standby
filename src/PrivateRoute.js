import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
}
// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         currentUser ? <Component {...props} /> : <Navigate to="/sign-in" replace/>;
//       }}
//     ></Route>
//   );
// }
