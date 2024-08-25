"use client";

import { useRouter } from "next/navigation";

export default function Button({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/settings");
  };
  return (
    <button
      onClick={handleClick}
      className=" bg-blue-500 py-2 px-3 rounded text-white mt-3"
    >
      {children}
    </button>
  );
}
