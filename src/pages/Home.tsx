import { strings } from "@/data/strings";

function Home() {
  const { title, intro } = strings.home;

  return (
    <div className="max-w-[800px] mx-auto px-6 py-12 sm:py-16">
      <h1 className="font-mono text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
        {title}
      </h1>
      {intro.map((paragraph, i) => (
        <p
          key={i}
          className={`text-base leading-relaxed text-foreground/90 max-w-[720px] mb-4 last:mb-0 ${
            paragraph.bold ? "font-semibold" : ""
          }`}
        >
          {paragraph.text}
        </p>
      ))}
      <div className="mt-10 bg-white p-3 pb-12 border border-gray-200 inline-block rounded-sm">
        <img
          src="/images/hero-me.png"
          alt="Som speaking at a conference"
          className="w-64 h-80 object-cover object-center rounded-none"
        />
      </div>
    </div>
  );
}

export default Home;
