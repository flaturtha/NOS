import React from "react";

interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

const testimonialImagePaths = [
  "/assets/img/testimonials/richcook_a_photograph_of_an_african_american_person_50_or_older_317f16e8-2790-4f26-a99c4e0ecac.png",
  "/assets/img/testimonials/richcook_a_photograph_of_a_woman_65_or_older_within_a_circle__84e91bb1-a11f-4311-ac57-1f75af5352a1_0.png",
  "/assets/img/testimonials/richcook_a_photograph_of_an_Chinese_Japanese_Korean_Veitnames_601e6ba3-89b2-4c66-b2d4-d669b3ce2efc_0.png",
  "/assets/img/testimonials/richcook_a_photograph_of_an_african_american_woman_65_or_olde_fd4730e1-0184-4281-8b2b-190ef0df25c0_1.png",
  "/assets/img/testimonials/richcook_a_photograph_of_a_person_50_or_older_within_a_circle_6895d045-64bf-4753-b36e-a7f2d2ba0d5e_3.png",
];

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  // Responsive: 5 images desktop, 3 images mobile
  const imagesToShow = typeof window !== "undefined" && window.innerWidth < 768 ? 3 : 5;
  // Fallback for SSR: always show 5, but CSS will hide 2 on mobile
  return (
    <section className="px-6 py-16 bg-[#fdfcf9] border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        {/* Testimonial Images Bar */}
        <div className="flex justify-center gap-4 mb-8">
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
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">What Readers Are Saying...</h2>
        <div className="max-w-[65ch] mx-auto mb-12">
          <p className="text-xl leading-relaxed text-left">
            You're in good company. Thousands of readers have rediscovered the joy of classic mysteries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-300 shadow-sm rounded-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-6 h-6 text-2xl ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                  >★</span>
                ))}
              </div>
              <div className="max-w-[60ch]">
                <p className="text-xl leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-lg">– {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 