import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Components/Authentication/ProtectedRoute";
const Home = lazy(() => import("./Components/Home"));
const Login = lazy(() => import("./Components/Authentication/Login"));
const GitHubValidation = lazy(() =>
  import("./Components/Authentication/GitHubValidation")
);
function Routes() {
  return (
    <div>
      <Router>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <ProtectedRoute path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/github/validate" component={GitHubValidation} exact />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default Routes;
