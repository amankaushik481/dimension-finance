import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { Homepage, Whitepaper } from "./Pages";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/whitepaper", element: <Whitepaper /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <div>
      <Router>
        <AppRoute />
      </Router>
    </div>
  );
};

export default App;
