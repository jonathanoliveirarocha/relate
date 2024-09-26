import { ArrowBigLeft, Eye } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ArticleHeader = ({ title }) => (
  <h2 className="text-4xl font-bold mb-4 text-left">{title}</h2>
);

const ArticleSection = ({ children, className }) => (
  <p className={`mb-4 text-primary ${className}`}>{children}</p>
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
  const articleTitle = "Título";
  const articleDate = "22/06/2023, 22:27:58";
  const articleViews = 1280;

  return (
    <>
      <Header />
      <BackButton />
      <div className="min-h-screen bg-black text-white max-w-3xl mx-auto px-4">
        <main className="py-8 text-justify">
          <ArticleHeader title={articleTitle} />
          <ArticleSection>
            Vivamus rutrum, ipsum in mattis rhoncus, arcu nibh faucibus enim,
            vehicula venenatis ipsum leo non nisi. Donec at risus et magna
            fermentum dapibus ut vitae nunc. Suspendisse eget vestibulum nulla.
            Aliquam vitae convallis nisi. Curabitur ut convallis neque,
            convallis ultricies est. Nunc posuere quis felis a faucibus. Integer
            eu libero at turpis aliquet hendrerit non at urna. Proin consectetur
            mollis varius. Sed tempus, lectus ut lobortis tristique, dui quam
            lacinia magna, vel sodales urna lectus placerat nisi.
          </ArticleSection>
          <h3 className="text-2xl font-semibold mt-8 mb-2">Subtítulo</h3>
          <ArticleSection>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est
            felis, elementum id tincidunt ac, viverra eget tortor. Vivamus
            cursus ante id nisi pharetra, eu facilisis orci vestibulum. Vivamus
            dui elit, interdum molestie lectus vel, pulvinar congue quam. Donec
            non mi urna. Donec ac ornare tortor, ac mattis felis. Nullam auctor
            vehicula aliquam. Aliquam et ante in felis bibendum tempor.
            Curabitur nec tellus facilisis, faucibus magna vel, maximus lorem.
            Aenean tincidunt, diam ut imperdiet pharetra, sapien velit volutpat
            elit, vel commodo massa enim in ante. Suspendisse magna sodales ut
            orci id, consequat scelerisque tellus. Donec ac dolor lacinia dui
            interdum feugiat sed ut mauris. Donec iaculis, nulla a efficitur
            commodo, elit ipsum vehicula nisi, at gravida odio tellus lacinia
            quam.
          </ArticleSection>
          <ArticleSection>
            Fusce venenatis ex quis euismod lobortis. Sed a neque nec quam
            pharetra eleifend id at erat. Integer sed enim vel nisi mattis
            viverra. Curabitur vitae augue dictum, consequat quam eleifend,
            mollis ex. Integer interdum nunc arcu, quis euismod leo sodales sed.
            Donec iaculis condimentum dui vehicula finibus. Sed nec enim massa.
            Sed dignissim mollis orci. Nam fermentum scelerisque blandit. Morbi
            nulla tortor, tristique vehicula facilisis nec, lobortis et neque.
            Morbi odio nisi, lobortis in est id, consequat dapibus felis. Nam
            mollis ac nulla id euismod. Morbi pellentesque elit ac mi pulvinar,
            et commodo mi consectetur. Praesent auctor vulputate bibendum.
            Mauris auctor, est quis cursus auctor, eros felis luctus ligula, et
            auctor neque quam imperdiet turpis. Pellentesque ac suscipit tellus,
            id pharetra turpis.
          </ArticleSection>
          <ArticleSection>
            Maecenas commodo facilisis odio sit amet pulvinar. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque
            ultricies vulputate. Suspendisse potenti. Praesent eget fermentum
            eros. Aenean facilisis rhoncus lacus. Curabitur in molestie enim.
            Sed in cursus mi. Donec tristique dictum commodo. Donec fringilla
            elit condimentum mi laoreet aliquet. Fusce ligula neque, sagittis
            vitae nulla nec, ultricies ullamcorper justo. Praesent volutpat,
            ante quis congue imperdiet, risus quam pellentesque metus, nec
            congue eros ipsum non sem.
          </ArticleSection>
          <ArticleMetadata date={articleDate} views={articleViews} />
        </main>
        <Footer />
      </div>
    </>
  );
}
