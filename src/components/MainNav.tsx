import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <div className="flex items-center justify-between">
          <Link to="/" className="font-mono text-sm text-neutral-500">
            ~ som.design
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default MainNav;

