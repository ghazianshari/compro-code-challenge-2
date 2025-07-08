import { FC } from "react";
import { getBlog } from "../_api/get-blog";
import Markdown from "@/components/Markdown";

interface BlogBodyProps {
  objectId: string;
}

const BlogBody: FC<BlogBodyProps> = async ({ objectId }) => {
  const blog = await getBlog(objectId);

  return (
    <section className="text-justify flex flex-col w-[60%] prose prose-invert prose-red max-w-none mt-8 leading-relaxed">
      <Markdown content={blog.content} />
    </section>
  );
};

export default BlogBody;
