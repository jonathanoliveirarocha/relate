import React, { useState } from "react";
import Header from '../components/Header';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Type, Eye, EyeOff, Terminal, Link, Image, List, ListOrdered} from "lucide-react";

const FormattingToolbar = ({ onFormat }) => {
  const toolbarButtons = [
    { Icon: Bold, format: "bold", title: "Negrito" },
    { Icon: Italic, format: "italic", title: "Itálico" },
    { Icon: Underline, format: "underline", title: "Sublinhado" },
    { Icon: Type, format: "subtitle", title: "Subtítulo" },
    { Icon: List, format: "list", title: "Lista" },
    { Icon: ListOrdered, format: "list-ordered", title: "Lista ordenada" },
    { Icon: AlignJustify, format: "align-justify", title: "Justificar" },
    { Icon: AlignLeft, format: "align-left", title: "Alinhar à Esquerda" },
    { Icon: AlignCenter, format: "align-center", title: "Centralizar" },
    { Icon: AlignRight, format: "align-right", title: "Alinhar à Direita" },
    { Icon: Link, format: "link", title: "Link" },
    { Icon: Image, format: "image", title: "Imagem" },
    { Icon: Terminal, format: "terminal", title: "Terminal" },
  ];

  return (
    <div className="mb-2 flex flex-wrap gap-2 items-center">
      {toolbarButtons.map(({ Icon, format, title }) => (
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
};

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
}) => (
  <form className="h-full">
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
      <select className="w-1/2 bg-black" onChange={onCategoryChange}>
        <option value="astronomy">Astronomia</option>
        <option value="tech">Tecnologia</option>
        <option value="music">Música</option>
      </select>
      <button
        type="submit"
        className="w-1/2 bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        onClick={onSave}
      >
        Salvar
      </button>
    </div>
  </form>
);

const ArticlePreview = ({ title, body }) => (
  <div className="h-full overflow-auto">
    <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">{title}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: body }}
      className="prose prose-invert max-w-none text-primary"
    />
  </div>
);

const NewArticle = () => {
  const [content, setContent] = useState({ title: "", body: "" });
  const [showPreview, setShowPreview] = useState(false);
  const [category, setCategory] = useState("astronomy");

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
      list: (() => {
        const listItems = selectedText.split('\n').map(line =>`<li>${line.trim()}</li>`).join('');
        return `<ul class="styled-list">${listItems}</ul>`;
      })(),
      "list-ordered": (() => {
        const listItems = selectedText.split('\n').map(line => `<li>${line.trim()}</li>`).join('');
        return `<ol class="styled-list-ordered">${listItems}</ol>`;
      })(),
    };

    setContent({
      ...content,
      body: beforeText + (formatTags[format] || selectedText) + afterText,
    });
  };

  const togglePreview = () => setShowPreview((prev) => !prev);

  return (
    <>
      <Header styles="absolute"/>
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
            onSave={(e) => {
              e.preventDefault();
              console.log("Save article:", content, category);
            }}
          />
        </div>

        <div
          className={`w-full md:w-1/2 ${
            !showPreview ? "hidden md:block" : ""
          }`}
        >
          <ArticlePreview title={content.title} body={content.body} />
        </div>

        <button
          onClick={togglePreview}
          className="fixed bottom-4 right-4 md:hidden bg-darker text-white p-2 rounded-full shadow-lg"
        >
          {showPreview ? <EyeOff size={24} /> : <Eye size={24} />}
        </button>
      </div>
    </>
  );
};

export default NewArticle;
