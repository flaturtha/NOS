import React from "react";

const testimonialImagePaths = [
  "/assets/img/testimonials/richcook_a_photograph_of_an_african_american_person_50_or_older_317f16e8-2790-4f26-a99c4e0ecac.png",
  "/assets/img/testimonials/richcook_a_photograph_of_a_woman_65_or_older_within_a_circle__84e91bb1-a11f-4311-ac57-1f75af5352a1_0.png",
  "/assets/img/testimonials/richcook_a_photograph_of_an_Chinese_Japanese_Korean_Veitnames_601e6ba3-89b2-4c66-b2d4-d669b3ce2efc_0.png",
  "/assets/img/testimonials/richcook_a_photograph_of_an_african_american_woman_65_or_olde_fd4730e1-0184-4281-8b2b-190ef0df25c0_1.png",
  "/assets/img/testimonials/richcook_a_photograph_of_a_person_50_or_older_within_a_circle_6895d045-64bf-4753-b36e-a7f2d2ba0d5e_3.png",
];

const DonationSection = () => {
  return (
    <section className="relative w-full min-h-[340px] md:min-h-[420px] flex items-center justify-center overflow-hidden bg-black" aria-labelledby="donation-heading">
      {/* Full-width video/image background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/img/donation/richcook_a_video_of_a_65_or_older_woman_donating_a_paperback_no_4e0afd90-f02a-4226-be35-f4721c9ac9ad.png"
          aria-label="A 65+ woman donating a paperback book."
        >
          <source src="/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.webm" type="video/webm" />
          <source src="/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.mp4" type="video/mp4" />
          <img
            src="/assets/img/donation/richcook_a_video_of_a_65_or_older_woman_donating_a_paperback_no_4e0afd90-f02a-4226-be35-f4721c9ac9ad.png"
            alt="A 65+ woman donating a paperback book."
            className="w-full h-full object-cover object-center"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      {/* Overlay content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center py-10 md:py-16 px-4">
        <h2 id="donation-heading" className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg text-center">Pass the Mystery On</h2>
        <div className="flex flex-wrap justify-center gap-3 w-full max-w-lg mb-6">
          {testimonialImagePaths.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Reader testimonial"
              className={`rounded-full object-cover border-2 border-white shadow w-20 h-20 md:w-24 md:h-24 ${i > 2 ? 'hidden md:block' : ''}`}
              loading={i > 1 ? "lazy" : undefined}
            />
          ))}
        </div>
        <p className="text-white text-lg md:text-xl font-semibold text-center drop-shadow mb-2 max-w-xl">Every bundle helps us donate more books to seniors and libraries in need.</p>
        {/* Add CTA or more info here if needed */}
      </div>
    </section>
  );
};

export default DonationSection; 