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
    <section id="home" className="relative pt-6 pb-12 md:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-peach-50 overflow-hidden">
      {/* Custom Keyframe Animation for the Moving Photos */}
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
      `}</style>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Text Content Area */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left z-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              SAGARIKA & DORA at Home for{' '}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Women
              </span>
            </h1>

            <div className="flex flex-col items-center lg:items-start space-y-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium text-xs md:text-base">4.9/5 stars (2,500+ reviews)</span>
            </div>

            <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Professional beauty treatments in your home. Our certified beauticians bring premium services to your doorstep.
            </p>

            {/* Buttons: Now using flex-col for mobile to ensure visibility */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <a
                href="tel:+919811923486"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center space-x-2 border-2 border-pink-500 text-pink-500 px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-pink-50 transition-all font-semibold text-sm md:text-base"
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>

          {/* The Moving Image Section */}
          <div className="relative w-full mt-4 lg:mt-0 overflow-hidden">
            <div className="animate-marquee space-x-4">
              {[...beautyImages, ...beautyImages].map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 md:w-64 h-56 md:h-80 rounded-2xl overflow-hidden shadow-lg border-2 md:border-4 border-white"
                >
                  <img src={img} alt="Beauty service" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
