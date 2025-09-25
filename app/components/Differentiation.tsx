export default function Differentiation() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
          Why Settle for Frustration? Choose the Smart Way.
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
          I've built the clean, affordable collection others don't offer.
        </p>
        
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left font-semibold">Feature</th>
                <th className="border border-gray-300 p-4 text-left font-semibold">Messy Scans</th>
                <th className="border border-gray-300 p-4 text-left font-semibold">Single Editions</th>
                <th className="border border-gray-300 p-4 text-left font-semibold">My 10-Ebook Bundle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Price</td>
                <td className="border border-gray-300 p-4">"Free" (worthless)</td>
                <td className="border border-gray-300 p-4">$9.99+ each</td>
                <td className="border border-gray-300 p-4">$4.50/book</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">Quality</td>
                <td className="border border-gray-300 p-4">Blurry, incomplete</td>
                <td className="border border-gray-300 p-4">Restored but costly</td>
                <td className="border border-gray-300 p-4">Professionally Restored</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">Format</td>
                <td className="border border-gray-300 p-4">Only PDFs</td>
                <td className="border border-gray-300 p-4">Limited formats</td>
                <td className="border border-gray-300 p-4">Kindle & ePub, DRM-Free</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">Content</td>
                <td className="border border-gray-300 p-4">Random scraps</td>
                <td className="border border-gray-300 p-4">One story at a time</td>
                <td className="border border-gray-300 p-4">10 Complete Novels</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="md:hidden space-y-4 mb-8">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Price</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Messy Scans:</span>
                <span>"Free" (worthless)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Single Editions:</span>
                <span>$9.99+ each</span>
              </div>
              <div className="flex justify-between font-semibold text-red-600">
                <span>My 10-Ebook Bundle:</span>
                <span>$4.50/book</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Quality</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Messy Scans:</span>
                <span>Blurry, incomplete</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Single Editions:</span>
                <span>Restored but costly</span>
              </div>
              <div className="flex justify-between font-semibold text-red-600">
                <span>My 10-Ebook Bundle:</span>
                <span>Professionally Restored</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Format</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Messy Scans:</span>
                <span>Only PDFs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Single Editions:</span>
                <span>Limited formats</span>
              </div>
              <div className="flex justify-between font-semibold text-red-600">
                <span>My 10-Ebook Bundle:</span>
                <span>Kindle & ePub, DRM-Free</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Content</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Messy Scans:</span>
                <span>Random scraps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Single Editions:</span>
                <span>One story at a time</span>
              </div>
              <div className="flex justify-between font-semibold text-red-600">
                <span>My 10-Ebook Bundle:</span>
                <span>10 Complete Novels</span>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
          How It Works:
        </h3>
        
        <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
          No confusion, no tech barriers. Here's exactly how it works:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-4">1</div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Order securely</h4>
            <p className="text-gray-700 leading-relaxed">
              Click the button and check out with confidence.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">2</div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Download instantly</h4>
            <p className="text-gray-700 leading-relaxed">
              Your confirmation email will include links to a service called Bookfunnel where you can download (and re-download) both Kindle and ePub files.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">3</div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Start reading tonight</h4>
            <p className="text-gray-700 leading-relaxed">
              Copy the files <em>(full instructions on Bookfunnel)</em> to your device, open, and enjoy. Ten nights of mystery are waiting for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
