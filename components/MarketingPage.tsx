import Image from "next/image";
import image2 from "@/public/taj_mahal2.svg";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Link from "next/link";
import { Button } from "./ui/button";

export default function MarketingPage() {
  return (
    <div className="flex flex-col">
      {/* the badge */}
      <div className="flex items-center justify-center mt-5">
        <div className="p-4 bg-yellow-300 dark:text-black font-semibold text-md flex items-center gap-3 rounded-full">
          The best trip manager
          <WorkspacePremiumIcon />
        </div>
      </div>

      <div className="lg:p-7 p-5 flex md:flex-row flex-col">
        {/* the text */}
        <div className="md:w-[50%] text-center flex flex-col p-2 md:mt-[60px] lg:ml-10 mt-10">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            Navigate Life's Adventures Seamlessly with
          </h1>

          <div className="flex text-center justify-center mt-5">
            <h1 className="px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-red-500 text-2xl md:text-3xl xl:text-4xl font-bold text-white">
              Tripper!
            </h1>
          </div>
          <p className="text-md md:text-xl p-6 font-semibold text-center mt-5">
            Tripper is your ultimate travel companion, simplifying trip
            management so you can focus on creating unforgettable memories.
          </p>

          <Link href="/signUp" className="flex items-center justify-center">
            <Button variant="default" className="text-xl font-semibold">
              Explore
            </Button>
          </Link>
        </div>

        {/* The image */}
        <div className="md:w-[50%] h-[500px] relative items-center justify-center">
          <Image src={image2} alt="" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
