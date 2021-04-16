import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { Store } from "./store";

//Views
import { Home, Master } from "./views";

export default function Routes() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mestre" component={Master} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
