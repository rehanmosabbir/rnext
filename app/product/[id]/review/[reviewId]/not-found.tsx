"use client";

import { usePathname } from "next/navigation";

export default function ProductReviewNotFound() {
  const pathName = usePathname();
  return (
    <div>
      <p className=" text-2xl text-red-600">Product Review Not Found</p>
      <p>The product review {pathName} you are requesting is not found.</p>
    </div>
  );
}
