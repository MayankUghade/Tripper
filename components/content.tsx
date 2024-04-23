import Link from "next/link";
import { Button } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import TripCard from "./TripCard";
import { fetchtripDetails } from "@/app/data/actions";
import { auth } from "@/utils/auth";

export default async function Content() {
  const session = await auth();

  const tripData = await fetchtripDetails();

  return (
    <div className="flex flex-col gap-5 container py-7">
      <div className="flex items-center justify-between">
        <h1 className="md:text-xl text-lg font-semibold">Your trips</h1>

        <Link href="/create-trip">
          <Button
            className="font-semibold flex items-center gap-1"
            variant="outline"
          >
            <PlusCircleIcon />
            Create A trip
          </Button>
        </Link>
      </div>

      <div className="flex gap-2 items-center flex-wrap justify-center sm:justify-normal text-xs">
        <Link href="/create-trip">
          {" "}
          <Button
            className="font-semibold flex items-center gap-1"
            variant="default"
          >
            All Trips
          </Button>
        </Link>

        <Link href="/create-trip">
          {" "}
          <Button
            className="font-semibold flex items-center gap-1"
            variant="default"
          >
            Upcomming Trips
          </Button>
        </Link>
        <Link href="/create-trip">
          {" "}
          <Button
            className="font-semibold flex items-center gap-1"
            variant="default"
          >
            Completed Trips
          </Button>
        </Link>
      </div>

      {tripData && tripData.length > 0 ? (
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {tripData.map((trip) => (
            <TripCard
              key={trip.id}
              tripId={trip.id}
              tripName={trip.tripName}
              startDestination={trip.startDestination}
              endDestination={trip.endDestination}
              startDate={trip.startDate.toISOString()}
              endDate={trip.endDate.toISOString()}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-5">
          <h1 className="text-center md:text-3xl text-lg font-semibold">
            Welcome to tripper @{session?.user?.name}
          </h1>
          <h1 className="text-gray-500">No trips created yet</h1>

          <Image
            src="travel.svg"
            alt="something-something"
            width="900"
            height="800"
          />
        </div>
      )}
    </div>
  );
}
