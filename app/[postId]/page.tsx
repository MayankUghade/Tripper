import { PlaneTakeoffIcon } from "lucide-react";
import { currentTrip } from "./actions";
import Image from "next/image";
import Hotels from "./(components)/Hotels";
import Travel from "./(components)/Travel";
import Itineries from "./(components)/Itineries";
import Restaurants from "./(components)/Restaurants";
import CartRental from "./(components)/CarRental";

export default async function page(props: { params: { postId: string } }) {
  const tripId = props.params.postId;

  const tripData = await currentTrip(tripId);

  function formatDate(timestamp: any) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <div className="flex flex-col lg:container p-5 gap-10">
      <div className="flex items-center justify-between">
        {/* The trip details */}
        <div className="flex flex-col gap-7">
          <h1 className="sm:text-5xl text-3xl">{tripData?.tripName}</h1>

          <div className="flex items-center justify-between sm:w-[500px] w-[300px]">
            <div>
              <h1 className="text-red-400 sm:text-xl"> From:</h1>
              <h1 className="sm:text-3xl text-lg">
                {tripData?.startDestination}
              </h1>
            </div>

            <PlaneTakeoffIcon className="sm:w-[50px] sm:h-[50px] text-yellow-500" />

            <div>
              <h1 className="text-red-400 sm:text-xl">To:</h1>
              <h1 className="sm:text-3xl text-lg">
                {tripData?.endDestination}
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-between sm:w-[500px] w-[300px]">
            <h1 className="sm:text-3xl text-md text-gray-400">
              {formatDate(tripData?.startDate)}
            </h1>
            <h1 className="sm:text-3xl text-md text-gray-400">
              {formatDate(tripData?.endDate)}
            </h1>
          </div>
        </div>

        {/* Image  */}
        <Image
          src="/display.svg"
          alt="travel"
          width="350"
          height="350"
          className="lg:flex hidden"
        />
      </div>

      <h1 className="text-xl">Add the more details about the trip</h1>

      <div className="flex flex-wrap items-center gap-5">
        <Travel />
        <Hotels />
        <Itineries />
        <Restaurants />
        <CartRental />
      </div>
    </div>
  );
}
