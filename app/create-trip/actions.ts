"use server";
import { auth } from "@/utils/auth";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

export async function createTripAction(tripData: any) {
  const session = await auth();

  const userEmail = session?.user?.email;

  const response = await prisma.trip.create({
    data: { userEmail: userEmail, ...tripData },
  });

  revalidatePath("/");
}
