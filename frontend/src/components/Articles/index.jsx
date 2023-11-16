function Articles() {
  return (
    <>
      <div className="w-full transform -translate-x-[69px] sm:translate-x-[0] absolute left-20 right-0 p-4 sm:relative sm:left-0">
        <div className="w-full h-24 shadow-lg rounded-lg p-1 relative">
          <h1 className="font-bold text-lg">Título</h1>
          <p className="text-sm text-gray-600 abbreviated-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            viverra, eros fringilla faucibus dapibus, tortor diam bibendum elit,
            vitae finibus turpis ligula quis neque...
          </p>
          <a
            href=""
            className="absolute text-sm right-4 bottom-2 hover:opacity-80"
          >
            Leia Mais
          </a>
        </div>
      </div>
      <ScrollUp />
    </>
  );
}

function ScrollUp() {
  return (
    <>
      <a href="#">
        <div className="fixed flex justify-center items-center text-white z-50 bottom-4 right-4 w-8 h-8 bg-gray-800 rounded-md">
          ^
        </div>
      </a>
    </>
  );
}

export default Articles;
