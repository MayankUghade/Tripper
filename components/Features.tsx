import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Link from "next/link";

export default function Features() {
  return (
    <div className="p-3 flex justify-between flex-col md:flex-row mt-3">
      {/* button to switchBetween the trips */}
      <div className="flex itemx-center gap-3">
        <Link
          href="/main"
          className="px-4 py-3 text-sm md:text-md rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-600"
        >
          UpComing Trips
        </Link>
        <Link
          href="/main"
          className="px-4 py-3 text-sm md:text-md rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-600"
        >
          Completed Trips
        </Link>
      </div>

      {/* Create new Trip */}
      <Link
        href="/main/newTrip"
        className="flex gap-2 mt-6 md:mt-0 cursor:pointer items-center"
      >
        <div
          className="border-2 border-black rounded-full flex items-center justify-center
        "
        >
          <AddOutlinedIcon className=" w-[25px] h-[25px]" />
        </div>

        <div className="flex items-center text-md md:text-xl font-semibold ">
          <h1>Add New Trip</h1>
        </div>
      </Link>
    </div>
  );
}
