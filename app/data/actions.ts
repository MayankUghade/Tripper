import { auth } from "@/utils/auth";
import prisma from "@/utils/db";

export async function fetchtripDetails() {
  const session = await auth();
  const userEmail = session?.user?.email;

  const response = await prisma.trip.findMany({
    where: {
      userEmail: userEmail as string,
    },
  });
  return response;
}
