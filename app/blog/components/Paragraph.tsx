"use client";
import ReactMarkdown from "react-markdown";

type ParagraphProps = {
  markdown: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ markdown }) => {
  return (
    <>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
};
