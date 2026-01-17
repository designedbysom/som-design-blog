import { strings } from "@/data/strings";
// import heroImage from "@/images/hero-wide-me.jpg";

function Home() {
  const { title, intro } = strings.home;

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
      
      {/* Other content below hero can go here with different layouts */}
    </div>
  );
}

export default Home;
