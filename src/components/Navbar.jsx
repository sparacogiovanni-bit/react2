import {
  Link,
} from "react-router-dom";

import {
  useContext,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";

function Navbar() {
  
  const { user } =
  useContext(AuthContext);
  
  return (
    <nav className="navbar">
    
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