import { FC } from "react";
import { getBlog } from "../_api/get-blog";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Image from "next/image";

interface BlogHeaderProps {
  objectId: string;
}

const BlogHeader: FC<BlogHeaderProps> = async ({ objectId }) => {
  const blog = await getBlog(objectId);

  return (
    <section className="space-y-6 mb-12">
      <Badge className="bg-red-600 text-white uppercase tracking-wide px-4 py-1 text-xs rounded-full">
        {blog.category}
      </Badge>

      <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 drop-shadow-lg">
        {blog.title}
      </h1>

      <p className="text-sm text-gray-400 font-light">
        Published on {format(new Date(blog.created), "dd MMM yyyy")}
      </p>

      <div className="relative w-full h-[360px] rounded-xl overflow-hidden border border-red-700 shadow-md shadow-red-900/30">
        <Image
          src={blog.thumbnail}
          alt="thumbnail"
          className="object-cover"
          fill
        />
      </div>
    </section>
  );
};

export default BlogHeader;
