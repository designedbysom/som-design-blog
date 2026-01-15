import { ReactNode } from "react";
import MainNav from "@/components/MainNav";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNav />
      <main>{children}</main>
      {/* Footer placeholder */}
    </div>
  );
}

export default Layout;

