import { use } from "react";

import ReactMarkdown from "react-markdown";
import { getPost } from "../../api/getPost";

export default function BlogPost({ params }: { params: { id: string } }) {
  const markdown = use(getPost(params.id));

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}
