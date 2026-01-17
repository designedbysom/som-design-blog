import { useState, useEffect } from "react";
import Nav from "@/components/Nav";

function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-neutral-900 transition-colors ${
        isScrolled ? "glass-nav" : "bg-background"
      }`}
    >
      <div className="max-w-[800px] mx-auto px-6 py-4">
        <Nav />
      </div>
    </header>
  );
}

export default MainNav;

