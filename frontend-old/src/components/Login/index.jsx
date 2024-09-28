import { useState } from "react";
import { authService } from "../../api/auth.service";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();
    const response = await authService.loginAdminUser({ email, password });
    const data = await response.json();
    if (response.ok) {
      props.setToken(data.token);
      localStorage.setItem("tokenStorage", JSON.stringify(data.token));
      window.location.href = "/";
    } else {
      alert(data.message);
    }
  };
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <form onSubmit={userLogin}>
          <div className="rounded-lg border border-gray-200 p-6 space-y-4">
            <div>
              <label className="text-sm" htmlFor="email">
                E-mail:
              </label>
              <input
                className="w-full border border-gray-200 rounded-md px-2 py-1"
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
};

export default Login;
