import wait from "@/app/lib/wait";

export default async function Quiz() {
  const time = await wait(3000);
  return (
    <div className=" border border-1 p-4 h-[250px] flex items-center justify-center">
      <p className=" text-center">Quiz</p>
    </div>
  );
}
