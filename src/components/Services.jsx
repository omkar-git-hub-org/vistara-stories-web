// =====================================================================
// SECTION: IMPORTS
// =====================================================================
import { useEffect, useRef, useState } from "react";
import Container from "./Container";

// =====================================================================
// SECTION: SERVICE DATA
// =====================================================================
const SERVICES = [
  {
    icon: "auto_awesome",
    title: "Wedding Art",
    description: "Immortalizing your legacy with an editorial eye and deep emotional resonance.",
    direction: "animate-slide-left",
  },
  {
    icon: "face_6",
    title: "Portraiture",
    description: "Revealing the authentic self through cinematic lighting and intimate direction.",
    direction: "animate-slide-bottom",
  },
  {
    icon: "auto_stories",
    title: "Brand Stories",
    description: "Elevating commercial narratives with visual authority and creative precision.",
    direction: "animate-slide-right",
  },
];

// =====================================================================
// SECTION: SUBCOMPONENT – Section Header
// =====================================================================
const SectionHeader = ({ title }) => (
  <div className="mt-0 mb-6 md:mb-8 text-center">
    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase italic">
      {title}
    </h2>
    <div className="w-20 h-px bg-primary mx-auto mt-3" />
  </div>
);

// =====================================================================
// SECTION: SUBCOMPONENT – Service Card
// =====================================================================
const ServiceCard = ({ service, isVisible }) => (
  <div
    className={`group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02] ${
      isVisible ? service.direction : "opacity-0"
    }`}
  >
    {/* Icon circle */}
    <div className="w-16 h-16 rounded-full border border-white/20 group-hover:border-primary transition-colors duration-500 flex items-center justify-center mb-5 bg-primary/5 group-hover:bg-primary/10">
      <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-500">
        {service.icon}
      </span>
    </div>

    <h3 className="font-headline-md text-headline-md text-on-surface mb-3 uppercase tracking-widest text-lg font-semibold">
      {service.title}
    </h3>
    <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed text-sm text-gray-300">
      {service.description}
    </p>
  </div>
);

// =====================================================================
// SECTION: MAIN COMPONENT – Services
// =====================================================================
export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    /* 
      🔥 UPDATED:
      - pt-0: Top padding completely eliminated to remove top gap
      - min-h-[50rem] md:min-h-0: Mobile height balanced cleanly without excess vertical space
    */
    <div className="w-full min-h-[50rem] md:min-h-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-0 pb-12 bg-background overflow-hidden">
      <section ref={sectionRef} className="relative w-full" id="services">
        <Container>
          <SectionHeader title="Curated Services" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                isVisible={isVisible}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Slower & Ultra-Smooth Custom CSS Animations (1.4s) */}
      <style>{`
        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-350px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(350px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideBottom {
          0% { opacity: 0; transform: translateY(120px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-left {
          animation: slideLeft 1.4s cubic-bezier(0.25, 1, 0.35, 1) forwards;
        }
        .animate-slide-right {
          animation: slideRight 1.4s cubic-bezier(0.25, 1, 0.35, 1) forwards;
        }
        .animate-slide-bottom {
          animation: slideBottom 1.4s cubic-bezier(0.25, 1, 0.35, 1) forwards;
        }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 32px;
          line-height: 1;
          display: inline-block;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </div>
  );
}