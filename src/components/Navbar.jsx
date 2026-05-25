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
    <div
    className={
      scrollY > 50
      ? "navbar bg-primary fixed top-0 z-50"
      : "navbar bg-neutral fixed top-0 z-50"
    }
    >
    
    <div className="flex-1">
    
    <Link
    to="/"
    className="btn btn-ghost text-xl"
    >
    React App
    </Link>
    
    </div>
    
    <div className="flex gap-2">
    
    <Link
    to="/"
    className="btn btn-ghost"
    >
    Home
    </Link>
    
    {user && (
      <Link
      to="/posts"
      className="btn btn-ghost"
      >
      Posts
      </Link>
    )}
    
    <Link
    to="/login"
    className="btn btn-ghost"
    >
    Login
    </Link>
    
    <Link
    to="/register"
    className="btn btn-ghost"
    >
    Register
    </Link>
    
    </div>
    </div>
  );
}

export default Navbar;