import React from "react";

import { Home } from "./pages";
import { Route, Router } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/product/:id">
          <SingleProduct />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
