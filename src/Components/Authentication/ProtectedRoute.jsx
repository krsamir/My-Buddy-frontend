import React from "react";
import SessionManager from "./SessionManager";
import { Route, Redirect } from "react-router-dom";

const session = new SessionManager();
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = session.getCookiesByName("access_token");
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (token !== undefined && token !== "" && token !== null) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default ProtectedRoute;
