function Register() {
  return (
    <div className="container">

      <h1>
        Register
      </h1>

      <form className="auth-form">

        <input
          type="text"
          placeholder="Inserisci nome"
        />

        <input
          type="email"
          placeholder="Inserisci email"
        />

        <input
          type="password"
          placeholder="Inserisci password"
        />

        <button>
          Registrati
        </button>

      </form>
    </div>
  );
}

export default Register;