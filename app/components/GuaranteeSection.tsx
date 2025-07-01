import React from "react";

export function GuaranteeSection({ image }: { image?: string }) {
  // Video and fallback sources
  const videoWebm = "/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.webm";
  const videoMp4 = "/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.mp4";
  const gifFallback = "/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.gif";
  const pngFallback = image;

  return (
    <section className="relative w-full px-0 py-16 bg-[#fdfcf9] border-t border-gray-200 overflow-hidden" style={{ minHeight: '420px' }}>
      {/* Full-width background video/image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          poster={pngFallback}
          aria-label="A 65+ woman donating a paperback book."
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
          <source src={gifFallback} type="image/gif" />
          <img
            src={pngFallback}
            alt="A 65+ woman donating a paperback book."
            className="w-full h-full object-cover object-center"
          />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>
      {/* Overlay content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-white drop-shadow-lg">
          Our "Pass the Mystery On" Guarantee
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto mb-8">
          <div className="max-w-[65ch] mx-auto text-white drop-shadow">
            <p className="text-xl leading-relaxed text-left">
              We do things a little differently here at Tales of Murder Press—because we're not just selling books, we're keeping stories alive.
            </p>
          </div>
        </div>
        <div className="border-2 border-[#8B0000] bg-white/90 mb-10 shadow-sm rounded-lg p-8">
          <div className="max-w-[65ch] mx-auto space-y-4">
            <p className="text-xl leading-relaxed">
              If you're not thrilled with your purchase, we'll give you a 100% refund, including shipping. No restocking fees. No hoops.
            </p>
            <p className="text-xl leading-relaxed font-semibold">All we ask? Donate your book.</p>
            <p className="text-xl leading-relaxed">
              Give it a second life by placing it somewhere it can still be enjoyed—your local library, a senior center, a Little Free Library, a school, a hospital, or even a prison literacy program. Just send us a quick photo or a short note showing you passed it along. That's it.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 text-white drop-shadow">
            <h4 className="font-semibold text-xl mb-3">Less Waste, Lower Footprint</h4>
            <p className="text-lg">Every book finds a home.</p>
          </div>
          <div className="p-6 text-white drop-shadow">
            <h4 className="font-semibold text-xl mb-3">Every Book Deserves a Reader</h4>
            <p className="text-lg">You help share these stories with others.</p>
          </div>
          <div className="p-6 text-white drop-shadow">
            <h4 className="font-semibold text-xl mb-3">You Join the Mission</h4>
            <p className="text-lg">You become part of our preservation effort.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 