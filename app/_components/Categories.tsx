import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Weight Loss",
    desc: "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you.",
    icon: "/weight_loss.png",
  },
  {
    title: "Nerve Pain",
    desc: "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function.",
    icon: "/nerve_pain.png",
  },
  {
    title: "Skin Care",
    desc: "Explore premium skincare products that nourish, protect, and enhance your natural glow.",
    icon: "/skin_care.png",
  },
  {
    title: "Men's Health",
    desc: "Discover men's health products designed to boost energy, strength, and overall well-being.",
    icon: "/mens_health.png",
  },
  {
    title: "Women's Health",
    desc: "Explore women’s health products that support hormonal balance, vitality, and overall wellness",
    icon: "/womens_health.png",
  },
  {
    title: "Dental",
    desc: "Shop dental care products that keep your smile bright, healthy, and confident",
    icon: "/dental.png",
  },
  {
    title: "Memory",
    desc: "Discover memory support products that help enhance focus, clarity, and cognitive performance",
    icon: "/memory.png",
  },
];

export default function Categories() {
  return (
    <section className="w-full mt-16  bg--400">
      <h2 className="text-3xl font-bold text-center">
        Nutrition Solutions <br />
        <span className="text-gray-700">for Your Complete Well-Being</span>
      </h2>

      {/* Scrollable row */}
      <div className="mt-10 flex gap-6 overflow-x-auto pb-4 scrollbar-hide ">
        {categories.map((item, index) => (
          <div
            key={index}
            className="
              min-w-[250px]
              bg-[#EDF9F6]
 
              rounded-2xl 
              p-6
              shadow-sm
              
              flex flex-col
              justify-between
            "
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#855FCE]/10 rounded-full mb-4 shadow">
              <Image src={item.icon} alt={item.title} width={30} height={30} />
            </div>

            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

            <Button
              className="
    w-full mt-6 
    text-white 
    rounded-full 
    py-5 
    text-sm 
  "
              style={{
                background:
                  "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",
              }}
            >
              Buy now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
