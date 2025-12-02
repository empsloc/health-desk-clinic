import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import BestSellers from "./_components/BestSellers";
import TrustSection from "./_components/TrustSection";
import SmartHealthSection from "./_components/SmartHealthSection";
import CharitableInitiatives from "./_components/CharitableSection";
import Testimonials from "./_components/Testimonials";
import FollowUs from "./_components/FollowUs";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Categories/>
     <BestSellers/>
     <TrustSection/>
     <SmartHealthSection/>
    <div className="relative left-[50%] right-[50%] 
    ml-[-50vw] mr-[-50vw] w-screen">
    <CharitableInitiatives />
  </div>
    <Testimonials/>
    <FollowUs/>
    </div>
  );
}
