import React from "react";
import BackgroundAstronomy from "../../public/bg-astronomy-image.jpg";
import PageLogo from "../../public/relate-logo.png";

export default function Home() {
  return (
    <>
      <header className="absolute top-0 left-0 z-50 w-full py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32">
        <a href="/">
          <img
            src={PageLogo}
            alt="Page logo"
            width={200}
            height={50}
            className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[200px]"
          />
        </a>
      </header>

      <section id="hero" className="relative bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:h-screen lg:items-center lg:px-12">
          <div className="mx-auto mt-32 max-w-3xl shrink-0 lg:mx-0 lg:mt-0 lg:max-w-xl lg:pt-8">
            <div className="space-y-2">
              <h6 className="text-base font-bold tracking-wide">Mergulhe,</h6>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Onde a Astronomia, Tecnologia e Música se Misturam
              </h1>
            </div>

            <p className="prose prose-base prose-zinc mt-6 text-lg leading-8 dark:prose-invert">
              Leia as últimas noticias sobre o mundo da Astronomia, tecnologia e
              música, tudo em um só lugar.
            </p>

            <div className="mt-10 flex items-center gap-x-8">
              <a
                className="inline-flex scale-100 items-center justify-center rounded-sm text-sm font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f4f4f5] focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 bg-[#f4f4f5] text-[#09090b] hover:opacity-80 h-10 px-6"
                href="/"
              >
                Ver Artigos
              </a>

              <button className="inline-flex scale-100 items-center justify-center rounded-sm text-sm font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-auto px-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="mr-3"
                  viewBox="1.0 1.0 22.0 22.0"
                >
                  <g>
                    <path
                      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                      fill="rgb(244, 244, 245)"
                    />
                  </g>
                  <g>
                    <path
                      d="M11 8.66666V18.6667H13V8.66666H11Z"
                      fill="rgb(244, 244, 245)"
                    />
                  </g>
                  <g>
                    <path
                      d="M11 5.33332V7.55554H13V5.33332H11Z"
                      fill="rgb(244, 244, 245)"
                    />
                  </g>
                </svg>
                Sobre Mim
              </button>
            </div>
          </div>

          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-20">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                width={3600}
                height={2078}
                src={BackgroundAstronomy}
                alt="Astronomy Image"
                className="w-[56rem] rounded-lg bg-white/5 drop-shadow-2xl shadow-inner ring-1 ring-white/10"
              />
              <div className="glare-wrapper">
                <div className="glare" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
