import { Link, useLocation } from "react-router-dom";
import { strings } from "@/data/strings";

function Nav() {
  const location = useLocation();
  const { titlePrefix, navItems } = strings;

  return (
    <nav className="text-sm sm:text-base font-medium font-mono tracking-tight text-foreground">
      <Link to="/" className="opacity-100 hidden sm:inline">{titlePrefix}</Link>
      <span className="opacity-30">[ </span>
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path || 
          (item.path === "/" && location.pathname === "/home");
        return (
          <span key={item.path}>
            <Link
              to={item.path}
              className={`cursor-pointer transition-all duration-150 active:scale-95 inline-block ${
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
    </nav>
  );
}

export default Nav;
