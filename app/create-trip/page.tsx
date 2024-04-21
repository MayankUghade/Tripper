import Image from "next/image";
import TripForm from "./trip-form";

export default function page() {
  return (
    <div className="p-5 lg:flex gap-6 container h-screen items-center justify-center">
      <div className="lg:w-[50%]">
        <h1 className="text-3xl mb-5 py-5 font-bold">Create a new trip</h1>
        <TripForm />
      </div>

      <div className="lg:w-[40%] lg:flex hidden h-[700px] relative ">
        <Image src="/liberty.svg" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
