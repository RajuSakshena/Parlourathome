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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Parlour at Home
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('blogs')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Blogs</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Menu</button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Book Now
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 p-1">
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 space-y-5 shadow-2xl flex flex-col animate-in slide-in-from-top-2 duration-300">
            <button onClick={() => scrollToSection('home')} className="text-left text-lg font-medium text-gray-700">Home</button>
            <button onClick={() => scrollToSection('blogs')} className="text-left text-lg font-medium text-gray-700">Blogs</button>
            <button onClick={() => scrollToSection('services')} className="text-left text-lg font-medium text-gray-700">Menu</button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold shadow-md"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
