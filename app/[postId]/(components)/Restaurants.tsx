import { ScrollArea } from "@/components/ui/scroll-area";

export default function Restaurants() {
  return (
    <ScrollArea className=" h-[400px] lg:w-[48%] w-screen flex items-center rounded-sm border p-4">
      <h1 className="text-center text-xl font-semibold text-orange-500">
        Restaurants
      </h1>
    </ScrollArea>
  );
}
