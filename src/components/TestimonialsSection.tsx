import { Star, User } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    rating: 5,
    review: 'Absolutely loved the service! The beautician was professional and the facial was amazing. Will definitely book again.',
    location: 'Delhi'
  },
  {
    name: 'Ananya Verma',
    rating: 5,
    review: 'Best home salon experience ever! They were punctual, hygienic, and the makeup was flawless for my wedding.',
    location: 'Mumbai'
  },
  {
    name: 'Ritu Kapoor',
    rating: 5,
    review: 'Very convenient service. No need to step out and the quality is just like premium salons. Highly recommended!',
    location: 'Bangalore'
  },
  {
    name: 'Neha Singh',
    rating: 5,
    review: 'Professional staff and excellent service. The pre-bridal package was worth every penny. Thank you!',
    location: 'Pune'
  },
  {
    name: 'Sneha Patel',
    rating: 5,
    review: 'I have been using their services for 6 months now. Consistent quality and very affordable. Great work!',
    location: 'Ahmedabad'
  },
  {
    name: 'Kavita Reddy',
    rating: 5,
    review: 'The body massage was so relaxing! They use good quality products and the therapist was highly skilled.',
    location: 'Hyderabad'
  }
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our satisfied clients across India
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">"{testimonial.review}"</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => scroll('left')}
              className="bg-white border-2 border-pink-500 text-pink-500 p-3 rounded-full hover:bg-pink-50 transition-all duration-300 shadow-md"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-white border-2 border-pink-500 text-pink-500 p-3 rounded-full hover:bg-pink-50 transition-all duration-300 shadow-md"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
