import { notFound } from "next/navigation";

export default function ProductReview({ params }: { params: any }) {
  const { id, reviewId } = params;

  if (reviewId > 4) {
    notFound();
  }
  return (
    <div>
      <p>Product ID : {id}</p>
      <p>Review ID : {reviewId}</p>
    </div>
  );
}
