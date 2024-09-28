import { useState, useEffect } from "react";
import { Eye, Trash2, Pencil, LogOut, SquarePlus } from "lucide-react";
import Footer from "../components/Footer";
import PageLogo from "../assets/relate-logo.png";
import { isAuthenticated as verifyAuthenticated } from "../utils/Auth";
import { articleService } from "../api/article.service";

const clearJwtToken = () => {
  localStorage.removeItem("jwtToken");
};

const getJwtToken = () => {
  return localStorage.getItem("jwtToken");
};

const FeaturedCard = ({ title, content, id }) => (
  <a href={`/article/${id}`}>
    <div className="bg-b py-6 px-4 rounded-lg border border-border border-subtle hover:bg-dark cursor-pointer">
      <h3 className="text-xl font-bold mb-2 styled-title-card">{title}</h3>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-primary limited-text text-sm text-align-left"
      />
    </div>
  </a>
);

const Header = ({ isAuthenticated, onLogout, data, setData }) => (
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
      <SearchInput data={data} setData={setData} />
      {isAuthenticated && (
        <LogOut
          width={20}
          className="cursor-pointer hover:opacity-80"
          onClick={onLogout}
        />
      )}
    </div>
  </header>
);

const SearchInput = ({ data, setData }) => {
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (keywords.trim() !== "") {
        const data = await articleService.fetchArticlesByKeyword(keywords);
        setData(data);
      }
    };

    fetchData();
  }, [keywords]);

  return (
    <input
      value={keywords}
      onChange={(e) => {
        setKeywords(e.target.value);
      }}
      type="text"
      placeholder="Pesquisar"
      className="bg-darker text-primary placeholder-primary px-4 py-[6px] pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
    />
  );
};

const ArticleCard = ({
  title,
  content,
  onEdit,
  onDelete,
  isAuthenticated,
  id,
  date,
  views,
}) => (
  <a href={`/article/${id}`}>
    <div className="bg-b py-6 px-4 border-b border-subtle hover:bg-dark cursor-pointer">
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
);

const ActionButtons = ({ onEdit, onDelete, id }) => (
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
);

const ArticleInfo = ({ date, views }) => (
  <div className="flex justify-between text-sm text-primary opacity-60 mt-4">
    <span>
      {new Date(date).toLocaleString("pt-BR", {
        timezone: "UTC",
      })}
    </span>
    <span className="flex items-center">
      <Eye className="w-4 h-4 mr-1" />
      {views}
    </span>
  </div>
);

const Articles = () => {
  const [category, setCategory] = useState("all");
  const [isAuthenticated, setIsAuthenticated] = useState(verifyAuthenticated());
  const [featuredData, setFeaturedData] = useState(skeletonFeatured);
  const [data, setData] = useState(skeletonData);

  useEffect(() => {
    const fetchData = async () => {
      setData(await articleService.fetchAllArticles());
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setFeaturedData(
        getFeaturedArticles(await articleService.fetchAllArticles())
      );
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (category === "all") {
        setData(await articleService.fetchAllArticles());
      } else {
        setData(await articleService.fetchArticlesByCategory(category));
      }
    };
    fetchData();
  }, [category]);

  const handleEdit = async (e, id) => {
    e.preventDefault();
    window.location.href = `/admin/article/edit/${id}`;
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    const token = getJwtToken();
    const response = await articleService.deleteArticle(id, token);
    if (response) {
      location.reload();
    }
  };

  const handleLogout = () => {
    clearJwtToken();
    setIsAuthenticated(false);
  };

  const getFeaturedArticles = (articles) => {
    return articles
      .slice()
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, 3);
  };

  const getArticlesSortedByDate = (articles) => {
    return articles
      .slice()
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  };

  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        data={data}
        setData={setData}
      />
      <div className="min-h-screen bg-black text-white font-sans px-4">
        <main className="max-w-6xl mx-auto min-h-screen">
          <FeaturedArticles data={featuredData} />
          <RecentArticles
            data={getArticlesSortedByDate(data)}
            isAuthenticated={isAuthenticated}
            onEdit={handleEdit}
            onDelete={handleDelete}
            setCategory={setCategory}
            category={category}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

const FeaturedArticles = (data) => (
  <section className="mb-8">
    <h2 className="text-3xl font-bold my-4">Em destaque</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.data.map((article, index) => (
        <FeaturedCard
          key={index}
          title={article.title}
          content={article.content}
          id={article._id}
        />
      ))}
    </div>
  </section>
);

const RecentArticles = ({
  isAuthenticated,
  onEdit,
  onDelete,
  setCategory,
  data,
  category,
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
    <div className="h-fit w-full space-y-3">
      {data.map((article, index) => (
        <ArticleCard
          key={index}
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
  </section>
);

const CategorySelector = ({ category, setCategory }) => (
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
);

const skeletonFeatured = [
  {
    _id: "66f7c21ec4fbe3cbd8af1fbe",
    title: "Título",
    content:
      "<p class='styled-p text-justify'>Vivamus rutrum, ipsum in mattis rhoncus, arcu nibh faucibus enim, vehicula venenatis ipsum leo non nisi. Donec at risus et magna fermentum dapibus ut vitae nunc. Suspendisse eget vestibulum nulla. Aliquam vitae convallis nisi. Curabitur ut convallis neque, convallis ultricies est. Nunc posuere quis felis a faucibus. Integer eu libero at turpis aliquet hendrerit non at urna. Proin consectetur mollis varius. Sed tempus, lectus ut lobortis tristique, dui quam lacinia magna, vel sodales urna lectus placerat nisi.</p> <h2 class='text-subtitle'>Subtítulo</h2> <p class='styled-p text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est felis, elementum id tincidunt ac, viverra eget tortor. Vivamus cursus ante id nisi pharetra, eu facilisis orci vestibulum. Vivamus dui elit, interdum molestie lectus vel, pulvinar congue quam. Donec non mi urna. Donec ac ornare tortor, ac mattis felis. Nullam auctor vehicula aliquam. Aliquam et ante in felis bibendum tempor. Curabitur nec tellus facilisis, faucibus magna vel, maximus lorem. Aenean tincidunt, diam ut imperdiet pharetra, sapien velit volutpat elit, vel commodo massa enim in ante. Suspendisse magna sodales ut orci id, consequat scelerisque tellus. Donec ac dolor lacinia dui interdum feugiat sed ut mauris. Donec iaculis, nulla a efficitur commodo, elit ipsum vehicula nisi, at gravida odio tellus lacinia quam.</p> <p class='styled-p text-justify'>Fusce venenatis ex quis euismod lobortis. Sed a neque nec quam pharetra eleifend id at erat. Integer sed enim vel nisi mattis viverra. Curabitur vitae augue dictum, consequat quam eleifend, mollis ex. Integer interdum nunc arcu, quis euismod leo sodales sed. Donec iaculis condimentum dui vehicula finibus. Sed nec enim massa. Sed dignissim mollis orci. Nam fermentum scelerisque blandit. Morbi nulla tortor, tristique vehicula facilisis nec, lobortis et neque. Morbi odio nisi, lobortis in est id, consequat dapibus felis. Nam mollis ac nulla id euismod. Morbi pellentesque elit ac mi pulvinar, et commodo mi consectetur. Praesent auctor vulputate bibendum. Mauris auctor, est quis cursus auctor, eros felis luctus ligula, et auctor neque quam imperdiet turpis. Pellentesque ac suscipit tellus, id pharetra turpis.</p> <p class='styled-p text-justify'>Maecenas commodo facilisis odio sit amet pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque ultricies vulputate. Suspendisse potenti. Praesent eget fermentum eros. Aenean facilisis rhoncus lacus. Curabitur in molestie enim. Sed in cursus mi. Donec tristique dictum commodo. Donec fringilla elit condimentum mi laoreet aliquet. Fusce ligula neque, sagittis vitae nulla nec, ultricies ullamcorper justo. Praesent volutpat, ante quis congue imperdiet, risus quam pellentesque metus, nec congue eros ipsum non sem.</p>",
    category: "tech",
    viewCount: 0,
    publishedAt: "2024-09-28T08:45:18.810Z",
    __v: 0,
  },
  {
    _id: "66f7c21ec4fbe3cbd8af1fbe",
    title: "Título",
    content:
      "<p class='styled-p text-justify'>Vivamus rutrum, ipsum in mattis rhoncus, arcu nibh faucibus enim, vehicula venenatis ipsum leo non nisi. Donec at risus et magna fermentum dapibus ut vitae nunc. Suspendisse eget vestibulum nulla. Aliquam vitae convallis nisi. Curabitur ut convallis neque, convallis ultricies est. Nunc posuere quis felis a faucibus. Integer eu libero at turpis aliquet hendrerit non at urna. Proin consectetur mollis varius. Sed tempus, lectus ut lobortis tristique, dui quam lacinia magna, vel sodales urna lectus placerat nisi.</p> <h2 class='text-subtitle'>Subtítulo</h2> <p class='styled-p text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est felis, elementum id tincidunt ac, viverra eget tortor. Vivamus cursus ante id nisi pharetra, eu facilisis orci vestibulum. Vivamus dui elit, interdum molestie lectus vel, pulvinar congue quam. Donec non mi urna. Donec ac ornare tortor, ac mattis felis. Nullam auctor vehicula aliquam. Aliquam et ante in felis bibendum tempor. Curabitur nec tellus facilisis, faucibus magna vel, maximus lorem. Aenean tincidunt, diam ut imperdiet pharetra, sapien velit volutpat elit, vel commodo massa enim in ante. Suspendisse magna sodales ut orci id, consequat scelerisque tellus. Donec ac dolor lacinia dui interdum feugiat sed ut mauris. Donec iaculis, nulla a efficitur commodo, elit ipsum vehicula nisi, at gravida odio tellus lacinia quam.</p> <p class='styled-p text-justify'>Fusce venenatis ex quis euismod lobortis. Sed a neque nec quam pharetra eleifend id at erat. Integer sed enim vel nisi mattis viverra. Curabitur vitae augue dictum, consequat quam eleifend, mollis ex. Integer interdum nunc arcu, quis euismod leo sodales sed. Donec iaculis condimentum dui vehicula finibus. Sed nec enim massa. Sed dignissim mollis orci. Nam fermentum scelerisque blandit. Morbi nulla tortor, tristique vehicula facilisis nec, lobortis et neque. Morbi odio nisi, lobortis in est id, consequat dapibus felis. Nam mollis ac nulla id euismod. Morbi pellentesque elit ac mi pulvinar, et commodo mi consectetur. Praesent auctor vulputate bibendum. Mauris auctor, est quis cursus auctor, eros felis luctus ligula, et auctor neque quam imperdiet turpis. Pellentesque ac suscipit tellus, id pharetra turpis.</p> <p class='styled-p text-justify'>Maecenas commodo facilisis odio sit amet pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque ultricies vulputate. Suspendisse potenti. Praesent eget fermentum eros. Aenean facilisis rhoncus lacus. Curabitur in molestie enim. Sed in cursus mi. Donec tristique dictum commodo. Donec fringilla elit condimentum mi laoreet aliquet. Fusce ligula neque, sagittis vitae nulla nec, ultricies ullamcorper justo. Praesent volutpat, ante quis congue imperdiet, risus quam pellentesque metus, nec congue eros ipsum non sem.</p>",
    category: "tech",
    viewCount: 0,
    publishedAt: "2024-09-28T08:45:18.810Z",
    __v: 0,
  },
  {
    _id: "66f7c21ec4fbe3cbd8af1fbe",
    title: "Título",
    content:
      "<p class='styled-p text-justify'>Vivamus rutrum, ipsum in mattis rhoncus, arcu nibh faucibus enim, vehicula venenatis ipsum leo non nisi. Donec at risus et magna fermentum dapibus ut vitae nunc. Suspendisse eget vestibulum nulla. Aliquam vitae convallis nisi. Curabitur ut convallis neque, convallis ultricies est. Nunc posuere quis felis a faucibus. Integer eu libero at turpis aliquet hendrerit non at urna. Proin consectetur mollis varius. Sed tempus, lectus ut lobortis tristique, dui quam lacinia magna, vel sodales urna lectus placerat nisi.</p> <h2 class='text-subtitle'>Subtítulo</h2> <p class='styled-p text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est felis, elementum id tincidunt ac, viverra eget tortor. Vivamus cursus ante id nisi pharetra, eu facilisis orci vestibulum. Vivamus dui elit, interdum molestie lectus vel, pulvinar congue quam. Donec non mi urna. Donec ac ornare tortor, ac mattis felis. Nullam auctor vehicula aliquam. Aliquam et ante in felis bibendum tempor. Curabitur nec tellus facilisis, faucibus magna vel, maximus lorem. Aenean tincidunt, diam ut imperdiet pharetra, sapien velit volutpat elit, vel commodo massa enim in ante. Suspendisse magna sodales ut orci id, consequat scelerisque tellus. Donec ac dolor lacinia dui interdum feugiat sed ut mauris. Donec iaculis, nulla a efficitur commodo, elit ipsum vehicula nisi, at gravida odio tellus lacinia quam.</p> <p class='styled-p text-justify'>Fusce venenatis ex quis euismod lobortis. Sed a neque nec quam pharetra eleifend id at erat. Integer sed enim vel nisi mattis viverra. Curabitur vitae augue dictum, consequat quam eleifend, mollis ex. Integer interdum nunc arcu, quis euismod leo sodales sed. Donec iaculis condimentum dui vehicula finibus. Sed nec enim massa. Sed dignissim mollis orci. Nam fermentum scelerisque blandit. Morbi nulla tortor, tristique vehicula facilisis nec, lobortis et neque. Morbi odio nisi, lobortis in est id, consequat dapibus felis. Nam mollis ac nulla id euismod. Morbi pellentesque elit ac mi pulvinar, et commodo mi consectetur. Praesent auctor vulputate bibendum. Mauris auctor, est quis cursus auctor, eros felis luctus ligula, et auctor neque quam imperdiet turpis. Pellentesque ac suscipit tellus, id pharetra turpis.</p> <p class='styled-p text-justify'>Maecenas commodo facilisis odio sit amet pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque ultricies vulputate. Suspendisse potenti. Praesent eget fermentum eros. Aenean facilisis rhoncus lacus. Curabitur in molestie enim. Sed in cursus mi. Donec tristique dictum commodo. Donec fringilla elit condimentum mi laoreet aliquet. Fusce ligula neque, sagittis vitae nulla nec, ultricies ullamcorper justo. Praesent volutpat, ante quis congue imperdiet, risus quam pellentesque metus, nec congue eros ipsum non sem.</p>",
    category: "tech",
    viewCount: 0,
    publishedAt: "2024-09-28T08:45:18.810Z",
    __v: 0,
  },
];

const skeletonData = [
  {
    _id: "66f7c21ec4fbe3cbd8af1fbe",
    title: "Título",
    content:
      "<p class='styled-p text-justify'>Vivamus rutrum, ipsum in mattis rhoncus, arcu nibh faucibus enim, vehicula venenatis ipsum leo non nisi. Donec at risus et magna fermentum dapibus ut vitae nunc. Suspendisse eget vestibulum nulla. Aliquam vitae convallis nisi. Curabitur ut convallis neque, convallis ultricies est. Nunc posuere quis felis a faucibus. Integer eu libero at turpis aliquet hendrerit non at urna. Proin consectetur mollis varius. Sed tempus, lectus ut lobortis tristique, dui quam lacinia magna, vel sodales urna lectus placerat nisi.</p> <h2 class='text-subtitle'>Subtítulo</h2> <p class='styled-p text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est felis, elementum id tincidunt ac, viverra eget tortor. Vivamus cursus ante id nisi pharetra, eu facilisis orci vestibulum. Vivamus dui elit, interdum molestie lectus vel, pulvinar congue quam. Donec non mi urna. Donec ac ornare tortor, ac mattis felis. Nullam auctor vehicula aliquam. Aliquam et ante in felis bibendum tempor. Curabitur nec tellus facilisis, faucibus magna vel, maximus lorem. Aenean tincidunt, diam ut imperdiet pharetra, sapien velit volutpat elit, vel commodo massa enim in ante. Suspendisse magna sodales ut orci id, consequat scelerisque tellus. Donec ac dolor lacinia dui interdum feugiat sed ut mauris. Donec iaculis, nulla a efficitur commodo, elit ipsum vehicula nisi, at gravida odio tellus lacinia quam.</p> <p class='styled-p text-justify'>Fusce venenatis ex quis euismod lobortis. Sed a neque nec quam pharetra eleifend id at erat. Integer sed enim vel nisi mattis viverra. Curabitur vitae augue dictum, consequat quam eleifend, mollis ex. Integer interdum nunc arcu, quis euismod leo sodales sed. Donec iaculis condimentum dui vehicula finibus. Sed nec enim massa. Sed dignissim mollis orci. Nam fermentum scelerisque blandit. Morbi nulla tortor, tristique vehicula facilisis nec, lobortis et neque. Morbi odio nisi, lobortis in est id, consequat dapibus felis. Nam mollis ac nulla id euismod. Morbi pellentesque elit ac mi pulvinar, et commodo mi consectetur. Praesent auctor vulputate bibendum. Mauris auctor, est quis cursus auctor, eros felis luctus ligula, et auctor neque quam imperdiet turpis. Pellentesque ac suscipit tellus, id pharetra turpis.</p> <p class='styled-p text-justify'>Maecenas commodo facilisis odio sit amet pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque ultricies vulputate. Suspendisse potenti. Praesent eget fermentum eros. Aenean facilisis rhoncus lacus. Curabitur in molestie enim. Sed in cursus mi. Donec tristique dictum commodo. Donec fringilla elit condimentum mi laoreet aliquet. Fusce ligula neque, sagittis vitae nulla nec, ultricies ullamcorper justo. Praesent volutpat, ante quis congue imperdiet, risus quam pellentesque metus, nec congue eros ipsum non sem.</p>",
    category: "tech",
    viewCount: 0,
    publishedAt: "2024-09-28T08:45:18.810Z",
    __v: 0,
  },
  {
    _id: "66f7c21ec4fbe3cbd8af1fbe",
    title: "Título",
    content:
      "<p class='styled-p text-justify'>Vivamus rutrum, ipsum in mattis rhoncus, arcu nibh faucibus enim, vehicula venenatis ipsum leo non nisi. Donec at risus et magna fermentum dapibus ut vitae nunc. Suspendisse eget vestibulum nulla. Aliquam vitae convallis nisi. Curabitur ut convallis neque, convallis ultricies est. Nunc posuere quis felis a faucibus. Integer eu libero at turpis aliquet hendrerit non at urna. Proin consectetur mollis varius. Sed tempus, lectus ut lobortis tristique, dui quam lacinia magna, vel sodales urna lectus placerat nisi.</p> <h2 class='text-subtitle'>Subtítulo</h2> <p class='styled-p text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est felis, elementum id tincidunt ac, viverra eget tortor. Vivamus cursus ante id nisi pharetra, eu facilisis orci vestibulum. Vivamus dui elit, interdum molestie lectus vel, pulvinar congue quam. Donec non mi urna. Donec ac ornare tortor, ac mattis felis. Nullam auctor vehicula aliquam. Aliquam et ante in felis bibendum tempor. Curabitur nec tellus facilisis, faucibus magna vel, maximus lorem. Aenean tincidunt, diam ut imperdiet pharetra, sapien velit volutpat elit, vel commodo massa enim in ante. Suspendisse magna sodales ut orci id, consequat scelerisque tellus. Donec ac dolor lacinia dui interdum feugiat sed ut mauris. Donec iaculis, nulla a efficitur commodo, elit ipsum vehicula nisi, at gravida odio tellus lacinia quam.</p> <p class='styled-p text-justify'>Fusce venenatis ex quis euismod lobortis. Sed a neque nec quam pharetra eleifend id at erat. Integer sed enim vel nisi mattis viverra. Curabitur vitae augue dictum, consequat quam eleifend, mollis ex. Integer interdum nunc arcu, quis euismod leo sodales sed. Donec iaculis condimentum dui vehicula finibus. Sed nec enim massa. Sed dignissim mollis orci. Nam fermentum scelerisque blandit. Morbi nulla tortor, tristique vehicula facilisis nec, lobortis et neque. Morbi odio nisi, lobortis in est id, consequat dapibus felis. Nam mollis ac nulla id euismod. Morbi pellentesque elit ac mi pulvinar, et commodo mi consectetur. Praesent auctor vulputate bibendum. Mauris auctor, est quis cursus auctor, eros felis luctus ligula, et auctor neque quam imperdiet turpis. Pellentesque ac suscipit tellus, id pharetra turpis.</p> <p class='styled-p text-justify'>Maecenas commodo facilisis odio sit amet pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque ultricies vulputate. Suspendisse potenti. Praesent eget fermentum eros. Aenean facilisis rhoncus lacus. Curabitur in molestie enim. Sed in cursus mi. Donec tristique dictum commodo. Donec fringilla elit condimentum mi laoreet aliquet. Fusce ligula neque, sagittis vitae nulla nec, ultricies ullamcorper justo. Praesent volutpat, ante quis congue imperdiet, risus quam pellentesque metus, nec congue eros ipsum non sem.</p>",
    category: "tech",
    viewCount: 0,
    publishedAt: "2024-09-28T08:45:18.810Z",
    __v: 0,
  },
  {
    _id: "66f7c21ec4fbe3cbd8af1fbe",
    title: "Título",
    content:
      "<p class='styled-p text-justify'>Vivamus rutrum, ipsum in mattis rhoncus, arcu nibh faucibus enim, vehicula venenatis ipsum leo non nisi. Donec at risus et magna fermentum dapibus ut vitae nunc. Suspendisse eget vestibulum nulla. Aliquam vitae convallis nisi. Curabitur ut convallis neque, convallis ultricies est. Nunc posuere quis felis a faucibus. Integer eu libero at turpis aliquet hendrerit non at urna. Proin consectetur mollis varius. Sed tempus, lectus ut lobortis tristique, dui quam lacinia magna, vel sodales urna lectus placerat nisi.</p> <h2 class='text-subtitle'>Subtítulo</h2> <p class='styled-p text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est felis, elementum id tincidunt ac, viverra eget tortor. Vivamus cursus ante id nisi pharetra, eu facilisis orci vestibulum. Vivamus dui elit, interdum molestie lectus vel, pulvinar congue quam. Donec non mi urna. Donec ac ornare tortor, ac mattis felis. Nullam auctor vehicula aliquam. Aliquam et ante in felis bibendum tempor. Curabitur nec tellus facilisis, faucibus magna vel, maximus lorem. Aenean tincidunt, diam ut imperdiet pharetra, sapien velit volutpat elit, vel commodo massa enim in ante. Suspendisse magna sodales ut orci id, consequat scelerisque tellus. Donec ac dolor lacinia dui interdum feugiat sed ut mauris. Donec iaculis, nulla a efficitur commodo, elit ipsum vehicula nisi, at gravida odio tellus lacinia quam.</p> <p class='styled-p text-justify'>Fusce venenatis ex quis euismod lobortis. Sed a neque nec quam pharetra eleifend id at erat. Integer sed enim vel nisi mattis viverra. Curabitur vitae augue dictum, consequat quam eleifend, mollis ex. Integer interdum nunc arcu, quis euismod leo sodales sed. Donec iaculis condimentum dui vehicula finibus. Sed nec enim massa. Sed dignissim mollis orci. Nam fermentum scelerisque blandit. Morbi nulla tortor, tristique vehicula facilisis nec, lobortis et neque. Morbi odio nisi, lobortis in est id, consequat dapibus felis. Nam mollis ac nulla id euismod. Morbi pellentesque elit ac mi pulvinar, et commodo mi consectetur. Praesent auctor vulputate bibendum. Mauris auctor, est quis cursus auctor, eros felis luctus ligula, et auctor neque quam imperdiet turpis. Pellentesque ac suscipit tellus, id pharetra turpis.</p> <p class='styled-p text-justify'>Maecenas commodo facilisis odio sit amet pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque ultricies vulputate. Suspendisse potenti. Praesent eget fermentum eros. Aenean facilisis rhoncus lacus. Curabitur in molestie enim. Sed in cursus mi. Donec tristique dictum commodo. Donec fringilla elit condimentum mi laoreet aliquet. Fusce ligula neque, sagittis vitae nulla nec, ultricies ullamcorper justo. Praesent volutpat, ante quis congue imperdiet, risus quam pellentesque metus, nec congue eros ipsum non sem.</p>",
    category: "tech",
    viewCount: 0,
    publishedAt: "2024-09-28T08:45:18.810Z",
    __v: 0,
  },
  {
    _id: "66f7c21ec4fbe3cbd8af1fbe",
    title: "Título",
    content:
      "<p class='styled-p text-justify'>Vivamus rutrum, ipsum in mattis rhoncus, arcu nibh faucibus enim, vehicula venenatis ipsum leo non nisi. Donec at risus et magna fermentum dapibus ut vitae nunc. Suspendisse eget vestibulum nulla. Aliquam vitae convallis nisi. Curabitur ut convallis neque, convallis ultricies est. Nunc posuere quis felis a faucibus. Integer eu libero at turpis aliquet hendrerit non at urna. Proin consectetur mollis varius. Sed tempus, lectus ut lobortis tristique, dui quam lacinia magna, vel sodales urna lectus placerat nisi.</p> <h2 class='text-subtitle'>Subtítulo</h2> <p class='styled-p text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est felis, elementum id tincidunt ac, viverra eget tortor. Vivamus cursus ante id nisi pharetra, eu facilisis orci vestibulum. Vivamus dui elit, interdum molestie lectus vel, pulvinar congue quam. Donec non mi urna. Donec ac ornare tortor, ac mattis felis. Nullam auctor vehicula aliquam. Aliquam et ante in felis bibendum tempor. Curabitur nec tellus facilisis, faucibus magna vel, maximus lorem. Aenean tincidunt, diam ut imperdiet pharetra, sapien velit volutpat elit, vel commodo massa enim in ante. Suspendisse magna sodales ut orci id, consequat scelerisque tellus. Donec ac dolor lacinia dui interdum feugiat sed ut mauris. Donec iaculis, nulla a efficitur commodo, elit ipsum vehicula nisi, at gravida odio tellus lacinia quam.</p> <p class='styled-p text-justify'>Fusce venenatis ex quis euismod lobortis. Sed a neque nec quam pharetra eleifend id at erat. Integer sed enim vel nisi mattis viverra. Curabitur vitae augue dictum, consequat quam eleifend, mollis ex. Integer interdum nunc arcu, quis euismod leo sodales sed. Donec iaculis condimentum dui vehicula finibus. Sed nec enim massa. Sed dignissim mollis orci. Nam fermentum scelerisque blandit. Morbi nulla tortor, tristique vehicula facilisis nec, lobortis et neque. Morbi odio nisi, lobortis in est id, consequat dapibus felis. Nam mollis ac nulla id euismod. Morbi pellentesque elit ac mi pulvinar, et commodo mi consectetur. Praesent auctor vulputate bibendum. Mauris auctor, est quis cursus auctor, eros felis luctus ligula, et auctor neque quam imperdiet turpis. Pellentesque ac suscipit tellus, id pharetra turpis.</p> <p class='styled-p text-justify'>Maecenas commodo facilisis odio sit amet pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque ultricies vulputate. Suspendisse potenti. Praesent eget fermentum eros. Aenean facilisis rhoncus lacus. Curabitur in molestie enim. Sed in cursus mi. Donec tristique dictum commodo. Donec fringilla elit condimentum mi laoreet aliquet. Fusce ligula neque, sagittis vitae nulla nec, ultricies ullamcorper justo. Praesent volutpat, ante quis congue imperdiet, risus quam pellentesque metus, nec congue eros ipsum non sem.</p>",
    category: "tech",
    viewCount: 0,
    publishedAt: "2024-09-28T08:45:18.810Z",
    __v: 0,
  },
  {
    _id: "66f7c21ec4fbe3cbd8af1fbe",
    title: "Título",
    content:
      "<p class='styled-p text-justify'>Vivamus rutrum, ipsum in mattis rhoncus, arcu nibh faucibus enim, vehicula venenatis ipsum leo non nisi. Donec at risus et magna fermentum dapibus ut vitae nunc. Suspendisse eget vestibulum nulla. Aliquam vitae convallis nisi. Curabitur ut convallis neque, convallis ultricies est. Nunc posuere quis felis a faucibus. Integer eu libero at turpis aliquet hendrerit non at urna. Proin consectetur mollis varius. Sed tempus, lectus ut lobortis tristique, dui quam lacinia magna, vel sodales urna lectus placerat nisi.</p> <h2 class='text-subtitle'>Subtítulo</h2> <p class='styled-p text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est felis, elementum id tincidunt ac, viverra eget tortor. Vivamus cursus ante id nisi pharetra, eu facilisis orci vestibulum. Vivamus dui elit, interdum molestie lectus vel, pulvinar congue quam. Donec non mi urna. Donec ac ornare tortor, ac mattis felis. Nullam auctor vehicula aliquam. Aliquam et ante in felis bibendum tempor. Curabitur nec tellus facilisis, faucibus magna vel, maximus lorem. Aenean tincidunt, diam ut imperdiet pharetra, sapien velit volutpat elit, vel commodo massa enim in ante. Suspendisse magna sodales ut orci id, consequat scelerisque tellus. Donec ac dolor lacinia dui interdum feugiat sed ut mauris. Donec iaculis, nulla a efficitur commodo, elit ipsum vehicula nisi, at gravida odio tellus lacinia quam.</p> <p class='styled-p text-justify'>Fusce venenatis ex quis euismod lobortis. Sed a neque nec quam pharetra eleifend id at erat. Integer sed enim vel nisi mattis viverra. Curabitur vitae augue dictum, consequat quam eleifend, mollis ex. Integer interdum nunc arcu, quis euismod leo sodales sed. Donec iaculis condimentum dui vehicula finibus. Sed nec enim massa. Sed dignissim mollis orci. Nam fermentum scelerisque blandit. Morbi nulla tortor, tristique vehicula facilisis nec, lobortis et neque. Morbi odio nisi, lobortis in est id, consequat dapibus felis. Nam mollis ac nulla id euismod. Morbi pellentesque elit ac mi pulvinar, et commodo mi consectetur. Praesent auctor vulputate bibendum. Mauris auctor, est quis cursus auctor, eros felis luctus ligula, et auctor neque quam imperdiet turpis. Pellentesque ac suscipit tellus, id pharetra turpis.</p> <p class='styled-p text-justify'>Maecenas commodo facilisis odio sit amet pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque ultricies vulputate. Suspendisse potenti. Praesent eget fermentum eros. Aenean facilisis rhoncus lacus. Curabitur in molestie enim. Sed in cursus mi. Donec tristique dictum commodo. Donec fringilla elit condimentum mi laoreet aliquet. Fusce ligula neque, sagittis vitae nulla nec, ultricies ullamcorper justo. Praesent volutpat, ante quis congue imperdiet, risus quam pellentesque metus, nec congue eros ipsum non sem.</p>",
    category: "tech",
    viewCount: 0,
    publishedAt: "2024-09-28T08:45:18.810Z",
    __v: 0,
  },
];

export default Articles;
