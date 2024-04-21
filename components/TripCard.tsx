import { PlaneLanding, PlaneTakeoffIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface tripDetails {
  tripName: string;
  startDestination: string;
  endDestination: string;
  startDate: string;
  endDate: string;
}

function formatDate(timestamp: any) {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
export default function TripCard({
  tripName,
  startDestination,
  endDestination,
  startDate,
  endDate,
}: tripDetails) {
  return (
    <div className="flex flex-col gap-3 sm:w-[320px] border-[1px] border-gray-500 relative rounded-lg p-5">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl mr-auto font-semibold">{tripName}</h1>
        <h1 className="text-sm text-green-400 mr-auto mt-1">upcomming</h1>

        <div className="sm:w-[300px] w-[260px] h-[300px] relative items-center justify-center">
          <Image
            src="/beach.svg"
            alt="travel"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex items-center justify-between w-[270px]">
          <div>
            <h1 className="text-red-400"> From:</h1>
            <h1 className="text-xl font-semibold">{startDestination}</h1>
          </div>

          <PlaneTakeoffIcon className="w-[30px] h-[30px] text-yellow-500" />

          <div>
            <h1 className="text-red-400">To:</h1>
            <h1 className="text-xl font-semibold">{endDestination}</h1>
          </div>
        </div>

        <div className="flex items-center justify-between w-[270px] mt-2">
          <h1 className="text-lg text-gray-400">{formatDate(startDate)}</h1>
          <h1 className="text-lg text-gray-400">{formatDate(endDate)}</h1>
        </div>

        <Button variant="default" className="mt-5 ml-auto">
          More details
        </Button>
      </div>
    </div>
  );
}
