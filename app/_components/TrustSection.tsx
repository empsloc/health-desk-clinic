import Image from "next/image";

const trustFeatures = [
  {
    title: "All Natural",
    icon: "/all_natural.png",
  },
  {
    title: "Cruelty-Free",
    icon: "/cruelty_free.png",
  },
  {
    title: "Money-back Guarantee",
    icon: "/money_back.png",
  },
  {
    title: "Giving back",
    icon: "/giving_back.png",
  },
  {
    title: "Non-GMO",
    icon: "/non_gmo.png",
  },
];

export default function TrustSection() {
  return (
    <section className="w-full mt-20">
      <div
        className="
           border-blue-600 
          
          p-10 
          bg-[url('/trust_bg.png')] 
          bg-cover bg-center
        "
      >
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          A Brand That You Can Trust
        </h2>

        <p className="text-gray-700 text-center mt-2">
          Our results-driven supplements are made with premium & safe ingredients
        </p>

        {/* Icons Row */}
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {trustFeatures.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                className="object-contain"
              />
              <p className="mt-3 text-sm font-semibold text-blue-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
