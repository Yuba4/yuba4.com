import { createClient, MicroCMSQueries } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

export async function getPosts(queries?: MicroCMSQueries) {
  const articles = await client.get({ endpoint: "blog", queries });

  return articles;
}

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const article = await client.getListDetail({
    endpoint: "blog",
    contentId,
    queries,
  });

  return article;
};
