import prisma from "@/utils/db";

export async function currentTrip(tripId: string) {
  const response = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });
  return response;
}
