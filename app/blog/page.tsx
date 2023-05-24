// app/pages/index.js
import { use } from "react";
import { Suspense } from "react";
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

async function getPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId!,
  });

  return response.results.map((page) => {
    const pageObject = page as PageObjectResponse;

    console.log(pageObject);

    return {
      id: pageObject.id,
      title:
        pageObject.properties.title.type === "title"
          ? pageObject.properties.title.title[0].plain_text
          : "",
      published:
        pageObject.properties.published.type === "checkbox" &&
        pageObject.properties.published.checkbox,
    };
  });
}

function ArticleList() {
  const articles = use(getPosts()); // 関数を実行してPromiseを渡す
  const publishedArticles = articles.filter((article) => article.published);
  return (
    <ul>
      {publishedArticles.map((article) => (
        <li key={article.id}>
          <a>{article.title}</a>
          <a>{article.id}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div>
      <h1>My Blog</h1>
      <ArticleList />
    </div>
  );
}