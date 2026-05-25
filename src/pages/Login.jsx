function Login() {
  
  return (
    <div className="hero min-h-screen">
    
    <div className="card bg-base-200 w-96 shadow-xl">
    
    <div className="card-body">
    
    <h1 className="text-3xl font-bold text-center">
    Login
    </h1>
    
    <form className="flex flex-col gap-4">
    
    <input
    type="email"
    placeholder="Inserisci email"
    className="input input-bordered"
    />
    
    <input
    type="password"
    placeholder="Inserisci password"
    className="input input-bordered"
    />
    
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