import React from "react";

interface WhyFeature {
  icon: string;
  title: string;
  description: string;
}

export function WhyDifferentSection({ mainText, features }: { mainText: string; features: WhyFeature[] }) {
  return (
    <section className="px-6 py-16 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
          Why We're Different (And Proud of It)
        </h2>
        <div className="max-w-[65ch] mx-auto mb-12">
          <p className="text-xl leading-relaxed text-left">{mainText}</p>
        </div>
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-300 shadow-sm bg-white rounded-lg p-8">
              <div className="flex items-start gap-6">
                <span className="text-4xl">{feature.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-[#8B0000]">{feature.title}</h3>
                  <div className="max-w-[60ch]">
                    <p className="text-xl leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 