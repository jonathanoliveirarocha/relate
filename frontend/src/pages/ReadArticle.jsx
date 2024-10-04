import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowBigLeft, Eye, Share2 } from "lucide-react";
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

const ShareButton = ({ link, title, style }) => {
  const handleShare = () => {
    const shareData = {
      title: title,
      text: "Confira este conteúdo incrível!",
      url: link,
    };

    navigator
      .share(shareData)
      .then(() => console.log("Conteúdo compartilhado com sucesso."))
      .catch((error) => console.error("Erro ao compartilhar:", error));
  };

  return (
    <Share2
      size={22}
      className={`cursor-pointer ${style ? style : ""}`}
      onClick={handleShare}
    />
  );
};

export default function ReadArticle() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      const articleData = await articleService.fetchArticleById(id);
      if (articleData) {
        setArticle(articleData);
        setLoading(false);
        return;
      }
      window.location.href = `/notfound`;
    };
    loadArticle();
  }, [id]);

  if (!article || loading) {
    return (
      <>
        <Header />
        <BackButton />
        <div className="min-h-screen bg-black text-white max-w-3xl mx-auto px-4">
          <ArticleSkeleton />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <BackButton />
      <div className="min-h-screen bg-black text-white max-w-3xl mx-auto px-4">
        <ShareButton
          link={`https://somerelate.vercel.app/article/${id}`}
          title={article.title}
          style={"text-primary justify-end float-right"}
        />
        <main className="py-10 text-justify min-h-screen">
          <ArticleHeader title={article.title} />
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="text-primary text-md-styled"
          />
          <ArticleMetadata
            date={new Date(article.publishedAt).toLocaleString("pt-BR", {
              timeZone: "America/Sao_Paulo",
            })}
            views={article.viewCount}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

const SkeletonItem = ({ className }) => (
  <div className={`bg-[#1a1a1a] rounded animate-pulse ${className}`}></div>
);

const ArticleSkeleton = () => {
  return (
    <div className="min-h-screen bg-black text-white max-w-3xl mx-auto pt-8">
      <SkeletonItem className="h-8 md:h-10 w-3/4 mb-6" />

      <div className="flex items-center space-x-4 mb-8">
        <SkeletonItem className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <SkeletonItem className="h-4 w-32" />
          <SkeletonItem className="h-3 w-24" />
        </div>
      </div>

      <div className="space-y-2 mb-8">
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-11/12" />
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-4/5" />
      </div>

      <SkeletonItem className="h-48 md:h-64 w-full mb-8" />

      <SkeletonItem className="h-6 md:h-7 w-2/3 mb-4" />

      <div className="space-y-2 mb-8">
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-11/12" />
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-4/5" />
        <SkeletonItem className="h-4 w-full" />
      </div>

      <div className="pl-4 border-l-4 border-[#27272a80] mb-8">
        <SkeletonItem className="h-4 w-11/12 mb-2" />
        <SkeletonItem className="h-4 w-10/12" />
      </div>

      <div className="space-y-2 mb-8">
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-11/12" />
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-4/5" />
      </div>

      <SkeletonItem className="h-6 md:h-7 w-1/2 mb-4" />

      <div className="space-y-3 mb-8">
        <div className="flex items-center space-x-2">
          <SkeletonItem className="h-3 w-3 rounded-full" />
          <SkeletonItem className="h-4 w-11/12" />
        </div>
        <div className="flex items-center space-x-2">
          <SkeletonItem className="h-3 w-3 rounded-full" />
          <SkeletonItem className="h-4 w-10/12" />
        </div>
        <div className="flex items-center space-x-2">
          <SkeletonItem className="h-3 w-3 rounded-full" />
          <SkeletonItem className="h-4 w-11/12" />
        </div>
      </div>

      <div className="space-y-2 mb-8">
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-11/12" />
        <SkeletonItem className="h-4 w-full" />
        <SkeletonItem className="h-4 w-3/4" />
      </div>
    </div>
  );
};
