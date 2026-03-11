"use client";

import ScrollButton from "./ScrollButton";

export default function AboutUsSection() {
  return (
    <section className="w-full bg-[#ECF4FD] py-8 md:py-16  overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-6 lg:gap-12 items-center">
          {/* Left: rotated card + decorative lines */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full">
              <img
                src="/last-section.png"
                alt="Global Markets Group - Licensed and Regulated"
                className="w-full md:h-auto h-[300px] object-contain md:object-cover"
              />
            </div>
          </div>

          {/* Right: text content */}
          <div className="space-y-5 text-center md:text-left md:space-y-6">
            {/* About US tag */}
            <span className="inline-block  rounded-full bg-[#215C9E] px-4 py-1.5 text-sm md:text-base font-normal text-white uppercase tracking-wide">
              About US
            </span>

            {/* Main heading */}
            <h2 className="text-[24px]  md:text-[36px] leading-[1.25] font-bold text-[#000000]">
              Global Markets Group Limited
               Licensed and Regulated
               Trusted Provider
            </h2>

            {/* First paragraph */}
            <p className="text-[14px] md:text-base text-[#8D9099] leading-relaxed">
              Global Markets Group Limited was incorporated in March 2015 and
              has been authorised and regulated by the Financial Conduct
              Authority to act as an investment firm since September 2016 (FRN
              744501).
            </p>

            {/* Second paragraph */}
            <p className="text-[14px] md:text-base text-[#8D9099] leading-relaxed mb-8">
              Retail and professional clients worldwide choose us as their
              preferred trading partner, enjoying the benefits of secure and
              reliable access to trading platforms and investment instruments,
              based on the latest technology and Innovation.
            </p>

            {/* CTA button */}
            <ScrollButton label="Start Spread Betting Today" targetId="register" />
          </div>
        </div>
      </div>
    </section>
  );
}
