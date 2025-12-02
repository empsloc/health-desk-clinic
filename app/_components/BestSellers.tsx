import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Dent Pure",
    img: "/dent_pure.png",
  },
  {
    title: "True Fem",
    img: "/true_fem.png",
  },
  {
    title: "Vita Renew",
    img: "/vita_renew.png",
  },
  {
    title: "ProstaZen",
    img: "/prosta_zen.png",
  },
  {
    title: "Nerve Freedom",
    img: "/nerve_freedom.png",
  },
];

const features = ["Results-Driven", "All-Natural", "Non-GMO", "Cruelty-Free"];

export default function BestSellers() {
  return (
    <section className="w-full mt-20 ">
      {/* Heading */}
      <h2 className="text-3xl font-bold">Our Best Sellers</h2>
      <p className="text-gray-600 mt-2 max-w-2xl">
        Formulated with science-backed all-natural ingredients, our unique
        supplements support holistic health, healing & wellness.
      </p>

      {/* Feature Pills */}
     {/* Feature Row with Dividers */}
<div className="flex items-center gap-6 mt-6 text-xl font-bold  text-black">
  {features.map((feature, index) => (
    <div key={index} className="flex items-center">
      {index !== features.length&& (
        <span className="h-6 w-px bg-gray-700 mr-2"></span>
      )}
      <span>{feature}</span>
    </div>
  ))}
</div>


      {/* Products Row */}
     {/* Products Row */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
  {products.map((item, i) => (
    <div
      key={i}
      className="bg-[#F4F6FA] p-4 rounded-xl shadow  flex flex-col items-center"
    >
      {/* Product Image */}
      <div className="w-full h-40 flex items-center justify-center">
        <Image
          src={item.img}
          alt={item.title}
          width={160}
          height={160}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mt-4">{item.title}</h3>

      {/* Stars */}
      <div className="flex gap-1 text-yellow-500 text-sm mt-1">
        {"★★★★★"}
      </div>

      {/* Button */}
      <div
        className="px-6 mt-4 bg-transparent text-center text-blue-600 border border-blue-600  py-2 hover:bg-blue-50"
      >
        Shop Now
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
