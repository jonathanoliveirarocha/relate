import Header from "../components/Header";

export default function NotFound() {
  return (
    <>
      <Header styles="absolute" />
      <main className="flex items-center justify-center h-screen text-center px-4">
        <div>
          <h1 className="text-red-400 text-3xl font-bold">Erro 404</h1>
          <p className="text-gray-300 mt-2">Página não encontrada</p>
        </div>
      </main>
    </>
  );
}
