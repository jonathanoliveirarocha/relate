function Login() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <form>
          <div className="rounded-lg shadow-2xl p-6 space-y-4">
            <div>
              <label className="text-sm" htmlFor="email">
                E-mail:
              </label>
              <input
                className="w-full border border-gray-200 rounded-md px-2 py-1"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </div>
            <div>
              <label className="text-sm" htmlFor="password">
                Senha:
              </label>
              <input
                className="w-full border border-gray-200 rounded-md px-2 py-1"
                type="password"
                name="password"
                placeholder="Senha"
              />
            </div>
            <button
              className="w-full py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
