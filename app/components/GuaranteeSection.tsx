import React from "react";

export function GuaranteeSection({ image, variantType }: { image?: string; variantType?: 'print' | 'ebook' }) {
  // Video and fallback sources
  const videoWebm = "/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.webm";
  const videoMp4 = "/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.mp4";
  const gifFallback = "/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.gif";
  const pngFallback = image;

  return (
    <section
      className="relative w-full px-0 py-16 bg-[#fdfcf9] border-t border-gray-200 overflow-hidden"
      style={{ minHeight: '420px' }}
    >
      {/* Full-width background video/image for ebook or print */}
      {variantType === 'ebook' ? (
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/img/donation/richcook_two_women_in_their_mid_60s_holding_ipads_and_happily_c_c9b8095f-ed07-4975-b6ba-1b766829e47e.png"
            aria-label="Two women in their 60s in a library."
          >
            <source src="/assets/img/donation/social_richcook_two_women_in_their_mid_60s_holding_ipads_and_happily_abb9dc18-3e74-4cfe-b7e2-e319b692efde_0.webm" type="video/webm" />
            <source src="/assets/img/donation/social_richcook_two_women_in_their_mid_60s_holding_ipads_and_happily_abb9dc18-3e74-4cfe-b7e2-e319b692efde_0.gif" type="image/gif" />
            <img
              src="/assets/img/donation/richcook_two_women_in_their_mid_60s_holding_ipads_and_happily_c_c9b8095f-ed07-4975-b6ba-1b766829e47e.png"
              alt="Two women in their 60s in a library."
              className="w-full h-full object-cover object-center"
            />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ) : (
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
      )}
      {/* Overlay content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-10 md:py-16">
        <div className="absolute inset-0 w-full h-full bg-black/60 rounded-lg" style={{ zIndex: 1 }} />
        <div className="relative" style={{ zIndex: 2 }}>
        {variantType === 'ebook' ? (
          <>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-white drop-shadow-lg">
              <span role="img" aria-label="skull">💀</span> Love It or Leave It Guarantee
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto mb-8">
              <div className="max-w-[65ch] mx-auto text-white drop-shadow">
                <p className="text-xl leading-relaxed text-left">
                  If you didn't love your ebook, don't sweat it—reading should never feel like a gamble.
                </p>
                <p className="text-xl leading-relaxed text-left mt-4">
                  Instead of a refund with hoops, here's what I offer:
                </p>
                <ol className="list-decimal list-inside text-xl leading-relaxed text-left mt-4 space-y-2">
                  <li>Do something kind for another reader. Leave a review (for this or any book), recommend a favorite to a friend, or even share the ebook file with someone you think might enjoy it.</li>
                  <li>Then email me. I'll send you a coupon for any other ebook in the store—your choice, no matter the price.</li>
                  <li>And don't worry about the book you bought. No need to delete it—consider it a gift.</li>
                </ol>
                <p className="text-xl leading-relaxed text-left mt-4">
                  No tricks. No fine print. Just a little mystery-world karma.
                </p>
                <div className="mt-8 p-5 bg-white/95 border-2 border-[#8B0000] rounded-lg shadow-sm text-[#242424] text-lg font-semibold text-center">
                  <span className="font-bold">Not your style?</span> <span className="font-normal">No worries. Share it with a friend, then pick another—on the house.</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
        </div>
      </div>
    </section>
  );
} 