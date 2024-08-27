import blogs from "@/app/data/blogs";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  console.log(query, "query");
  if (query) {
    const filteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query)
    );
    return Response.json(filteredBlogs);
  }
  return Response.json(blogs);
}

export async function POST(request: NextRequest) {
  const blog = await request.json();
  const newBlog: { id: number; title: string; description: string } = {
    id: blogs.length + 1,
    title: blog.title,
    description: blog.description,
  };
  blogs.push(newBlog);

  return new Response(JSON.stringify(newBlog), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
