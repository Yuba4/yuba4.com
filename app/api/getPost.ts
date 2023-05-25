import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export const getPost = async (pageId: string) => {
  const res = await notion.blocks.children.list({
    block_id: pageId,
  });

  const blocks = res.results as BlockObjectResponse[];

  type ImageType = {
    type: "file";
    file: {
      url: string;
      expiry_time: string;
    };
    caption: Array<RichTextItemResponse>;
  };

  const markdown = blocks
    .map((block: BlockObjectResponse) => {
      if (block.type === "paragraph" && block.paragraph.rich_text) {
        return block.paragraph.rich_text
          .map((text: any) => text.plain_text)
          .join("");
      } else if (block.type === "heading_1") {
      } else if (block.type === "heading_2") {
        return `## ${block.heading_2.rich_text[0].plain_text}`;
      } else if (block.type === "heading_3") {
        return `### ${block.heading_3.rich_text[0].plain_text}`;
      } else if (block.type === "bulleted_list_item") {
        return `- ${block.bulleted_list_item.rich_text[0].plain_text}`;
      } else if (block.type === "numbered_list_item") {
        return `${block.numbered_list_item.rich_text[0].plain_text}. ${block.numbered_list_item.rich_text[0].plain_text}.`;
      } else if (block.type === "quote") {
        return `> ${block.quote.rich_text[0].plain_text}`;
      } else if (block.type === "code") {
        return `\`\`\`${block.code.language}\n${block.code.rich_text[0].plain_text}\n\`\`\``;
      } else if (block.type === "embed") {
        return block.embed.url;
      } else if (block.type === "image") {
        const blockImage = block.image as ImageType;
        return `![${blockImage.caption}](${blockImage.file.url})`;
      }
    })
    .join("\n\n");
  return markdown;
};
