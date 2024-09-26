import { ChevronDown } from "lucide-react";
import Footer from '../components/Footer';
import PageLogo from "../assets/relate-logo.png";

const FeaturedCard = ({ title, description, href }) => (
  <a href="/article/teste">
    <div className="bg-b py-6 px-4 rounded-lg border border-border border-subtle hover:bg-dark cursor-pointer">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-primary text-sm">{description}</p>
    </div>
  </a>
);

const Header = () => {
  return (
    <header className="px-4 h-16 flex justify-between bg-black items-center">
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
          className="bg-darker text-primary placeholder-primary px-4 py-[6px] pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
    </header>
  );
};

// const Footer = () => {
//   return (
//     <footer className="mt-8">
//       <div className="max-w-6xl mx-auto py-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0 text-secondary text-sm italic">
//             <p>&copy; 2024 Relate. Todos os direitos reservados.</p>
//           </div>
//           <div className="flex space-x-4">
//             <a
//               href="https://github.com/jonathanoliveirarocha/relate"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-secondary hover:text-white transition-colors"
//             >
//               <Github className="w-6 h-6" />
//               <span className="sr-only">GitHub</span>
//             </a>
//             <a
//               href="https://www.linkedin.com/company/somerelate"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-secondary hover:text-white transition-colors"
//             >
//               <Linkedin className="w-6 h-6" />
//               <span className="sr-only">LinkedIn</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

export default function Articles() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-balck text-white font-sans px-4">
        <main className="max-w-6xl mx-auto min-h-screen">
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
        <Footer />
      </div>
    </>
  );
}
