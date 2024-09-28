import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowBigLeft, Eye } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { articleService } from "../api/article.service";

const ArticleHeader = ({ title }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">{title}</h2>
);

const ArticleMetadata = ({ date, views }) => (
  <div className="flex justify-between text-sm text-primary opacity-60 mt-8">
    <span>{date}</span>
    <span className="flex items-center">
      <Eye className="w-4 h-4 mr-1" />
      {views}
    </span>
  </div>
);

const BackButton = () => (
  <a href="/articles">
    <button className="fixed bottom-8 left-4 hover:bg-darker text-white p-1 rounded-full shadow-lg">
      <ArrowBigLeft width={25} />
    </button>
  </a>
);

export default function ReadArticle() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(await articleService.fetchArticleById(id));
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <BackButton />
      <div className="min-h-screen bg-black text-white max-w-3xl mx-auto px-4">
        <main className="py-8 text-justify">
          <ArticleHeader title={data.title} />
          <div
            dangerouslySetInnerHTML={{ __html: data.content }}
            className="text-primary text-md-styled"
          />
          <ArticleMetadata
            date={new Date(data.publishedAt).toLocaleString("pt-BR", {
              timezone: "UTC",
            })}
            views={data.viewCount}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
