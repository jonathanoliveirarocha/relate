import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Type, Eye, EyeOff, Terminal, Link, Image, List, ListOrdered, } from "lucide-react";
import { articleService } from "../api/articleService";
import { useParams } from "react-router-dom";

const getJwtToken = () => localStorage.getItem("jwtToken");

const toolbarButtonsConfig = [
  { Icon: Bold, format: "bold", title: "Negrito" },
  { Icon: Italic, format: "italic", title: "Itálico" },
  { Icon: Underline, format: "underline", title: "Sublinhado" },
  { Icon: Type, format: "subtitle", title: "Subtítulo" },
  { Icon: List, format: "list", title: "Lista" },
  { Icon: ListOrdered, format: "list-ordered", title: "Lista Ordenada" },
  { Icon: AlignJustify, format: "align-justify", title: "Justificar" },
  { Icon: AlignLeft, format: "align-left", title: "Alinhar à Esquerda" },
  { Icon: AlignCenter, format: "align-center", title: "Centralizar" },
  { Icon: AlignRight, format: "align-right", title: "Alinhar à Direita" },
  { Icon: Link, format: "link", title: "Link" },
  { Icon: Image, format: "image", title: "Imagem" },
  { Icon: Terminal, format: "terminal", title: "Terminal" },
];

const FormattingToolbar = ({ onFormat }) => (
  <div className="mb-2 flex flex-wrap gap-2 items-center">
    {toolbarButtonsConfig.map(({ Icon, format, title }) => (
      <Icon
        key={format}
        size={26}
        title={title}
        className="p-1 hover:bg-darker rounded cursor-pointer"
        onClick={() => onFormat(format)}
      />
    ))}
  </div>
);

const TextArea = ({ value, onChange }) => (
  <textarea
    id="body"
    value={value}
    onChange={onChange}
    placeholder="Conteúdo"
    className="w-full h-[calc(100%-120px)] p-2 bg-black border border-subtle rounded-md"
  />
);

const ArticleForm = ({
  content,
  onTitleChange,
  onBodyChange,
  onFormat,
  onCategoryChange,
  onSave,
  category,
}) => (
  <form className="h-full" onSubmit={onSave}>
    <input
      type="text"
      value={content.title}
      onChange={onTitleChange}
      placeholder="Título"
      className="w-full mb-4 p-2 bg-black border border-subtle rounded-md"
    />
    <FormattingToolbar onFormat={onFormat} />
    <TextArea value={content.body} onChange={onBodyChange} />
    <div className="flex gap-4 mt-2">
      <select
        className="w-1/2 bg-black"
        value={category}
        onChange={onCategoryChange}
      >
        <option value="astronomy">Astronomia</option>
        <option value="tech">Tecnologia</option>
        <option value="music">Música</option>
      </select>
      <button
        type="submit"
        className="w-1/2 bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-200"
      >
        {content.id ? "Editar" : "Salvar"}
      </button>
    </div>
  </form>
);

const ArticlePreview = ({ title, body }) => (
  <div className="h-full overflow-auto">
    <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">{title}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: body }}
      className="prose prose-invert max-w-none text-primary text-md-styled"
    />
  </div>
);

const NewArticle = () => {
  const { id } = useParams();
  const [content, setContent] = useState({ title: "", body: "" });
  const [showPreview, setShowPreview] = useState(false);
  const [category, setCategory] = useState("astronomy");

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response = await articleService.fetchArticleById(id);
        setContent({ title: response.title, body: response.content, id });
        setCategory(response.category);
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (field, value) =>
    setContent((prevContent) => ({ ...prevContent, [field]: value }));

  const handleFormat = (format) => {
    const textarea = document.getElementById("body");
    const { selectionStart: start, selectionEnd: end } = textarea;
    const selectedText = content.body.substring(start, end);
    const beforeText = content.body.substring(0, start);
    const afterText = content.body.substring(end);

    const formatTags = {
      bold: `<strong>${selectedText}</strong>`,
      italic: `<em>${selectedText}</em>`,
      underline: `<u>${selectedText}</u>`,
      "align-left": `<p class="styled-p text-left">${selectedText}</p>`,
      "align-center": `<p class="styled-p text-center">${selectedText}</p>`,
      "align-right": `<p class="styled-p text-right">${selectedText}</p>`,
      "align-justify": `<p class="styled-p text-justify">${selectedText}</p>`,
      subtitle: `<h2 class="text-subtitle">${selectedText}</h2>`,
      terminal: `<div class="terminal"><div class="terminal-header"><div class="circle red"></div><div class="circle yellow"></div><div class="circle green"></div></div><div class="terminal-content"><p>${selectedText}</p></div></div>`,
      link: `<a class="styled-a" href="${selectedText}" target="_blank">${selectedText}</a>`,
      image: `<img src="${selectedText}" class="styled-img" alt="Imagem ilustrativa"/>`,
      list: wrapTextWithTag(selectedText, "ul"),
      "list-ordered": wrapTextWithTag(selectedText, "ol"),
    };

    setContent({
      ...content,
      body: beforeText + (formatTags[format] || selectedText) + afterText,
    });
  };

  const wrapTextWithTag = (text, tag) => {
    const listItems = text
      .split("\n")
      .map((line) => `<li>${line.trim()}</li>`)
      .join("");
    return `<${tag} class="styled-list">${listItems}</${tag}>`;
  };

  const togglePreview = () => setShowPreview((prev) => !prev);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!content.title || !content.body) {
      alert("Preencha todos os campos!");
      return;
    }

    const token = getJwtToken();
    const saveArticle = id
      ? articleService.updateArticle(
          { title: content.title, content: content.body, category },
          id,
          token
        )
      : articleService.createArticle(
          { title: content.title, content: content.body, category },
          token
        );

    const response = await saveArticle;
    if (response) window.location.href = "/articles";
  };

  return (
    <>
      <Header styles="absolute" />
      <div className="flex flex-col gap-4 md:flex-row h-screen z-50 bg-black text-gray-100 py-[70px] px-4">
        <div
          className={`w-full md:w-1/2 ${showPreview ? "hidden md:block" : ""}`}
        >
          <ArticleForm
            content={content}
            onTitleChange={(e) => handleInputChange("title", e.target.value)}
            onBodyChange={(e) => handleInputChange("body", e.target.value)}
            onFormat={handleFormat}
            onCategoryChange={(e) => setCategory(e.target.value)}
            onSave={handleSubmitForm}
            category={category}
          />
        </div>

        <div
          className={`w-full md:w-1/2 ${!showPreview ? "hidden md:block" : ""}`}
        >
          <ArticlePreview title={content.title} body={content.body} />
        </div>

        <button
          onClick={togglePreview}
          className="fixed bottom-4 right-4 bg-white text-black rounded-full p-3 shadow-md hover:bg-gray-300 transition-all duration-300 md:hidden"
        >
          {showPreview ? <EyeOff size={26} /> : <Eye size={26} />}
        </button>
      </div>
    </>
  );
};

export default NewArticle;
