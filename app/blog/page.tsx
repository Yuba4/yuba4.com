// app/pages/index.js
import { use, useMemo } from "react";

import { getPosts } from "../api";
import { ArticleList } from "./components/ArticleList";

export default function Home() {
  // dataFetch
  const articles = use(getPosts());

  const publishedArticles = useMemo(() => {
    return articles.filter((article) => article.published);
  }, [articles]);

  return (
    <div>
      <h1>My Blog</h1>
      <ArticleList articles={publishedArticles} />
    </div>
  );
}
