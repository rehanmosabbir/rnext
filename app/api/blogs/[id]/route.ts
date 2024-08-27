import blogs from "@/app/data/blogs";
import { redirect } from "next/navigation";

export async function GET(_request: any, context: any) {
  const { params } = context;
  const blogId = params.id;
  const newBlog = blogs.find((blog) => +blog.id === +blogId);
  if (!newBlog) redirect("/api/blogs");
  return Response.json(newBlog);
}

export async function PATCH(request: any, context: any) {
  const blog = await request.json();
  const { params } = context;
  const blogId = params.id;
  const newBlogIndex = blogs.findIndex((blog) => +blog.id === +blogId);
  blogs[newBlogIndex].description = blog.description;
  blogs[newBlogIndex].title = blog.title;
  return Response.json(blogs[newBlogIndex]);
}

export async function DELETE(_request: any, context: any) {
  const { params } = context;
  const blogId = params.id;
  const newBlogIndex = blogs.findIndex((blog) => +blog.id === +blogId);
  const blogToDelete = blogs[newBlogIndex];
  return Response.json(blogToDelete);
}
