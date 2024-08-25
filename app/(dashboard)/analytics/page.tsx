import Button from "@/app/components/Button";
import SortProducts from "@/app/components/SortProducts";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Analytics Page",
  description: "This is analytics page",
};

export default function Analytics() {
  // throw new Error("An error occurred in analytics page...");
  return (
    <div className=" ml-5">
      <h1 className=" text-2xl text-center text-cyan-700">Analytics Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        explicabo doloremque vitae totam atque fuga. Adipisci quo reprehenderit
        numquam minus commodi, cum maiores nemo, mollitia vel dolorem incidunt
        ex enim! Delectus expedita necessitatibus, ratione corporis error ea,
        sapiente cum odio enim iste autem dignissimos accusamus provident unde
        tenetur quis quisquam eveniet natus deserunt debitis? Aut commodi nobis
        officiis! Sequi, vero! Soluta facilis quidem quia, sequi distinctio et
        voluptatibus animi aspernatur minus nulla voluptate reprehenderit
        ducimus ipsum quibusdam quam placeat. Animi minima, veniam nihil fuga
        nemo natus corporis ex, nesciunt quaerat obcaecati sit dolore
        consectetur eligendi deleniti dolor laboriosam voluptate earum, nulla
        accusamus beatae.
      </p>
      <Button>Go to Settings Page</Button>
      <br />
      <br />
      <Suspense>
        <SortProducts />
      </Suspense>
    </div>
  );
}
