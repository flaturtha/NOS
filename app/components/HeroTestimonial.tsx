export default function HeroTestimonial() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <div className="text-2xl mb-3 text-yellow-400">★★★★★</div>
            <picture>
              <source srcSet="/images/landing/testimonials/bill.avif" type="image/avif" />
              <source srcSet="/images/landing/testimonials/bill.webp" type="image/webp" />
              <img 
                src="/images/landing/testimonials/bill.jpg" 
                alt="Bill R."
                className="w-20 h-20 rounded-full mx-auto object-cover"
              />
            </picture>
          </div>
          <blockquote className="text-xl sm:text-2xl text-gray-800 italic leading-relaxed mb-4">
            "I bought one, came back for the collection. Should have just started there. Worth every penny."
          </blockquote>
          <p className="text-gray-600 font-semibold text-lg">— Bill R., 75</p>
        </div>
      </div>
    </section>
  );
}
