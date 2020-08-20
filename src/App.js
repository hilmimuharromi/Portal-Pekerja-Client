import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import Pekerja from './views/Pekerja'
const appRoutes = [
  {
    name: "Home",
    component: Home,
    exact: true,
    path: "/",
  },
  {
    name: "Pekerja",
    component: Pekerja,
    exact: true,
    path: "/pekerja",
  }
];
function App() {
  return (
    <Router>
      {appRoutes.map((route) => (
        <Route key={route.name} {...route} />
      ))}
    </Router>
  );
}

export default App;
