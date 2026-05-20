function Login() {
  return (
    <div className="container">

      <h1>
        Login
      </h1>

      <form className="auth-form">

        <input
          type="email"
          placeholder="Inserisci email"
        />

        <input
          type="password"
          placeholder="Inserisci password"
        />

        <button>
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;