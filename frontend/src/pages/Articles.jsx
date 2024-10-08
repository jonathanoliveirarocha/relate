import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Eye, Trash2, Pencil, LogOut, SquarePlus } from "lucide-react";
import Footer from "../components/Footer";
import PageLogo from "../assets/relate-logo.png";
import { isAuthenticated as verifyAuthenticated } from "../utils/Auth";
import { articleService } from "../api/articleService";
import { Helmet } from "react-helmet";

const SkeletonItem = ({ className }) => (
  <div className={`bg-[#1a1a1a] rounded animate-pulse ${className}`} />
);

const FeaturedSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="bg-black py-6 px-4 rounded-lg border border-border border-subtle"
      >
        <SkeletonItem className="h-6 w-3/4 mb-2" />
        <SkeletonItem className="h-5 w-full mb-1" />
        <SkeletonItem className="h-5 w-5/6" />
      </div>
    ))}
  </div>
);

const RecentSkeleton = () => (
  <div className="h-fit w-full space-y-3">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="space-y-2 bg-black py-6 px-4 border-b border-subtle"
      >
        <SkeletonItem className="h-8 w-1/4" />
        <SkeletonItem className="h-6 w-full" />
        <SkeletonItem className="h-4 w-5/6" />
        <div className="flex justify-between items-center">
          <SkeletonItem className="h-4 w-1/4" />
          <SkeletonItem className="h-4 w-16" />
        </div>
      </div>
    ))}
  </div>
);

const FeaturedCard = React.memo(({ title, content, id }) => (
  <a href={`/article/${id}`}>
    <div className="bg-black py-6 px-4 rounded-lg border border-border border-subtle hover:bg-dark cursor-pointer">
      <h3 className="text-xl font-bold mb-2 styled-title-card">{title}</h3>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-primary limited-text text-sm text-align-left"
      />
    </div>
  </a>
));

const SearchInput = React.memo(({ setData }) => {
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (keywords.trim() !== "") {
        const data = await articleService.fetchArticlesByKeyword(keywords);
        setData(data);
      }
    };

    const debounce = setTimeout(fetchData, 300);
    return () => clearTimeout(debounce);
  }, [keywords, setData]);

  return (
    <input
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}
      type="text"
      placeholder="Pesquisar"
      className="bg-darker text-primary placeholder-primary px-4 py-[6px] pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
    />
  );
});

const Header = React.memo(({ isAuthenticated, onLogout, data, setData }) => (
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
      <SearchInput setData={setData} />
      {isAuthenticated && (
        <LogOut
          width={20}
          className="cursor-pointer hover:opacity-80"
          onClick={onLogout}
        />
      )}
    </div>
  </header>
));

const ActionButtons = React.memo(({ onEdit, onDelete, id }) => (
  <div className="flex gap-3 z-50 absolute right-0">
    <Pencil
      width={18}
      className="hover:opacity-80"
      onClick={(e) => onEdit(e, id)}
    />
    <Trash2
      width={18}
      className="hover:opacity-80"
      onClick={(e) => onDelete(e, id)}
    />
  </div>
));

const ArticleInfo = React.memo(({ date, views }) => (
  <div className="flex justify-between text-sm text-primary opacity-60 mt-4">
    <span>
      {new Date(date).toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      })}
    </span>
    <span className="flex items-center">
      <Eye className="w-4 h-4 mr-1" />
      {views}
    </span>
  </div>
));

const ArticleCard = React.memo(
  ({ title, content, onEdit, onDelete, isAuthenticated, id, date, views }) => (
    <a href={`/article/${id}`}>
      <div className="bg-black py-6 px-4 border-b border-subtle hover:bg-dark cursor-pointer">
        <div className="flex relative">
          <h3 className="text-xl font-bold mb-2 styled-title-card">{title}</h3>
          {isAuthenticated && (
            <ActionButtons onEdit={onEdit} onDelete={onDelete} id={id} />
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-primary limited-text text-sm"
        />
        <ArticleInfo date={date} views={views} />
      </div>
    </a>
  )
);

const CategorySelector = React.memo(({ category, setCategory }) => (
  <select
    className="px-2 bg-black"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="all">Tudo</option>
    <option value="astronomy">Astronomia</option>
    <option value="tech">Tecnologia</option>
    <option value="music">Música</option>
  </select>
));

const FeaturedArticles = React.memo(({ data, loading }) => (
  <section className="mb-8">
    <h2 className="text-3xl font-bold my-4">Em destaque</h2>
    {loading || data.length === 0 ? (
      <FeaturedSkeleton />
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((article) => (
          <FeaturedCard
            key={article._id}
            title={article.title}
            content={article.content}
            id={article._id}
          />
        ))}
      </div>
    )}
  </section>
));

const NoArticlesFound = () => (
  <div>
    <h3 className="text-xl mt-6 text-primary ">Nenhum Artigo Encontrado!</h3>
  </div>
);

const RecentArticles = React.memo(
  ({
    isAuthenticated,
    onEdit,
    onDelete,
    setCategory,
    data,
    category,
    loading,
  }) => (
    <section>
      <div className="flex justify-between items-center pb-4 border-b border-subtle">
        <h2 className="text-3xl font-bold">Recentes</h2>
        <CategorySelector category={category} setCategory={setCategory} />
      </div>
      {isAuthenticated && (
        <div className="mt-2 py-2 px-4 flex justify-end">
          <a href="/admin/article/create">
            <SquarePlus className="hover:opacity-80" />
          </a>
        </div>
      )}
      {loading || data.length === 0 ? (
        loading ? (
          <RecentSkeleton />
        ) : (
          <NoArticlesFound />
        )
      ) : (
        <div className="h-fit w-full space-y-3">
          {data.map((article) => (
            <ArticleCard
              key={article._id}
              title={article.title}
              content={article.content}
              onEdit={onEdit}
              onDelete={onDelete}
              isAuthenticated={isAuthenticated}
              id={article._id}
              date={article.publishedAt}
              views={article.viewCount}
            />
          ))}
        </div>
      )}
    </section>
  )
);

const Articles = () => {
  const [category, setCategory] = useState("all");
  const [isAuthenticated, setIsAuthenticated] = useState(verifyAuthenticated());
  const [loading, setLoading] = useState(true);
  const [featuredData, setFeaturedData] = useState([]);
  const [data, setData] = useState([]);

  const fetchArticles = useCallback(async () => {
    const articles = await articleService.fetchAllArticles();
    setData(articles);
    setFeaturedData(getFeaturedArticles(articles));
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  useEffect(() => {
    const fetchArticlesByCategory = async () => {
      const articles =
        category === "all"
          ? await articleService.fetchAllArticles()
          : await articleService.fetchArticlesByCategory(category);
      setData(articles);
    };
    fetchArticlesByCategory();
  }, [category]);

  const handleEdit = useCallback((e, id) => {
    e.preventDefault();
    window.location.href = `/admin/article/edit/${id}`;
  }, []);

  const handleDelete = useCallback(
    async (e, id) => {
      e.preventDefault();
      const token = localStorage.getItem("jwtToken");
      const response = await articleService.deleteArticle(id, token);
      if (response) {
        fetchArticles();
      }
    },
    [fetchArticles]
  );

  const handleLogout = useCallback(() => {
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
  }, []);

  const getFeaturedArticles = useCallback((articles) => {
    return articles
      .slice()
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, 3);
  }, []);

  const sortedArticles = useMemo(() => {
    return data
      .slice()
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Relate - Artigos</title>
        <meta
          name="description"
          content="Saudações, explorador! O Relate é um espaço para curiosos apaixonados por astronomia, tecnologia e música. Descubra como esses mundos se conectam!"
        />
        <meta
          name="keywords"
          content="astronomia, tecnologia, música, conhecimento, blog, artigos, ciência"
        />
        <link rel="canonical" href="https://somerelate.vercel.app/articles" />
      </Helmet>
      <Header
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        data={data}
        setData={setData}
      />
      <div className="min-h-screen bg-black text-white font-sans px-4">
        <main className="max-w-6xl mx-auto min-h-screen">
          <FeaturedArticles data={featuredData} loading={loading} />
          <RecentArticles
            data={sortedArticles}
            isAuthenticated={isAuthenticated}
            onEdit={handleEdit}
            onDelete={handleDelete}
            setCategory={setCategory}
            category={category}
            loading={loading}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Articles;
