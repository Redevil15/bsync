import { Navbar } from "@/components/Navbar";
import { redirect } from "next/navigation";
import { auth } from "./lib/auth";

export default async function Home() {
  const session = await auth()

  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="max-w-7xl mx-auto">
     <Navbar/>
    </div>
  );
}
