"use client";

import { usePathname } from "next/navigation";

export default function DashboardNotFound() {
  const pathName = usePathname();
  return (
    <div>
      <h1 className=" text-2xl text-red-600">Page Not Found</h1>
      <p>The page {pathName} you are requesting is not found</p>
    </div>
  );
}
