import React, { useState } from "react";

interface Book {
  title: string;
  author: string;
  description: string;
  longDescription: string;
  hook: string;
  image: string;
}

interface BookGridProps {
  books: Book[];
}

export function BookGrid({ books }: BookGridProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  function markdownToHtml(md: string): string {
    // Replace **bold** first, then *italic*
    let html = md.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(?!\*)(.+?)\*/g, '<em>$1</em>');
    // Replace line breaks with <br> for readability
    html = html.replace(/\n/g, '<br>');
    return html;
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#8B0000] text-left">What's Inside Your Bundle</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book, idx) => (
          <div
            key={book.title}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow duration-200"
          >
            <button
              type="button"
              onClick={() => setSelectedBook(book)}
              className="focus:outline-none"
              aria-label={`View details for ${book.title}`}
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-28 h-40 object-contain rounded mb-3 border border-gray-200 shadow-sm hover:scale-105 transition-transform duration-150"
                loading={idx > 1 ? "lazy" : undefined}
              />
            </button>
            <h3 className="text-lg font-semibold mb-1 text-[#242424]">{book.title}</h3>
            <div className="text-xs text-gray-500 mb-2">by {book.author}</div>
            <div className="text-sm text-gray-700 mb-2 line-clamp-3">{book.description}</div>
            <div className="text-sm font-bold text-[#8B0000] mb-2">{book.hook}</div>
            <button
              type="button"
              onClick={() => setSelectedBook(book)}
              className="mt-2 px-4 py-2 bg-[#8B0000] text-white rounded shadow hover:bg-[#5a0000] focus:outline-none text-sm font-semibold"
            >
              Details
            </button>
          </div>
        ))}
      </div>
      {/* Lightbox Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={e => {
            if (e.target === e.currentTarget) setSelectedBook(null);
          }}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto shadow-xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedBook(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold focus:outline-none"
              aria-label="Close details dialog"
            >
              ×
            </button>
            <div className="p-6 flex flex-col items-center">
              <img src={selectedBook.image} alt={selectedBook.title} className="w-32 h-48 object-cover rounded mb-4 border border-gray-200 shadow" />
              <h3 className="text-2xl font-serif font-bold text-black mb-2 text-center">{selectedBook.title}</h3>
              <div className="text-base text-gray-600 mb-4 text-center">by {selectedBook.author}</div>
              <div className="text-lg text-gray-800 mb-4 text-left whitespace-pre-line" dangerouslySetInnerHTML={{ __html: markdownToHtml(selectedBook.longDescription) }} />
              {selectedBook.hook && <div className="text-base font-semibold italic text-[#8B0000] text-center">{selectedBook.hook}</div>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 