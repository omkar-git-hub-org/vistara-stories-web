const SERVICES = [
  {
    icon: "auto_awesome",
    title: "Wedding Art",
    description: "Immortalizing your legacy with an editorial eye and deep emotional resonance.",
    delay: "0ms",
  },
  {
    icon: "face_6",
    title: "Portraiture",
    description: "Revealing the authentic self through cinematic lighting and intimate direction.",
    delay: "200ms",
  },
  {
    icon: "auto_stories",
    title: "Brand Stories",
    description: "Elevating commercial narratives with visual authority and creative precision.",
    delay: "400ms",
  },
];

export default function Services() {
  return (
    <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop">
      <div className="max-w-4xl mx-auto text-center mb-section-gap">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase italic mb-stack-md">
          Curated Services
        </h2>
        <div className="w-20 h-px bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center text-center reveal"
            style={{ transitionDelay: service.delay }}
          >
            <div className="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center mb-stack-lg group hover:border-primary transition-colors duration-500">
              <span className="material-symbols-outlined text-primary-fixed text-3xl">
                {service.icon}
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md uppercase">
              {service.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}