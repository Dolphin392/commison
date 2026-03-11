import { Rat, Handshake, Wallet, } from 'lucide-react';
import { Megaphone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Rat,
    title: 'Limited Plushie Drops',
    features: [
   'We design and produce high-quality plushies based on your characters, including optional in-game items tied to each purchase.'
    ],
  },
  {
    icon: Handshake,
    title: 'End-to-End Execution',
    features: [
      'Our team handles design, manufacturing, storefronts, payments, fulfillment, and customer support from start to finish.',
 
    ],
  },
  {
    icon: Wallet,
    title: 'Revenue Partnership',
    features: [
      'Earn additional income through a clear and fair revenue-sharing model with no upfront costs.'
    ],
  },
  {
    icon: Megaphone,
    title: 'Zero Operational Load',
    features: [
      'We manage the entire process so you can stay focused on building and growing your game.'
    ],
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(services.map(() => true));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
           Official Merchandise Partnerships
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Ready to extend your Roblox game beyond the screen? We help developers turn in-game characters into real-world products players love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white/[0.03] border border-white/10 rounded-3xl hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-500 hover:scale-[1.02] ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="inline-flex p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-cyan-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-white/60 group-hover:text-white/80 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
