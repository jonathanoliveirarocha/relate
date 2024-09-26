import React, { useState } from "react";
import PageLogo from "../assets/relate-logo.png";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Type, Eye, EyeOff, } from "lucide-react";

const Header = () => (
  <header className="sm:p-4 h-16 flex w-full absolute z-50 justify-between bg-black items-center">
    <div className="flex items-center absolute pl-4">
      <a href="/">
        <img
          src={PageLogo}
          alt="Page logo"
          width={100}
          height={25}
          className="w-[100px]"
        />
      </a>
    </div>
  </header>
);

const FormattingToolbar = ({ onFormat }) => {
  const toolbarButtons = [
    { Icon: Bold, format: "bold", title: "Negrito" },
    { Icon: Italic, format: "italic", title: "Itálico" },
    { Icon: Underline, format: "underline", title: "Sublinhado" },
    { Icon: AlignLeft, format: "align-left", title: "Alinhar à Esquerda" },
    { Icon: AlignCenter, format: "align-center", title: "Centralizar" },
    { Icon: AlignRight, format: "align-right", title: "Alinhar à Direita" },
    { Icon: AlignJustify, format: "align-justify", title: "Justificar" },
    { Icon: Type, format: "subtitle", title: "Subtítulo" },
  ];

  return (
    <div className="mb-2 flex flex-wrap gap-2 items-center">
      {toolbarButtons.map(({ Icon, format, title }) => (
        <Icon
          key={format}
          size={26}
          title={title}
          className="p-1 hover:bg-[#1a1a1a] rounded cursor-pointer"
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
    className="w-full h-[calc(100%-120px)] p-2 bg-black border border-[#27272a80] rounded-md"
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
      className="w-full mb-4 p-2 bg-black border border-[#27272a80] rounded-md"
    />
    <FormattingToolbar onFormat={onFormat} />
    <TextArea value={content.body} onChange={onBodyChange} />
    <div className="flex gap-4">
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
  <div>
    <h1 className="text-4xl text-white font-bold mb-4">{title}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: body }}
      className="prose prose-invert max-w-none text-[#919096]"
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
    };

    setContent({
      ...content,
      body: beforeText + (formatTags[format] || selectedText) + afterText,
    });
  };

  const togglePreview = () => setShowPreview((prev) => !prev);

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen z-50 bg-black text-gray-100 py-[70px] px-4">
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
          className={`w-full md:w-1/2 p-4 ${
            !showPreview ? "hidden md:block" : ""
          }`}
        >
          <ArticlePreview title={content.title} body={content.body} />
        </div>

        <button
          onClick={togglePreview}
          className="fixed bottom-4 right-4 md:hidden bg-[#1a1a1a] text-white p-2 rounded-full shadow-lg"
        >
          {showPreview ? <EyeOff size={24} /> : <Eye size={24} />}
        </button>
      </div>
    </>
  );
};

export default NewArticle;
