import React from "react";
import Navbar from "./Navbar";
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
export default function DynamicRouting() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/signup" component={SignUp} />
        <Route path="/props" component={PropsViewer} />
        <Route path="/kabobs" component={Kabobs} exact />
        <Route path="/kabobs/:name" component={UrlParameter} />
        <Route
          path="/color"
          render={() => {
            return <Color color="red" />;
          }}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
