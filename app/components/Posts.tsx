const fetchPost = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
  return "Here is my posts";
};

export default async function Posts() {
  const posts = await fetchPost();
  return <h1>{posts}</h1>;
}
