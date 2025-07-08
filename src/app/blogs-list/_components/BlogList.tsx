"use client";

import useGetBlogs from "../_hooks/useGetBlogs";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

const BlogList = () => {
  const { data: blogs, isPending } = useGetBlogs();

  return (
    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 py-16">
      {isPending && <BlogCardSkeleton count={3} />}
      {blogs?.map((blog) => (
        <BlogCard key={blog.objectId} blog={blog} />
      ))}
    </section>
  );
};

export default BlogList;
