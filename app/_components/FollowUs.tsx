import Image from "next/image";

export default function FollowUs() {
  return (
    <div className="w-full flex flex-col items-center py-10 gap-6 mt-16">
      {/* Logo Placeholder */}
      <div className="relative w-52 h-16">
        {/* Replace src with your real logo path */}
        <Image src="/health_care.png" alt="Clinic Logo" fill className="object-contain" />
      </div>

      {/* Follow Us Button */}
      <button className="px-6 py-2 border border-blue-400  text-blue-500 rounded-none hover:bg-blue-50 transition">
        Follow Us
      </button>

      {/* Social Icons Row */}
      <div className="flex gap-4 mt-2">
        <div className="w-10 h-10 rounded-full bg-blue-400 flex p-3 items-center justify-center">
          <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
          <Image src="/x.png" alt="Twitter" width={20} height={20} />
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
          <Image src="/telegram.png" alt="Telegram" width={20} height={20} />
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
          <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
