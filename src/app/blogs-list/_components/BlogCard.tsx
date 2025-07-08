import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <Link href={`/blogs/${blog.objectId}`}>
        <Card className="bg-zinc-900 border border-red-700 shadow-md hover:shadow-red-600 transition-all duration-300 rounded-xl overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative w-full h-[200px]">
              <Image
                src={blog.thumbnail}
                alt="thumbnail"
                className="object-cover"
                fill
              />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <h2 className="font-bold text-xl text-red-400 mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-300 line-clamp-3">{blog.description}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
