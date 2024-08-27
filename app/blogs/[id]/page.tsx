import blogs from "@/app/data/blogs";

export const generateStaticParams = () => {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
};

export default function SingleBlog({ params }: { params: { id: string } }) {
  const { id } = params;

  const blog = blogs.find((blog) => blog.id.toString() === id);

  return (
    <div>
      <h1>{blog?.title}</h1>
      <p>{blog?.description}</p>
    </div>
  );
}
