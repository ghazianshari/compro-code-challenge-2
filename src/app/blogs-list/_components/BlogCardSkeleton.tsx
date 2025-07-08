import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

interface BlogCardSkeletonProps {
  count: number;
}

const BlogCardSkeleton: FC<BlogCardSkeletonProps> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 p-4 shadow-md"
        >
          <Skeleton className="w-full h-[200px] bg-zinc-800" />
          <div className="space-y-2 mt-4">
            <Skeleton className="h-6 w-3/4 bg-zinc-800" />
            <Skeleton className="h-4 w-full bg-zinc-800" />
            <Skeleton className="h-4 w-5/6 bg-zinc-800" />
            <Skeleton className="h-4 w-2/3 bg-zinc-800" />
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCardSkeleton;
