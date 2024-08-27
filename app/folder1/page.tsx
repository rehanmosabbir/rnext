import Link from "next/link";

export default function Folder1() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className=" text-2xl">Folder 1</h1>
      <Link href={`/folder1/folder2`} className=" text-blue-400">
        folder 2
      </Link>
    </div>
  );
}
