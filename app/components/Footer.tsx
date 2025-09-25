export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <p>&copy; 2024 Tales of Murder Press. All rights reserved.</p>
          <a href="#" className="hover:text-gray-800 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800 transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
