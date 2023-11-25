import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowBack from "../../assets/arrow-back.svg"

const ReadArticle = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dev-relate.vercel.app/article/showone/${id}`
        );
        const obj = await response.json();
        setData(obj);
      } catch (error) {
        console.log("Erro ao buscar dados da API");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full min-h-[100vb] flex justify-center py-8 px-4">
        <a href="/dev-relate/">
          <button className="absolute top-16 left-4 w-6">
            <img src={ArrowBack} alt="Seta para voltar" />
            {/* Used Image: https://www.svgrepo.com/svg/521959/arrow-down-circle */}
          </button>
        </a>
        <div className="w-full max-w-[1000px]">
          <h1 className="h1">{data.title}</h1>
          <Text content={data.content} />
          <p className="text-sm text-gray-600 absolute mt-12">{new Date((data?.data ?? null)).toLocaleString('pt-BR', { timezone: 'UTC' })}</p>
       
        </div>
      </div>
    </>
  );
};

const Text = ({ content }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default ReadArticle;
