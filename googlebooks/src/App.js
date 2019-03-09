import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs/NavTabs";
import Search from "./components/Search/Search";
import Saved from "./components/Saved/Saved";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Search} />
      <Route exact path="/Saved" component={Saved} />
    </div>
  </Router>
);

export default App;
