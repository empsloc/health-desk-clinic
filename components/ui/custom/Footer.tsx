import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-800 mt-16">
      {/* Top Section */}
      <div className=" lg:px-56 grid bg- grid-cols-1 md:grid-cols-3 gap-10 p-10 bg-[#F2F3F5] text-ce  items-center justify-center">
        {/* Column 1 */}
        <div className="bg--400">
          <h3 className="font-semibold text-lg mb-3">Have a Question?</h3>
          <p className="text-sm mb-4">
            Check out our FAQs where we answer the most commonly asked questions
          </p>
          <button className="px-4 py-2 border border-blue-400 text-blue-500 rounded-none hover:bg-blue-50 transition text-sm">
            Read FAQs
          </button>
        </div>

        {/* Column 2 */}
        <div className="bg--400">
          <h3 className="font-semibold text-lg mb-3">Connect With Us</h3>
          <p className="text-sm mb-1">Enjoy free shipping for all orders.</p>
          <p className="font-bold text-lg">1-800-822-7777</p>
        </div>

        {/* Column 3 */}
        <div className="bg--400">
          <h3 className="font-semibold text-lg mb-3">We're Social</h3>
          <p className="text-sm">Like us, love us, follow us!</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div
        className="bg--600 text-white p-6"
        style={{ background: "var(--color-azure-42, #1A69BE)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Let's Grow Together</h3>
            <p className="text-sm opacity-90">
              We'll keep it simple. Only the news and updates you need.
            </p>
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="px-4 py-2 w-full md:w-80 text-black  border border-white focus:outline-none rounded-none"
            />
            <button className="px-6 py-2 bg-white text-blue-600 font-medium rounded-none hover:bg-gray-100 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm max-w-6xl mx-auto">
        {/* Logo + Info */}
        <div>
          <div className="relative w-28 h-10 mb-3">
            {/* Replace placeholder */}
            <Image
              src="/footer_health.png"
              alt="Clinic Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[#5C5C5C]">
            Address: 7823 Red Oak Trail, Austin, TX, 78745, United States
          </p>
          <p className="text-[#5C5C5C]">Phone: (512) 555-2376</p>
          <p className="text-[#5C5C5C]">Email: Ereforce@outlook.com</p>
        </div>

        {/* Products Columns */}
        <div>
          <h4 className="font-bold text-blue-500 mb-2">Our Products</h4>
          <p className="text-[#5C5C5C]">Vita Renew</p>
          <p className="text-[#5C5C5C]">Testobites</p>
          <p className="text-[#5C5C5C]">Audizen</p>
          <p className="text-[#5C5C5C]">Nerve Flow</p>
          <p className="text-[#5C5C5C]">Uro Flow</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">&nbsp;</h4>
          <p>Vita Renew</p>
          <p>Testobites</p>
          <p>Audizen</p>
          <p>Nerve Flow</p>
          <p>Memof</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">&nbsp;</h4>
          <p>Vita Renew</p>
          <p>Testobites</p>
          <p>Audizen</p>
          <p>Nerve Flow</p>
          <p>Derma Care</p>
        </div>
      </div>

      {/* Legal + Payments */}
      <div
        className="text-center text-xs text-gray-600 px-4 pb-6 pt-5"
        style={{ background: "var(--color-grey-90, #E7E6E6)" }}
      >
        <p className="mb-2 m">
          These statements have not been evaluated by the Food and Drug
          Administration.
        </p>
        <p className="mb-4">
          These products are not intended to diagnose, treat, cure or prevent
          any disease. Individual results may vary.
        </p>

        <div className="flex justify-center gap-3 mb-4">
          <Image src="/credit.png" alt="Mastercard" width={200} height={100} />
        </div>
        <div className="flex items-center justify-between w-full text-center bg--400 gap-20 lg:px-56">
          <p>© 2025, Health Desk Clinic. All Rights Reserved.</p>

          <div className="flex justify-center gap-4  text-gray-700">
            <a href="#">Terms And Conditions</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
