import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Eye, Trash2, Pencil, LogOut, SquarePlus } from "lucide-react";
import Footer from "../components/Footer";
import PageLogo from "../assets/relate-logo.png";
import { isAuthenticated as verifyAuthenticated } from "../utils/Auth";
import { articleService } from "../api/articleService";
import { Helmet } from "react-helmet";
import Pagination from "../components/Pagination";

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

const ActionButtons = React.memo(({ onEdit, onDelete, id }) => (
  <div className="flex gap-3 absolute right-0">
    <Pencil
      width={18}
      onClick={(e) => onEdit(e, id)}
      className="hover:opacity-80"
    />
    <Trash2
      width={18}
      onClick={(e) => onDelete(e, id)}
      className="hover:opacity-80"
    />
  </div>
));

const ArticleCard = React.memo(
  ({ title, content, id, date, views, isAuthenticated, onEdit, onDelete }) => (
    <a href={`/article/${id}`}>
      <div className="bg-black py-6 px-4 border-b border-subtle hover:bg-dark">
        <div className="flex relative">
          <h3 className="text-xl font-bold mb-2 styled-title-card">{title}</h3>
          {isAuthenticated && (
            <ActionButtons id={id} onEdit={onEdit} onDelete={onDelete} />
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-primary limited-text text-sm"
        />
        <ArticleInfo date={date} views={views} />
      </div>
    </a>
  ),
);

const SearchInput = React.memo(({ q, setQ }) => {
  const [value, setValue] = useState(q);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setQ(value.trim());
    }, 300);

    return () => clearTimeout(debounce);
  }, [value, setQ]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="text"
      placeholder="Pesquisar"
      className="bg-darker text-primary px-4 py-[6px] rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
    />
  );
});

const CategorySelector = React.memo(({ category, setCategory }) => (
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="px-2 bg-black"
  >
    <option value="all">Tudo</option>
    <option value="astronomy">Astronomia</option>
    <option value="tech">Tecnologia</option>
    <option value="music">Música</option>
  </select>
));

const Header = React.memo(({ isAuthenticated, onLogout, q, setQ }) => (
  <header className="px-4 h-16 flex justify-between bg-black items-center">
    <a href="/">
      <img src={PageLogo} alt="Logo" className="w-[100px] hidden sm:block" />
    </a>
    <div className="flex gap-4 items-center">
      <SearchInput q={q} setQ={setQ} />
      {isAuthenticated && (
        <LogOut width={20} className="cursor-pointer" onClick={onLogout} />
      )}
    </div>
  </header>
));

const Articles = () => {
  const LIST_LIMIT = 15;

  const [category, setCategory] = useState("all");
  const [q, setQ] = useState("");
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(verifyAuthenticated());
  const [total, setTotal] = useState(0);

  const getFeaturedArticles = useCallback((articles) => {
    return articles.rows
      .slice()
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, 3);
  }, []);

  const fetchArticles = useCallback(async () => {
    setLoading(true);

    const articles = await articleService.fetchAllArticles({
      offset,
      limit: LIST_LIMIT,
      category: category === "all" ? undefined : category,
      q: q || undefined,
    });

    setData(articles.rows);
    setTotal(articles.total);
    setFeaturedData(getFeaturedArticles(articles));
    setLoading(false);
  }, [offset, category, q, getFeaturedArticles]);

  useEffect(() => {
    setOffset(0);
  }, [category, q]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleEdit = useCallback((e, id) => {
    e.preventDefault();
    window.location.href = `/admin/article/edit/${id}`;
  }, []);

  const handleDelete = useCallback(
    async (e, id) => {
      e.preventDefault();
      const token = localStorage.getItem("jwtToken");
      await articleService.deleteArticle(id, token);
      fetchArticles();
    },
    [fetchArticles],
  );

  useEffect(() => {
    setOffset(0);
  }, [category, q]);

  const handlePageChange = useCallback((newOffset) => {
    setOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
  };

  const sortedArticles = useMemo(
    () =>
      data
        .slice()
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
    [data],
  );

  return (
    <>
      <Helmet>
        <title>Relate - Artigos</title>
      </Helmet>

      <Header
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        q={q}
        setQ={setQ}
      />

      <main className="max-w-6xl mx-auto min-h-screen px-4">
        {loading ? (
          <FeaturedSkeleton />
        ) : (
          <section className="mb-8">
            <h2 className="text-3xl font-bold my-4">Em destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredData.map((article) => (
                <FeaturedCard key={article._id} {...article} id={article._id} />
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="flex justify-between items-center pb-4 border-b border-subtle">
            {" "}
            <h2 className="text-3xl font-bold">Recentes</h2>{" "}
            <CategorySelector
              category={category}
              setCategory={setCategory}
            />{" "}
          </div>

          {loading ? (
            <RecentSkeleton />
          ) : (
            sortedArticles.map((article) => (
              <ArticleCard
                key={article._id}
                title={article.title}
                content={article.content}
                views={article.viewCount}
                date={article.publishedAt}
                id={article._id}
                isAuthenticated={isAuthenticated}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}

          <Pagination
            offset={offset}
            limit={LIST_LIMIT}
            total={total}
            onPageChange={handlePageChange}
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Articles;
