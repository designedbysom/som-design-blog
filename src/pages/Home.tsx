import { strings } from "@/data/strings";
import TitleNav from "@/components/TitleNav";

function Home() {
  const { intro } = strings.home;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-[800px] mx-auto px-6 py-16 sm:py-24">
        <TitleNav />
        <p className="mt-8 text-base leading-relaxed text-foreground/90 max-w-[720px]">
          {intro}
        </p>
      </div>
    </main>
  );
}

export default Home;
