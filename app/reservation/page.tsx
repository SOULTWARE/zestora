import type { Metadata } from "next";
import ReservationPageClient from "./ReservationPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Restaurant Reservation Demo",
  description:
    "Test a premium reservation experience inside Zestora, a portfolio demo built by SOULTWARE LLC to showcase responsive forms and hospitality web UX.",
  path: "/reservation",
  keywords: ["reservation form demo", "restaurant booking UI", "SOULTWARE web forms"],
});

export default function ReservationPage() {
  return <ReservationPageClient />;
}
