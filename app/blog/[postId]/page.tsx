import { getDetail, getPosts } from "../../libs/client";
import { formatDate } from "../../libs/formatDate";
import parser from "html-react-parser";

export const revalidate = 3;

export async function generateStaticParams() {
  const { contents } = await getPosts();

  const paths = contents.map((post: { id: string }) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  return (
    <div>
      <h1 className="text-3xl pb-4">{post.title}</h1>
      <div className="text-gray-600 pb-4">{formatDate(post.publishedAt)}</div>
      <div className="">{parser(post.body)}</div>
    </div>
  );
}
