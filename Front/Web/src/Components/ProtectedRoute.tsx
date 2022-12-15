import { Route, Redirect, RouteProps } from "react-router";

//  Variables pour authentification 
export type ProtectedRouteProps = {
    isAuth: string | null;
    authPath: string;
  } & RouteProps;
  
  export default function ProtectedRoute({isAuth, authPath, ...routeProps}: ProtectedRouteProps) {
    if(localStorage.getItem('user_auth') === "true") {
      return <Route {...routeProps} />;
    } else {
      return <Redirect to={{ pathname: authPath }} />;
    }
  };