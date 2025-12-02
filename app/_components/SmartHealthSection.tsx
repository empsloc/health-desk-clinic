export default function SmartHealthSection() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Health Care Desk</h2>
        <h3 className="text-2xl font-semibold mt-2">The Future Of Smart Health</h3>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          At Health Care Desk, we are committed to producing supplements that harness the power
          of all-natural superfoods. Our products help support the body's natural processes,
          improving our customers' quality of life.
        </p>
      </div>

      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Image */}
        <img
          src="/natural_components.png"
          alt="Natural Components"
          className="w-full "
        />

        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold">100% Natural Components</h3>
          <p className="text-sm font-medium text-gray-600 mt-1">
            Nature-Powered Wellness You Can Trust
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We harness the goodness of nature to create supplements enriched with premium,
            research-backed superfood extracts. Each formula is carefully crafted to promote
            overall vitality and deliver proven health benefits.
            <br /><br />
            At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory
            compliance, ensuring every product you choose is both effective and trustworthy.
          </p>
         <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-none hover:bg-blue-500 hover:text-white transition">
  Learn More
</button>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold">Research-Backed Formulations</h3>
          <p className="text-sm font-medium text-gray-600 mt-1">
            Formulated with Clinically Tested Ingredients
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We combine the expertise of our physicians with the latest health data and
            medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.
          </p>
          <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-none hover:bg-blue-500 hover:text-white transition">
  Learn More
</button>
        </div>

        {/* Image */}
        <img
          src="/research_backed.png"
          alt="Lab Research"
          className="w-full "
        />
      </div>

      {/* ----------------------------------------------------------- */}
      {/* 🌿 Third Row — Eco-Conscious Manufacturing                  */}
      {/* ----------------------------------------------------------- */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <img
          src="/eco.png"
          alt="Eco Manufacturing"
          className="w-full "
        />

        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold">Eco-Conscious Manufacturing</h3>
          <p className="text-sm font-medium text-gray-600 mt-1">
            Sustainable from Source to Shelf
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Our supplements are crafted in certified facilities that meet and exceed
            industry standards — ensuring exceptional quality while minimizing
            environmental impact.
            <br /><br />
            Through eco-friendly processes and a commitment to reducing our carbon
            footprint, we create wellness solutions that are as good for the planet
            as they are for you.
          </p>
          <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-none hover:bg-blue-500 hover:text-white transition">
  Learn More
</button>

        </div>
      </div>

    </section>
  );
}
