import {
  useContext,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useForm,
} from "react-hook-form";

import {
  AuthContext,
} from "../context/AuthContext";

function Register() {
  
  const { login } =
  useContext(AuthContext);
  
  const navigate =
  useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  function onSubmit(data) {
    
    login({
      name: data.name,
      email: data.email,
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
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-4"
    >
    
    <div>
    <input
    type="text"
    placeholder="Inserisci nome"
    className="input input-bordered w-full"
    {...register("name", {
      required: "Il nome è obbligatorio",
      maxLength: {
        value: 50,
        message:
        "Massimo 50 caratteri",
      },
    })}
    />
    
    {errors.name && (
      <p className="text-error text-sm mt-1">
      {errors.name.message}
      </p>
    )}
    </div>
    
    <div>
    <input
    type="email"
    placeholder="Inserisci email"
    className="input input-bordered w-full"
    {...register("email", {
      required: "La email è obbligatoria",
      maxLength: {
        value: 50,
        message:
        "Massimo 50 caratteri",
      },
    })}
    />
    
    {errors.email && (
      <p className="text-error text-sm mt-1">
      {errors.email.message}
      </p>
    )}
    </div>
    
    <div>
    <input
    type="password"
    placeholder="Inserisci password"
    className="input input-bordered w-full"
    {...register("password", {
      required: "La password è obbligatoria",
      maxLength: {
        value: 50,
        message:
        "Massimo 50 caratteri",
      },
    })}
    />
    
    {errors.password && (
      <p className="text-error text-sm mt-1">
      {errors.password.message}
      </p>
    )}
    </div>
    
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