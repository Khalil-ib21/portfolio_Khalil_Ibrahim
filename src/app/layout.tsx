import type { Metadata } from "next";
import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusic";
import { Analytics } from "@vercel/analytics/next";
 
export const metadata: Metadata = {
  title: "Khalil Ibrahim",
  description: "Personal portfolio of Khalil Ibrahim — Civil Engineer & Project Manager",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0d0d0d] text-white relative">
        <div className="absolute top-6 left-6 z-50">
          <BackgroundMusic />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}