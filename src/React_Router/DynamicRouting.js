import React, { Suspense, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "../App.css";
import SignUp from "./SignUp";
import PropsViewer from "./PropsViewer";
import PageNotFound from "./PageNotFound";
import Kabobs from "./Kabobs";
import UrlParameter from "./UrlParameter";
import Color from "./Color";
import LoggingHome from "./LoggingHome";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedPage from "./ProtectedPage";
const Navbar = React.lazy(() => import("./Navbar"));
function DynamicRouting() {
  return (
    <Fragment>
      <Router>
        <Suspense fallback={<h1>Loading navbar...</h1>}>
          <Navbar />
        </Suspense>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/signup" component={SignUp} />
          <Route path="/props" component={PropsViewer} />
          <Route path="/kabobs" component={Kabobs} exact />
          <Route path="/kabobs/:name" component={UrlParameter} />
          <Route path="/logging" component={LoggingHome} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute>
          <Route
            path="/color"
            render={() => {
              return <Color color="red" />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default DynamicRouting;
