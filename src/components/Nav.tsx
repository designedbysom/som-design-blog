import { Link, useLocation } from "react-router-dom";
import { strings } from "@/data/strings";

function Nav() {
  const location = useLocation();
  const { navItems } = strings;

  return (
    <nav className="flex justify-end gap-4">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || 
          (item.path === "/" && location.pathname === "/home");
        const label = `/${item.label}`;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`font-mono text-sm font-medium px-3 py-1.5 rounded-md transition-colors border ${
              isActive
                ? "border-neutral-900 text-white"
                : "border-transparent text-neutral-500 hover:border-neutral-900"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
