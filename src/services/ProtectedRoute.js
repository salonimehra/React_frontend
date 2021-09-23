import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "./AuthService";

function ProtectedRoute({component: Component, authed, ...rest}) {
  authed=AuthService.loggedIn();
        return (
          <Route
            {...rest}
            render={(props) => authed
              ? <Component {...props} />
              : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
          />
        )
}

export default ProtectedRoute;