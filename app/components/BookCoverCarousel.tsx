import type { BookCover } from '../data/bookCovers';

interface BookCoverCarouselProps {
  bookCovers: BookCover[];
  infiniteCovers: BookCover[];
  currentCoverIndex: number;
  onCoverClick: (cover: BookCover) => void;
  onDotClick: (index: number) => void;
}

export default function BookCoverCarousel({ 
  bookCovers, 
  infiniteCovers, 
  currentCoverIndex, 
  onCoverClick, 
  onDotClick 
}: BookCoverCarouselProps) {
  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-800 hero-subheadline">
          BINGE TEN THRILLING GASLIGHT PULP NOVELS
        </h2>
        <p className="text-center text-gray-600 mb-8 italic">Click any cover to learn more about that title</p>
        
        {/* Mobile Carousel - Full Width Covers */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden w-full">
            <div className="flex transition-transform duration-500 ease-in-out w-full" style={{
              transform: `translateX(-${currentCoverIndex * 100}%)`
            }}>
              {bookCovers.map((cover, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div 
                    className="relative cursor-pointer group w-full"
                    onClick={() => onCoverClick(cover)}
                  >
                    <img
                      src={cover.image}
                      alt={cover.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl"
                      onError={(e) => {
                        console.error('Image failed to load:', cover.image);
                        e.currentTarget.style.backgroundColor = 'red';
                      }}
                    />
                    
                    {/* Eye icon overlay on each cover */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/70 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="text-black/50 text-3xl font-bold">👁</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {bookCovers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentCoverIndex ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Desktop Carousel - Single Row with Smooth Horizontal Scrolling */}
        <div className="hidden lg:block">
          <div className="overflow-hidden group">
            <div className="flex gap-6 animate-scroll group-hover:pause" style={{ 
              minWidth: 'max-content',
              animation: 'scroll 30s linear infinite'
            }}>
              {infiniteCovers.map((cover, index) => (
                <div key={index} className="relative cursor-pointer group flex-shrink-0" style={{ width: '200px' }}>
                  <div 
                    className="relative"
                    onClick={() => onCoverClick(cover)}
                  >
                    <img
                      src={cover.image}
                      alt={cover.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                      onError={(e) => {
                        console.error('Image failed to load:', cover.image);
                        e.currentTarget.style.backgroundColor = 'red';
                      }}
                    />

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
