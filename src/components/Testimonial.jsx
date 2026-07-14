export default function Testimonial() {
  return (
    <section className="py-section-gap bg-surface-container-highest px-margin-mobile flex items-center justify-center text-center">
      <div className="max-w-3xl reveal">
        <span
          className="material-symbols-outlined text-primary-fixed text-5xl mb-stack-md"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          format_quote
        </span>
        <blockquote className="font-headline-md text-headline-md text-on-surface italic leading-relaxed mb-stack-lg">
          "Elara has an uncanny ability to find beauty in the most unexpected places. Her work for
          our wedding didn't just document the day; it transformed it into a masterpiece of
          memory."
        </blockquote>
        <cite className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
          — JULIAN &amp; SOPHIA VANCE
        </cite>
      </div>
    </section>
  );
}