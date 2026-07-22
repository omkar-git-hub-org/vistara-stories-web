export default function ContactCTA() {
  return (
    <section id="contact" className="py-section-gap px-margin-mobile bg-background relative overflow-hidden">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface uppercase italic mb-stack-md leading-none">
          Let's Create <br /> Magic
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
          Now booking for 2024 &amp; 2025 worldwide. Limited seasonal slots available for bespoke
          commissions.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-full md:w-auto px-12 py-5 bg-primary text-background font-label-caps text-label-caps font-bold hover:bg-primary-fixed transition-all duration-300 uppercase tracking-[0.2em]">
            Book a Session
          </button>
          <button className="w-full md:w-auto px-12 py-5 border border-outline text-on-surface font-label-caps text-label-caps hover:border-primary hover:text-primary transition-all duration-300 uppercase tracking-[0.2em]">
            Contact Studio
          </button>
        </div>
      </div>
    </section>
  );
}