import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="px-6 py-16 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 shadow-sm bg-white rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-black">{faq.question}</h3>
              <div className="max-w-[65ch]">
                <p className="text-xl leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 