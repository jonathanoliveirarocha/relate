import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Header from '../components/Header';

const InputField = ({ id, label, type, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block mb-2 text-sm font-medium">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="w-full px-3 py-2 bg-black border border-border border-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
    <p className="mt-1 text-xs text-gray-400">{placeholder}</p>
  </div>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Header styles="absolute"/>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <h2 className="text-2xl font-semibold mb-3">
            Faça login com sua conta
          </h2>
          <p className="mb-6 text-sm opacity-80">
            Essa área é restrita apenas para administradores.
          </p>

          <form>
            <InputField
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@exemple.com"
            />

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-3 py-2 bg-black border border-border border-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-400">Digite a sua senha</p>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Entrar
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <a href="/" className="text-sm text-white hover:underline">
              Voltar ao Início
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
