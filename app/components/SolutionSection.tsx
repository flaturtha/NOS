import React from "react";

interface Feature {
  title: string;
  description: string;
}

export function SolutionSection({ mainText, features }: { mainText: string; features: Feature[] }) {
  return (
    <section className="px-6 py-16 bg-[#fdfcf9] border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
          The Solution: Real Books, Restored for Real Readers
        </h2>
        <div className="max-w-[65ch] mx-auto mb-12">
          <p className="text-xl leading-relaxed text-left">{mainText}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border-2 border-[#8B0000] bg-white shadow-sm rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-4 text-[#8B0000]">{feature.title}</h3>
              <div className="max-w-[60ch]">
                <p className="text-xl leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 