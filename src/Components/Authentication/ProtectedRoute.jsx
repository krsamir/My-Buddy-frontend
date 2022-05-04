import React from "react";
import { Route, Redirect } from "react-router-dom";
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("sid");
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (token !== undefined && token !== "" && token !== null) {
            return <Component {...props} />;
          } else {
            window.localStorage.clear();
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
