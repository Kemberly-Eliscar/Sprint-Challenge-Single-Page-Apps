import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";

// Im not sure if im supposed to import these components into my index file. 
//import { Tab, Menu, Icon } from "semantic-ui-react";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
