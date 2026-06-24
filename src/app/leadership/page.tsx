import type { Metadata } from "next";
import LeadershipSection from "@/components/sections/LeadershipSection";

import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Leadership | ${SITE_NAME}`,
  description: `Meet the leadership team at ${SITE_NAME}.`,
};

export default function LeadershipPage() {
  return <LeadershipSection />;
}
