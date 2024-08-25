"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({
  path,
  children,
  prefetch = true,
}: {
  path: string;
  children: React.ReactNode;
  prefetch?: boolean;
}) {
  const pathName = usePathname();
  const active = pathName === path;
  console.log(pathName, "pathName");
  return (
    <Link
      prefetch={prefetch}
      className={active ? "text-blue-500" : ""}
      href={path}
    >
      {children}
    </Link>
  );
}
