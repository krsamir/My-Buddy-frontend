import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Components/Authentication/ProtectedRoute";
const Home = lazy(() => import("./Components/Home"));
const Dashboard = lazy(() => import("./Components/Dashboard"));
const Login = lazy(() => import("./Components/Authentication/LoginOAuth"));

const GitHubValidation = lazy(() =>
  import("./Components/Authentication/GitHubValidation")
);
const BitBucketValidation = lazy(() =>
  import("./Components/Authentication/OAuthBitbucket")
);
function Routes() {
  return (
    <div>
      <Router>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <ProtectedRoute path="/dashboard" component={Dashboard} exact />
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/github/validate" component={GitHubValidation} exact />
            <Route
              path="/bitbucket/validate"
              component={BitBucketValidation}
              exact
            />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default Routes;
