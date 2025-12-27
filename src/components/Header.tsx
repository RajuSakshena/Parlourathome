import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Parlour at Home
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Blogs
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="block w-full text-left text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Blogs
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-center"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
