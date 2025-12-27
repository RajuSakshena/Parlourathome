import { Tag, Crown, Wallet, Gift } from 'lucide-react';

const offers = [
  {
    icon: Tag,
    title: 'Special Offers',
    description: 'Get up to 30% off on combo packages and seasonal offers',
    image: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Limited Time'
  },
  {
    icon: Crown,
    title: 'Premium Membership',
    description: 'Join our exclusive membership program for regular discounts',
    image: 'https://images.pexels.com/photos/3764540/pexels-photo-3764540.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'VIP Access'
  },
  {
    icon: Wallet,
    title: 'Cashback Rewards',
    description: 'Earn cashback points on every service and redeem later',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Save More'
  },
  {
    icon: Gift,
    title: 'Referral Bonus',
    description: 'Refer a friend and both get exciting discounts on next booking',
    image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Share & Earn'
  }
];

export default function OffersSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-peach-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Exclusive{' '}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Offers
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing deals and rewards designed just for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {offer.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
                    Know More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
