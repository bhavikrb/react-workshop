import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import "./index.css";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <App className="btn btn-outline-primary" userName='Bhavik' />
  </React.StrictMode>,
  document.getElementById("root")
);

