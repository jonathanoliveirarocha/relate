const Articles = () => {
  return (
    <>
      <div className="w-full flex-1 mx-[18px] sm:mx-2 my-4">
        <Article />
      </div>
      <ScrollUp />
    </>
  );
};

const ScrollUp = () => {
  return (
    <>
      <a href="#">
        <button className="fixed text-white z-50 bottom-4 right-4 w-8 h-8 bg-gray-800 rounded-md">
          ^
        </button>
      </a>
    </>
  );
};

const Article = () => {
  return (
    <>
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
    </>
  );
};

export default Articles;
