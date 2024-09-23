import { ChevronDown, Github, Linkedin } from "lucide-react";
import PageLogo from "../assets/relate-logo.png";

const FeaturedCard = ({ title, description }) => (
  <div className="bg-[#111111] py-6 px-4 rounded-lg border border-[#333333]">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-[#888888] text-sm">{description}</p>
  </div>
);

export default function Articles() {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      <header className="px-4 h-16 flex justify-between bg-black items-center border-b border-[#333333]">
        <div className="flex items-center pl-4">
          <a href="/">
            <img
              src={PageLogo}
              alt="Page logo"
              width={100}
              height={25}
              className="hidden w-[100px] sm:block"
            />
          </a>
        </div>
        <div className="relative w-full max-w-[1100px] m-auto text-end ">
          <input
            type="text"
            placeholder="Pesquisar"
            className="bg-[#1a1a1a] text-[#888888] px-4 py-[6px] pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
      </header>

      <main className="p-4 max-w-6xl mx-auto min-h-screen">
        <section className="mb-8">
          <h2 className="text-3xl font-bold my-4">Em destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeaturedCard
              title="Título"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus fringilla porta. Sed eget."
            />
            <FeaturedCard
              title="Título"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus fringilla porta. Sed eget."
            />
            <FeaturedCard
              title="Título"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus fringilla porta. Sed eget."
            />
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">Recentes</h2>
            <button className="flex items-center text-white hover:opacity-80">
              Categoria
              <ChevronDown className="ml-1 mt-1" />
            </button>
          </div>
        </section>
      </main>
      <footer className="mt-auto">
        <div className="max-w-6xl mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-[#888888] text-sm italic">
              <p>&copy; 2024 Relate. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jonathanoliveirarocha/relate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/company/somerelate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
