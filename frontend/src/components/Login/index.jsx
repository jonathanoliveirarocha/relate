function Login() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <form>
          <div className="rounded-lg border border-gray-200 p-6 space-y-4">
            <div>
              <label className="text-sm" htmlFor="email">
                E-mail:
              </label>
              <input
                className="w-full border border-gray-200 rounded-md px-2 py-1"
                type="email"
                name="email"
                placeholder="E-mail"
                required
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
                required
              />
            </div>
            <button
              className="w-full py-1 rounded-md bg-gray-500 text-white hover:bg-gray-600"
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
