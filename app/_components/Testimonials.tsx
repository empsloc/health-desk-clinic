export default function Testimonials() {
  const testimonials = [
    {
      product: "TestoBites",
      image: "/testobites.png",
      stars: 5,
      text:
        "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
      author: "Ryan R.",
      highlight :false
    
    },
    {
      product: "Vita Renew",
      image: "/vita.png",
      stars: 5,
      text:
        "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
      author: "Jamie Fields",
    },
    {
      product: "Nerve Freedom",
      image: "/nerve.png",
      stars: 5,
      text:
        "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
      author: "Anonymous",
    },
  ];

  return (
    <section className="w-full mt-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Verified Customer Testimonials
      </h2>

      <div className="max-w-12xl mx-auto flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`relative bg-cover bg-center p-6 rounded-md shadow-sm 
              w-full sm:w-[350px] lg:w-[380px] xl:w-[400px]
              ${t.highlight ? "border border-red-500" : ""}`}
               style={{ backgroundImage: "url('/test_bg.png')" }} 
          >
            {/* Product image */}
            <img
              src={t.image}
              alt={t.product}
              className="h-20 object-contain absolute -top-6 left-4"
            />

            {/* Product Name */}
            <h3 className="font-bold text-lg mt-8">{t.product}</h3>

            {/* Stars */}
            <div className="text-yellow-500 mt-1">
              {"★".repeat(t.stars)}
            </div>

            {/* Testimonial Text */}
            <p className="mt-3 text-sm leading-relaxed">{t.text}</p>

            {/* Author */}
            <p className="mt-4 font-medium text-sm">- {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
