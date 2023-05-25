import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export  async function getPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId!,
  });

  return response.results.map((page) => {
    // FIXME PartialPageObjectResponseの型に判定されてしまうので型アサーションをしている
    const pageObject = page as PageObjectResponse;

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
