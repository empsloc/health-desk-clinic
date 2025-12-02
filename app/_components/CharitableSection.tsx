export default function CharitableInitiatives() {
  return (
    <section
      className="w-full py-16 px-6 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/charity_bg.png')" }}
    >
      <div className="max-w-6xl mx-auto text-center bg--200">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Our Charitable Initiatives
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-white mt-1">
          Health Care Desk Gives Back
        </h3>

        {/* Subtext */}
        <p className="text-white mt-4 max-w-3xl mx-auto text-sm md:text-base">
          At Health Care Desk, a portion of our profits are committed to supporting charities
          and global health research initiatives.
        </p>

        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
          <img src="/charity1.png" alt="Prostate Cancer Foundation" className="h-10 object-contain" />
          <img src="/charity2.png" alt="American Tinnitus Association" className="h-10 object-contain" />
          <img src="/charity3.png" alt="U.S. Pain Foundation" className="h-10 object-contain" />
          <img src="/charity4.png" alt="American Diabetes Association" className="h-10 object-contain" />
          <img src="/charity5.png" alt="American Heart Association" className="h-10 object-contain" />
        </div>

      </div>
    </section>
  );
}
