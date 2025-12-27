import { Star, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  const beautyImages = [
    'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3764540/pexels-photo-3764540.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <section id="home" className="py-12 md:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-peach-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Salon at Home for{' '}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Women
              </span>
            </h1>

            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9 out of 5 stars (2,500+ reviews)</span>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Experience professional beauty treatments in the comfort of your home. Our certified beauticians bring premium salon services right to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919811923486"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center space-x-2 border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full hover:bg-pink-50 transition-all duration-300 font-semibold"
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-hidden space-x-4"
              style={{ scrollBehavior: 'auto' }}
            >
              {[...beautyImages, ...beautyImages].map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt="Beauty service"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
