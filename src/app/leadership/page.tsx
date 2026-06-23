import type { Metadata } from "next";
import LeadershipSection from "@/components/sections/LeadershipSection";

export const metadata: Metadata = {
  title: "Leadership | Triad Tech Solutions",
  description: "Meet the leadership team at Triad Tech Solutions.",
};

export default function LeadershipPage() {
  return <LeadershipSection />;
}
