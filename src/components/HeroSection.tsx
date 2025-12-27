import { Star, Phone } from 'lucide-react';

export default function HeroSection() {
  const beautyImages = [
    'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3764540/pexels-photo-3764540.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <section id="home" className="py-10 md:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-peach-50 overflow-hidden">
      {/* Custom Marquee CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Salon at Home for{' '}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Women
              </span>
            </h1>

            <div className="flex flex-col items-center lg:items-start space-y-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9/5 stars (2,500+ reviews)</span>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience professional beauty treatments in the comfort of your home. Our experts bring premium salon services to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="tel:+919811923486" className="inline-flex items-center justify-center space-x-2 bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg font-bold hover:bg-pink-600 transition-all">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 border-2 border-pink-500 text-pink-500 rounded-full font-bold hover:bg-pink-50 transition-all">
                Explore Services
              </button>
            </div>
          </div>

          {/* The Moving Photo Section - Works perfectly on Mobile */}
          <div className="relative mt-8 lg:mt-0">
            <div className="overflow-hidden">
              <div className="animate-marquee space-x-4">
                {[...beautyImages, ...beautyImages].map((img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-48 md:w-64 h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                  >
                    <img src={img} alt="Beauty service" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
