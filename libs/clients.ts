import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? "",
  apiKey: process.env.API_KEY ?? "",
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blog",
    queries,
  });

  return listData;
};

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId,
    queries,
  });

  return detailData;
};
