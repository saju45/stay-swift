import { getReviewForAHotel } from "@/database/queries";
import Link from "next/link";

const HotelReviewNumber = async ({ id }) => {
  const reviews = await getReviewForAHotel(id);

  return (
    <>
      {reviews?.length === 0 ? (
        <Link href="#" className="underline">
          Be the first one to review
        </Link>
      ) : (
        <Link href={`/hotel/${id}/reviews`} className="underline">
          {reviews.length} Reviews
        </Link>
      )}
    </>
  );
};

export default HotelReviewNumber;
