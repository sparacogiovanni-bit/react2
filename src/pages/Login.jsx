import {
  useForm,
} from "react-hook-form";

function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  function onSubmit(data) {
    console.log(data);
  }
  
  return (
    <div className="hero min-h-screen">
    
    <div className="card bg-base-200 w-96 shadow-xl">
    
    <div className="card-body">
    
    <h1 className="text-3xl font-bold text-center">
    Login
    </h1>
    
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-4"
    >
    
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
    Login
    </button>
    
    </form>
    </div>
    </div>
    </div>
  );
}

export default Login;