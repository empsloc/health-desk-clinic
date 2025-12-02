import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        w-full 
        
        bg-[#0309320A]

        mt-10
        overflow-hidden
      "
    >
      <div
        className="
        bg--300
          mx-auto 
          grid
          md:grid-cols-2
          items-center
          gap-10
          px-4 
          sm:px-6 
          md:px-10 
          lg:px-16
          xl:px-24
          py-12
        "
      >
        {/* LEFT CONTENT */}
        <div className="  bg--300 h-full flex flex-col items-start justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Health Desk Clinic: <br />
            All Natural Supplements
          </h1>

          <p className="text-gray-600 max-w-md">
            Health Care Desk is the premier choice for those seeking wellness
            through wholesome, superfood-enriched formulas that actually work.
            Our all-natural, organic health supplements are designed to give
            your body what it needs to thrive and optimize your health each day!
          </p>

          <Button
            
            className="
             
              bg-[#1A69BE] text-white font-semibold
             px-10 py-6 rounded-full 
              shadow-sm 
              hover:bg-blue-700 transition
            "
          >
            Shop Now
          </Button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end bg--300">
          <Image
            src="/doctor2.png" // replace with your real image
            alt="Doctor"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
