import Link from "next/link";
import { RestaurantCardType } from "../../page";
import Price from "../../components/Price";
import { calculateReviewsRatingAverage } from "../../../utils/calculateReviewsRatingAverage";
import Stars from "../../restaurant/[slug]/components/Stars";

export default function RestaurantCard({
  props,
}: {
  props: RestaurantCardType;
}) {
  const renderRatingText = () => {
    const rating = calculateReviewsRatingAverage(props.reviews);

    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else return "";
  };

  return (
    <div className="border-b flex pb-5 ml-4">
      <img src={props.main_image} alt="" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{props.name}</h2>
        <div className="flex items-start">
          <Stars reviews={props.reviews} />
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={props.price} />
            <p className="mr-4 capitalize">{props.cuisine.name}</p>
            <p className="mr-4 capitalize">{props.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${props.slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
}
