import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hogwash Exterior Cleaning | Pressure Washing & House Washing",
  description:
    "Professional pressure washing for driveways, siding, decks, fences, trailers, and more. Owner-operated, free quotes, and results you can see from the street. Call or text 562-324-6588.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
