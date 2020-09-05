import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Certification from "./components/Certifications";
import About from "./components/About";
import Layout from "./hoc/layout";
// import Auth from './hoc/auth';
const url = process.env.NODE_ENV === "production" ? "myportfolio" : "";
class Routes extends Component {
  render() {
    return (
      <Layout>
        {process.env.NODE_ENV === "production" ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/certifications" exact component={Certification} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/certifications" exact component={Certification} />
          </Switch>
        )}
      </Layout>
    );
  }
}
export default Routes;
