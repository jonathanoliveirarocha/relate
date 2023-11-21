import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadArticle = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/article/showone/${id}`
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
        <a href="/">
          <button className="absolute top-16 left-4">{"<"}</button>
        </a>
        <Text content={data.content} />
      </div>
    </>
  );
};

const Text = ({ content }) => {
  return (
    <>
      <div
        className="max-w-[1000px]"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </>
  );
};

export default ReadArticle;
