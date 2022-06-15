import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./containers/Routes";

import configureStore from "./state";

const reduxStore = configureStore();

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <Router>
        <Routes />
      </Router>
    </ReduxProvider>
  );
}

export default App;
