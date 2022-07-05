import React from "react";
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="title">Family</h1>
    <NavLink to="/London" exact='true' className={({ isActive }) => isActive ? " is-active" : ""}>Picture 1</NavLink>
    <NavLink to="/Venezia" className={({ isActive }) => isActive ? " is-active" : ""}>Picture 2</NavLink>
    <NavLink to="/Swansea" className={({ isActive }) => isActive ? " is-active" : ""}>Picture 3</NavLink>
  </header>
);

export {Header as default} ;