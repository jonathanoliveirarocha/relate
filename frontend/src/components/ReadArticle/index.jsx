function ReadArticle() {
  return (
    <>
      <div className="w-full flex justify-center py-8 px-4">
        <a href="">
          <button className="absolute top-16 left-4">{"<"}</button>
        </a>
        <Text
          content='
          <h1 class="h1">Título</h1>
          <p class="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget metus
          euismod, semper purus non, congue leo. Vivamus ullamcorper, arcu in
          condimentum aliquam, massa orci dictum tellus, eu pretium ipsum felis at
          ligula. Fusce eget scelerisque arcu, in efficitur sem. Duis hendrerit
          nibh felis. Vestibulum nunc nunc, maximus vitae rhoncus id, maximus in
          nibh. Nam diam mauris, suscipit ut dictum ac, pulvinar ac nulla. Nam
          fringilla dui non tincidunt porta. Morbi eu congue sapien. Vivamus nisi
          erat, vehicula non odio nec, dictum rhoncus nunc.
          </p>
          <p class="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget metus
          euismod, semper purus non, congue leo. Vivamus ullamcorper, arcu in
          condimentum aliquam, massa orci dictum tellus, eu pretium ipsum felis at
          ligula. Fusce eget scelerisque arcu, in efficitur sem. Duis hendrerit
          nibh felis. Vestibulum nunc nunc, maximus vitae rhoncus id, maximus in
          nibh. Nam diam mauris, suscipit ut dictum ac, pulvinar ac nulla. Nam
          fringilla dui non tincidunt porta. Morbi eu congue sapien. Vivamus nisi
          erat, vehicula non odio nec, dictum rhoncus nunc.
          </p>
          <h2 class="h2">Sub-Titulo</h2>
          <p class="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget metus
          euismod, semper purus non, congue leo. Vivamus ullamcorper, arcu in
          condimentum aliquam, massa orci dictum tellus, eu pretium ipsum felis at
          ligula. Fusce eget scelerisque arcu, in efficitur sem. Duis hendrerit
          nibh felis. Vestibulum nunc nunc, maximus vitae rhoncus id, maximus in
          nibh. Nam diam mauris, suscipit ut dictum ac, pulvinar ac nulla. Nam
          fringilla dui non tincidunt porta. Morbi eu congue sapien. Vivamus nisi
          erat, vehicula non odio nec, dictum rhoncus nunc.
          </p>
          <ul class="ul">
              <li>Linha 1</li>
              <li>Linha 2</li>
              <li>Linha 3</li>
          </ul>
          <p class="terminal">npm i axios</p>'
        />
      </div>
    </>
  );
}

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
