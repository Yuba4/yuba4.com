import Link from "next/link";
import { Suspense } from "react";

type ArticleListProps = {
  articles: {
    id: string;
    title: string;
    published: boolean;
  }[];
};

export const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Suspense fallback={<div>Loading...</div>}>
            <Link href={`/blog/${article.id}`}>{article.title}</Link>
            <a>{article.id}</a>
          </Suspense>
        </li>
      ))}
    </ul>
  );
};
