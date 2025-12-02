import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/custom/Navbar";
import Footer from "@/components/ui/custom/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Health Desk Clinic",
  description: "Developed by Atharva Bokade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GLOBAL PAGE CONTAINER */}
        <div className="">

          <Navbar />

          {/* CONTENT AREA ALSO FOLLOWS SAME SPACING */}
          <main className="mt-4 w-full mx-auto 
                        px-4        /* mobile */
                        sm:px-6     /* small screens */
                        md:px-10    /* tablets */
                        lg:px-16    /* laptops */
                        xl:px-24    /* desktops */
                        2xl:px-32   /* very large screens */">
            {children}
          </main>
          <Footer/>

        </div>
      </body>
    </html>
  );
}

