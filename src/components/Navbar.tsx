'use client';

export default function Navbar() {
  return (
    <nav className="w-full py-6 bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-blue-600">
          Kindred Plan
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">
            How it Works
          </a>
          <a href="#how-were-different" className="text-gray-600 hover:text-blue-600">
            Why We're Different
          </a>
          <a href="#waitlist" className="text-gray-600 hover:text-blue-600">
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
