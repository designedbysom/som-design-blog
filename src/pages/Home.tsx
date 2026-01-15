import { strings } from "@/data/strings";

function Home() {
  const { title, intro } = strings.home;

  return (
    <div className="max-w-[800px] mx-auto px-6 py-12 sm:py-16">
      <h1 className="font-mono text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
        {title}
      </h1>
      <p className="text-base leading-relaxed text-foreground/90 max-w-[720px]">
        {intro}
      </p>
    </div>
  );
}

export default Home;
