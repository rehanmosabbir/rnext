import { Suspense } from "react";
import Posts from "../components/Posts";

export default function Heavy() {
  // throw new Error("A error occurred in heavy page...");
  return (
    <div>
      <p>Heavy Request</p>
      <Suspense fallback={<h1>Loading Posts ... </h1>}>
        <Posts />
      </Suspense>
    </div>
  );
}
