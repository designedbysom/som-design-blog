import { Link, useLocation } from "react-router-dom";
import { strings } from "@/data/strings";

function TitleNav() {
  const location = useLocation();
  const { titlePrefix, navItems } = strings;

  return (
    <h1 className="font-mono text-xl md:text-2xl font-medium tracking-tight text-foreground">
      <span className="opacity-30">{titlePrefix}</span>
      <span className="opacity-30">[ </span>
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        return (
          <span key={item.path}>
            <Link
              to={item.path}
              className={`transition-all duration-150 active:scale-95 inline-block ${
                isActive
                  ? "opacity-100"
                  : "opacity-30 hover:opacity-100"
              }`}
            >
              {item.label}
            </Link>
            {index < navItems.length - 1 && (
              <span className="opacity-30"> | </span>
            )}
          </span>
        );
      })}
      <span className="opacity-30"> ]</span>
    </h1>
  );
}

export default TitleNav;

