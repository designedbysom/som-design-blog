import { strings } from "@/data/strings";
import { Link } from "react-router-dom";
// import heroImage from "@/images/hero-wide-me.jpg";

// Sample articles data - move this to a separate file or strings.ts later
const articles = [
  { slug: "sample-blog-post", title: "Building Design Systems That Scale Beyond Daily Use To Become Platforms", date: "2026-01-07" },
  { slug: "#", title: "The Art of Component Composition in Modern React Applications", date: "2026-01-05" },
  { slug: "#", title: "Understanding Design Tokens and Their Role in Scalable Systems", date: "2026-01-03" },
];

function Home() {
  const { title, intro, writing } = strings.home;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return (
    <div className="max-w-[800px] mx-auto px-6 py-12 sm:py-16">
      <section className="hero-section mb-12">
        <h1 className="font-mono text-2xl md:text-3xl font-semibold tracking-tight text-heading mb-6">
          {title}
        </h1>
        {intro.map((paragraph, i) => (
          <p
            key={i}
            className={`text-base leading-relaxed max-w-[720px] mb-4 last:mb-0 ${
              paragraph.bold ? "font-semibold text-heading" : "text-stone-200"
            }`}
          >
            {paragraph.text}
          </p>
        ))}
        {/* <div className="pixel-art-wrapper mt-8">
          <img
            src={heroImage}
            alt="Som"
            className="rounded block pixel-art"
          />
        </div> */}
      </section>
      
      <div className="border-b border-neutral-900 mb-12"></div>
      
      <section className="writingList">
        <h2 className="text-base text-xl font-semibold tracking-tight text-heading mb-6">{writing.title}</h2>
        <ul className="space-y-6">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link 
                to={article.slug === "#" ? "#" : `/writing/${article.slug}`}
                className="block"
              >
                <h4 className="text-base font-medium text-stone-200 hover:text-heading hover:underline mb-0.5">
                  {article.title}
                </h4>
                <time className="text-[12px] text-neutral-500 font-mono">
                  {formatDate(article.date)}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Other content below hero can go here with different layouts */}
    </div>
  );
}

export default Home;
