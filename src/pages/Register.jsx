import {
  useContext,
  useState,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";

import {
  useNavigate,
} from "react-router-dom";

function Register() {
  
  const { login } =
  useContext(AuthContext);
  
  const navigate =
  useNavigate();
  
  const [name, setName] =
  useState("");
  
  const [email, setEmail] =
  useState("");
  
  const [password, setPassword] =
  useState("");
  
  function handleSubmit(e) {
    
    e.preventDefault();
    
    login({
      name,
      email,
    });
    
    navigate("/");
  }
  
  return (
    <div className="container">
    
    <h1>
    Register
    </h1>
    
    <form
    className="auth-form"
    onSubmit={handleSubmit}
    >
    
    <input
    type="text"
    placeholder="Inserisci nome"
    value={name}
    onChange={(e) =>
      setName(e.target.value)
    }
    />
    
    <input
    type="email"
    placeholder="Inserisci email"
    value={email}
    onChange={(e) =>
      setEmail(e.target.value)
    }
    />
    
    <input
    type="password"
    placeholder="Inserisci password"
    value={password}
    onChange={(e) =>
      setPassword(e.target.value)
    }
    />
    
    <button>
    Registrati
    </button>
    
    </form>
    </div>
  );
}

export default Register;