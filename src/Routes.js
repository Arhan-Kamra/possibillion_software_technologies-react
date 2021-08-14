import { Route, Switch } from "react-router-dom";

import Container from "./Container";
import Error404 from "./Error404";
import React from "react";
import SearchResults from "./SearchResults";

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Container} />
      <Route exact path='/search' component={Container} />
      <Route exact path='/search-results' component={SearchResults} />
      <Route component={Error404} />
    </Switch>
  );
}

export default Routes;
