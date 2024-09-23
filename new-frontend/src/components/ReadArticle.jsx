import { ArrowLeft, Eye, Github, Linkedin } from "lucide-react";
import PageLogo from "../assets/relate-logo.png";

export default function ReadArticle() {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      <header className="p-4 h-16 flex justify-between bg-black items-center border-b border-[#333333]">
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
      <main className="px-4 py-8 max-w-3xl mx-auto text-justify">
        <h2 className="text-4xl font-bold mb-4">Título</h2>
        <p className="mb-8 text-gray-300">
          Vivamus rutrum, ipsum in mattis rhoncus, arcu nibh faucibus enim,
          vehicula venenatis ipsum leo non nisi. Donec at risus et magna
          fermentum dapibus ut vitae nunc. Suspendisse eget vestibulum nulla.
          Aliquam vitae convallis nisi. Curabitur ut convallis neque, convallis
          ultricies est. Nunc posuere quis felis a faucibus. Integer eu libero
          at turpis aliquet hendrerit non at urna. Proin consectetur mollis
          varius. Sed tempus, lectus ut lobortis tristique, dui quam lacinia
          magna, vel sodales urna lectus placerat nisi.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Subtítulo</h3>
        <p className="mb-4 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est
          felis, elementum id tincidunt ac, viverra eget tortor. Vivamus cursus
          ante id nisi pharetra, eu facilisis orci vestibulum. Vivamus dui elit,
          interdum molestie lectus vel, pulvinar congue quam. Donec non mi urna.
          Donec ac ornare tortor, ac mattis felis. Nullam auctor vehicula
          aliquam. Aliquam et ante in felis bibendum tempor. Curabitur nec
          tellus facilisis, faucibus magna vel, maximus lorem. Aenean tincidunt,
          diam ut imperdiet pharetra, sapien velit volutpat elit, vel commodo
          massa enim in ante. Suspendisse magna sodales ut orci id, consequat
          scelerisque tellus. Donec ac dolor lacinia dui interdum feugiat sed ut
          mauris. Donec iaculis, nulla a efficitur commodo, elit ipsum vehicula
          nisi, at gravida odio tellus lacinia quam.
        </p>
        <p className="mb-4 text-gray-300">
          Fusce venenatis ex quis euismod lobortis. Sed a neque nec quam
          pharetra eleifend id at erat. Integer sed enim vel nisi mattis
          viverra. Curabitur vitae augue dictum, consequat quam eleifend, mollis
          ex. Integer interdum nunc arcu, quis euismod leo sodales sed. Donec
          iaculis condimentum dui vehicula finibus. Sed nec enim massa. Sed
          dignissim mollis orci. Nam fermentum scelerisque blandit. Morbi nulla
          tortor, tristique vehicula facilisis nec, lobortis et neque. Morbi
          odio nisi, lobortis in est id, consequat dapibus felis. Nam mollis ac
          nulla id euismod. Morbi pellentesque elit ac mi pulvinar, et commodo
          mi consectetur. Praesent auctor vulputate bibendum. Mauris auctor, est
          quis cursus auctor, eros felis luctus ligula, et auctor neque quam
          imperdiet turpis. Pellentesque ac suscipit tellus, id pharetra turpis.
        </p>
        <p className="mb-4 text-gray-300">
          Maecenas commodo facilisis odio sit amet pulvinar. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque
          ultricies vulputate. Suspendisse potenti. Praesent eget fermentum
          eros. Aenean facilisis rhoncus lacus. Curabitur in molestie enim. Sed
          in cursus mi. Donec tristique dictum commodo. Donec fringilla elit
          condimentum mi laoreet aliquet. Fusce ligula neque, sagittis vitae
          nulla nec, ultricies ullamcorper justo. Praesent volutpat, ante quis
          congue imperdiet, risus quam pellentesque metus, nec congue eros ipsum
          non sem.
        </p>
        <div className="flex justify-between text-sm text-gray-300 opacity-50 mt-8">
          <span>22/06/2023, 22:27:58</span>
          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            1280
          </span>
        </div>
      </main>
      <footer className="mt-auto max-w-3xl mx-auto">
        <div className="max-w-6xl mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-[#888888] text-sm italic">
              <p>&copy; 2024 Relate. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jonathanoliveirarocha/relate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/company/somerelate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
