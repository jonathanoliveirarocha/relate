import React from "react";
import BackgroundAstronomy from "../assets/bg-astronomy-image.jpg";
import PageLogo from "../assets/relate-logo.png";
import { CircleAlert } from "lucide-react";
import { Helmet } from "react-helmet";

const Header = () => (
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
);

const HeroSection = () => (
  <section className="relative bg-black text-white">
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:h-screen lg:items-center lg:px-12">
      <Content />
      <Image />
    </div>
  </section>
);

const Content = () => (
  <div className="mx-auto mt-32 max-w-3xl shrink-0 lg:mx-0 lg:mt-0 lg:max-w-xl lg:pt-8">
    <div className="space-y-2">
      <h6 className="text-base font-bold tracking-wide">Mergulhe,</h6>
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        Onde a Astronomia, Tecnologia e Música se Misturam
      </h1>
    </div>
    <p className="prose prose-base prose-zinc mt-6 text-lg leading-8 dark:prose-invert">
      Leia as últimas noticias sobre o mundo da Astronomia, tecnologia e música,
      tudo em um só lugar.
    </p>
    <ActionButtons />
  </div>
);

const ActionButtons = () => (
  <div className="mt-10 flex items-center gap-x-8">
    <LinkButton href="/articles" text="Ver Artigos" />
    <AboutMeButton />
  </div>
);

const LinkButton = ({ href, text }) => (
  <a
    href={href}
    className="inline-flex scale-100 items-center justify-center rounded-sm text-sm font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f4f4f5] focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 bg-[#f4f4f5] text-[#09090b] hover:opacity-80 h-10 px-6"
  >
    {text}
  </a>
);

const AboutMeButton = () => (
  <a href="/aboutme">
    <button className="inline-flex scale-100 items-center justify-center rounded-sm text-sm font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-auto px-0">
      <CircleAlert className="w-5 mr-3" />
      Sobre Mim
    </button>
  </a>
);

const Image = () => (
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
);

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Relate - Início</title>
        <meta
          name="description"
          content="Saudações, explorador! O Relate é um espaço para curiosos apaixonados por astronomia, tecnologia e música. Descubra como esses mundos se conectam!"
        />
        <meta
          name="keywords"
          content="astronomia, tecnologia, música, conhecimento, blog, artigos, ciência"
        />
        <link rel="canonical" href="https://somerelate.vercel.app/" />
      </Helmet>
      <Header />
      <HeroSection />
    </>
  );
}
