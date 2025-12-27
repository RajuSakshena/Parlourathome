import { Sparkles, Package, Scissors, Heart, Hand, Flower2, Gem, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Facial',
    route: '/services/facial',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg',
    description: 'Rejuvenating facial treatments for glowing skin'
  },
  {
    title: 'Makeup',
    route: '/services/makeup',
    icon: Heart,
    image: 'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg',
    description: 'Professional makeup for every occasion'
  },
  {
    title: 'Waxing',
    route: '/services/waxing',
    icon: Flower2,
    image: 'https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg',
    description: 'Smooth and pain-free waxing services'
  },
  {
    title: 'Mani-Pedi',
    route: '/services/mani-pedi',
    icon: Hand,
    image: 'https://images.pexels.com/photos/1570149/pexels-photo-1570149.jpeg',
    description: 'Complete nail care and beautification'
  },
  {
    title: 'Hair Care',
    route: '/services/hair',
    icon: Scissors,
    image: 'https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg',
    description: 'Hair styling, coloring, and treatments'
  },
  {
    title: 'Body Massage',
    route: '/services/massage',
    icon: Gem,
    image: 'https://images.pexels.com/photos/3757946/pexels-photo-3757946.jpeg',
    description: 'Relaxing full body massage therapy'
  },
  {
    title: 'Pre Bridal Care',
    route: '/services/pre-bridal',
    icon: Gift,
    image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
    description: 'Complete bridal beauty packages'
  },
  {
    title: 'Packages',
    route: '/services/packages',
    icon: Package,
    image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg',
    description: 'Customized beauty service bundles'
  }
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Home Salon <span className="text-pink-500">Services</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Professional beauty treatments at your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => navigate(service.route)}
                className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <Icon className="text-white w-8 h-8" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>
                  <span className="inline-block mt-3 text-pink-500 font-medium">
                    View Services →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
