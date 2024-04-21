import MarketingPage from "@/components/MarketingPage";
import { auth } from "@/utils/auth";
import Content from "@/components/content"; // Changed from lowercase to uppercase as component names should be capitalized

export default async function Home() {
  const session = await auth();

  return <div>{session ? <Content /> : <MarketingPage />}</div>; // Removed unnecessary parentheses around Content component
}
