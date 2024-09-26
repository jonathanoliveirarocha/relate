import { useState } from "react";
import { Eye, Trash2, Pencil, LogOut, SquarePlus } from "lucide-react";
import Footer from "../components/Footer";
import PageLogo from "../assets/relate-logo.png";
import { isAuthenticated as verifyAuthenticated } from "../utils/Auth";

const FeaturedCard = ({ title, description }) => (
  <a href="/article/teste">
    <div className="bg-b py-6 px-4 rounded-lg border border-border border-subtle hover:bg-dark cursor-pointer">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-primary text-sm limited-text">{description}</p>
    </div>
  </a>
);

const Header = ({ isAuthenticated, setIsAuthenticated }) => (
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
    <div className="flex items-center gap-4 justify-end w-full max-w-[1100px] m-auto">
      <SearchInput />
      {isAuthenticated && (
        <LogOut
          width={20}
          className="cursor-pointer hover:opacity-80"
          onClick={() => setIsAuthenticated(false)}
        />
      )}
    </div>
  </header>
);

const SearchInput = () => (
  <input
    type="text"
    placeholder="Pesquisar"
    className="bg-darker text-primary placeholder-primary px-4 py-[6px] pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
  />
);

const ArticleCard = ({
  title,
  description,
  onEdit,
  onDelete,
  isAuthenticated,
  href,
}) => (
  <a href={`/article/${href}`}>
    <div className="bg-b py-6 px-4 border-b border-subtle hover:bg-dark cursor-pointer">
      <div className="flex relative">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {isAuthenticated && (
          <ActionButtons onEdit={onEdit} onDelete={onDelete} />
        )}
      </div>
      <p className="text-primary text-sm limited-text">{description}</p>
      <ArticleInfo />
    </div>
  </a>
);

const ActionButtons = ({ onEdit, onDelete }) => (
  <div className="flex gap-3 z-50 absolute right-0">
    <Pencil width={18} className="hover:opacity-80" onClick={onEdit} />
    <Trash2 width={18} className="hover:opacity-80" onClick={onDelete} />
  </div>
);

const ArticleInfo = () => (
  <div className="flex justify-between text-sm text-primary opacity-60 mt-4">
    <span>22/06/2023, 22:27:58</span>
    <span className="flex items-center">
      <Eye className="w-4 h-4 mr-1" />
      1280
    </span>
  </div>
);

const Articles = () => {
  const [category, setCategory] = useState("all");
  const [isAuthenticated, setIsAuthenticated] = useState(verifyAuthenticated());

  const handleEdit = (e) => {
    e.preventDefault();
    alert("Edit");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    alert("Remove");
  };

  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div className="min-h-screen bg-balck text-white font-sans px-4">
        <main className="max-w-6xl mx-auto min-h-screen">
          <FeaturedArticles />
          <RecentArticles
            isAuthenticated={isAuthenticated}
            onEdit={handleEdit}
            onDelete={handleDelete}
            setCategory={setCategory}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

const FeaturedArticles = () => (
  <section className="mb-8">
    <h2 className="text-3xl font-bold my-4">Em destaque</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array(3)
        .fill()
        .map((_, index) => (
          <FeaturedCard
            key={index}
            title="Título"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus fringilla porta. Sed eget."
          />
        ))}
    </div>
  </section>
);

const RecentArticles = ({ isAuthenticated, onEdit, onDelete, setCategory }) => (
  <section>
    <div className="flex justify-between items-center pb-4 border-b border-subtle">
      <h2 className="text-3xl font-bold">Recentes</h2>
      <CategorySelector setCategory={setCategory} />
    </div>
    {isAuthenticated && (
      <div className="mt-2 py-2 px-4 flex justify-end">
        <a href="/admin/article/create">
          <SquarePlus className="hover:opacity-80" />
        </a>
      </div>
    )}
    <div className="h-fit w-full space-y-3">
      {Array(2)
        .fill()
        .map((_, index) => (
          <ArticleCard
            key={index}
            title="Titulo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus fringilla porta. Sed eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus fringilla porta. Sed eget."
            onEdit={onEdit}
            onDelete={onDelete}
            isAuthenticated={isAuthenticated}
            href={"teste"}
          />
        ))}
    </div>
  </section>
);

const CategorySelector = ({ setCategory }) => (
  <select
    className="px-2 bg-black"
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="all">Tudo</option>
    <option value="astronomy">Astronomia</option>
    <option value="tech">Tecnologia</option>
    <option value="music">Música</option>
  </select>
);

export default Articles;
