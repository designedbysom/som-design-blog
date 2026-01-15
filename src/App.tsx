import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Writing = lazy(() => import("./pages/Writing"));
const Article = lazy(() => import("./pages/Article"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-24">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:slug" element={<Article />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
