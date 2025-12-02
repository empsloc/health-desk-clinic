"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b shadow-sm bg-white">
      <div className="mt-4 w-full mx-auto 
                        px-4        /* mobile */
                        sm:px-6     /* small screens */
                        md:px-10    /* tablets */
                        lg:px-16    /* laptops */
                        xl:px-24    /* desktops */
                        2xl:px-32   /* very large screens */ 
                         h-20 flex items-center justify-between">

        {/* Left Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/hdc_logo.png"           // replace with your actual logo
            alt="Health Desk Logo"
            width={100}
            height={78}
            className="object-contain"
          />
        </Link>

        {/* Center Navigation Links */}
        <div className="flex items-center gap-8">
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-800">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Right Icon (Cart / Profile — based on screenshot) */}
        <button className="p-2  rounded-md hover:bg-gray-100 transition">
          <Image 
            src="/bag.png"     // replace with your right-side icon
            alt="Icon"
            width={22}
            height={22}
          />
        </button>
        </div>
      </div>
    </header>
  );
}
