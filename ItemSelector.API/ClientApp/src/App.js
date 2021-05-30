import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";

import "./custom.css";

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
