import Link from "next/link";
import blogs from "../data/blog";

export default function Blogs() {
  return (
    <div className=" mt-4">
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          href={`/blogs/${blog.id}`}
          className=" text-blue-600 inline-block ml-4"
        >
          {blog.title}
        </Link>
      ))}
    </div>
  );
}
