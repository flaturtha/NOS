import type { BookCover } from '../data/bookCovers';

interface BookCoverModalProps {
  selectedCover: BookCover | null;
  onClose: () => void;
}

export default function BookCoverModal({ selectedCover, onClose }: BookCoverModalProps) {
  if (!selectedCover) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-sm sm:max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 my-4">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight pr-4">{selectedCover.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl transition-colors duration-200 flex-shrink-0"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={selectedCover.image}
                alt={selectedCover.title}
                className="w-full sm:w-48 h-auto object-contain rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 mb-3 font-medium">First published {selectedCover.date}</p>
                <p className="text-lg font-semibold text-gray-800 mb-4 leading-relaxed">{selectedCover.teaser}</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center italic">
              Part of the 10-Book Gaslight Pulp Mystery Collection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
