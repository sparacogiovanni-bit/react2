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
    
    if (
      !name ||
      !email ||
      !password
    ) {
      return;
    }
    
    login({
      name,
      email,
    });
    
    navigate("/");
  }
  
  return (
    <div className="hero min-h-screen">
    
    <div className="card bg-base-200 w-96 shadow-xl">
    
    <div className="card-body">
    
    <h1 className="text-3xl font-bold text-center">
    Register
    </h1>
    
    <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-4"
    >
    
    <input
    type="text"
    placeholder="Inserisci nome"
    className="input input-bordered"
    value={name}
    onChange={(e) =>
      setName(e.target.value)
    }
    />
    
    <input
    type="email"
    placeholder="Inserisci email"
    className="input input-bordered"
    value={email}
    onChange={(e) =>
      setEmail(e.target.value)
    }
    />
    
    <input
    type="password"
    placeholder="Inserisci password"
    className="input input-bordered"
    value={password}
    onChange={(e) =>
      setPassword(e.target.value)
    }
    />
    
    <button className="btn btn-primary">
    Registrati
    </button>
    
    </form>
    </div>
    </div>
    </div>
  );
}

export default Register;