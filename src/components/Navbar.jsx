import { Link } from "react-router-dom";

import {
  useContext,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";

import useScroll from "../hooks/useScroll";

function Navbar() {
  
  const { user } =
  useContext(AuthContext);
  
  const scrollY =
  useScroll();
  
  return (
    <nav
    className="navbar"
    style={{
      backgroundColor:
      scrollY > 50
      ? "darkblue"
      : "black",
    }}
    >
    
    <ul className="nav-list">
    
    <li>
    <Link to="/">
    Home
    </Link>
    </li>
    
    {user && (
      <li>
      <Link to="/posts">
      Posts
      </Link>
      </li>
    )}
    
    <li>
    <Link to="/login">
    Login
    </Link>
    </li>
    
    <li>
    <Link to="/register">
    Register
    </Link>
    </li>
    
    </ul>
    </nav>
  );
}

export default Navbar;