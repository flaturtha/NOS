import React from "react";

export function ProblemSection({ problems }: { problems: string[] }) {
  return (
    <section className="px-6 py-16 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
          Tired of the Digital Runaround and Disappointing Reads?
        </h2>
        <div className="max-w-[65ch] mx-auto mb-10">
          <p className="text-xl leading-relaxed text-left">
            You just want to curl up with a great mystery, but it's become a frustrating hunt.
          </p>
        </div>
        <div className="space-y-6 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
              <div className="w-4 h-4 bg-[#8B0000] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
              <p className="text-xl leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 