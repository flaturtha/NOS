import React from "react";

interface Book {
  title: string;
  author: string;
  description: string;
  hook: string;
  image: string;
}

interface BookGridProps {
  books: Book[];
}

export function BookGrid({ books }: BookGridProps) {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#8B0000] text-left">What's Inside Your Bundle</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book, idx) => (
          <div
            key={book.title}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-28 h-40 object-cover rounded mb-3 border border-gray-200 shadow-sm"
              loading={idx > 1 ? "lazy" : undefined}
            />
            <h3 className="text-lg font-semibold mb-1 text-[#242424]">{book.title}</h3>
            <div className="text-xs text-gray-500 mb-2">by {book.author}</div>
            <div className="text-sm text-gray-700 mb-2">{book.description}</div>
            <div className="text-sm font-bold text-[#8B0000]">{book.hook}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 