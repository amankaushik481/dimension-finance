import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { Homepage, Homepage2, About, Whitepaper } from "./Pages";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Homepage /> },
    // { path: "/", element: <Homepage2 /> },
    { path: "/whitepaper", element: <Whitepaper /> },
    { path: "/about", element: <About /> },
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
