import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-2xl font-bold">404 Not Found!</h2>
        <p>Could not find requested resource</p>
      </div>

      <Button variant="default" className="cursor-pointer rounded-xl" asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
};