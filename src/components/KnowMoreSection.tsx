import { CheckCircle, ArrowRight } from 'lucide-react';

export default function KnowMoreSection() {
  const benefits = [
    'Professional certified beauticians at your doorstep',
    'Premium quality products and equipment',
    'Flexible scheduling at your convenience',
    'Safe, hygienic, and contactless service',
    'Affordable pricing with no hidden charges',
    'Wide range of beauty treatments available'
  ];

  return (
    <section id="blogs" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-peach-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Parlour at Home?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the luxury of a premium salon without leaving your home
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-pink-100">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Salon Quality, Home Comfort
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We bring professional beauty services right to your doorstep. Our team of certified beauticians uses premium products and follows strict hygiene protocols to ensure you get the best salon experience in the comfort of your home.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether it's a quick facial refresh, full bridal makeup, or a relaxing spa session, we cater to all your beauty needs with personalized care and attention.
                </p>
              </div>

              <div>
                <img
                  src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional beauty service"
                  className="w-full h-64 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
