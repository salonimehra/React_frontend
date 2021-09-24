import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "./AuthService";
import { withRouter } from 'react-router';


function ProtectedRoute({component: Component, authed, ...rest}) {
  authed=AuthService.loggedIn();
  if(authed===null)
    authed=false;

    console.log(authed);
  

        return (
          <Route
            {...rest}
            render={(props) => authed
              ? <Component {...props} />
              : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
          />
        )
}

export default withRouter(ProtectedRoute);
