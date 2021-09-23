import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({component: Component, authed, ...rest}) {
        return (
          <Route
            {...rest}
            render={(props) => authed === true
              ? <Component {...props} />
              : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
          />
        )
}

export default ProtectedRoute;