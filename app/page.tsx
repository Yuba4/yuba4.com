import Image from "next/image";

import dayjs from "dayjs";

import { getPosts } from "./libs/client";

import Link from "next/link";

export const revalidate = 3;

type BlogPost = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

export default async function Home() {
  const data = await getPosts();

  const formatDate = (dateString: string) => {
    return dayjs(dateString).format("YYYY-MM-DD");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col">
        {data.contents.map((blog: BlogPost) => (
          <div key={blog.id} className="mb-4 flex flex-col">
            <span className="text-gray-600 mb-1">
              {formatDate(blog.publishedAt)}
            </span>
            <Link
              className="text-2xl text-blue-500 hover:underline"
              href={`/blog/${blog.id}`}
            >
              {blog.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
