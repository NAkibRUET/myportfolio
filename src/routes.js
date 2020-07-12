import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";

// import Admin from './components/Admin';
// import Login from './containers/login';

// import Logout from './containers/logout';

import Layout from "./hoc/layout";
// import Auth from './hoc/auth';

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/myportfolio" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}
export default Routes;
