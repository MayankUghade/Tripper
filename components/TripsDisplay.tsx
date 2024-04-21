"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import travel from "@/public/travel.svg";

export default function TripsDisplay() {
  const { data } = useSession();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex text-center justify-center opacity-70 mt-5">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Welcome to Tripper{" "}
          <span className="font-bold">{data?.user?.name}</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-semibold opacity-70">
          No Trips Created Yet!
        </h1>
        <Image className="w-[830px]" src={travel} alt="" />
      </div>
    </div>
  );
}
