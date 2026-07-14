import { IMAGES } from "../constants/theme";

export default function About() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background grid grid-cols-1 md:grid-cols-2 items-center gap-20">
      <div className="order-2 md:order-1 reveal">
        <p className="font-label-caps text-label-caps text-primary tracking-widest mb-stack-sm uppercase">
          THE VISIONARY
        </p>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase italic mb-stack-lg">
          Meet Elara
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
          With over a decade of traversing the globe capturing the unseen, my work is a dialogue
          between light and shadow. I don't just take photos; I curate moments of eternal silence.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg italic">
          "Photography is the only language that can be understood anywhere in the world."
        </p>
        <button className="px-8 py-3 border-b-2 border-primary text-label-caps font-label-caps text-primary hover:tracking-[0.2em] transition-all duration-500 uppercase">
          Read More
        </button>
      </div>

      <div className="order-1 md:order-2 flex justify-center reveal">
        <div className="relative w-full max-w-md aspect-[3/4] border border-outline-variant p-4">
          <img
            className="w-full h-full object-cover"
            alt={IMAGES.elaraPortrait.alt}
            src={IMAGES.elaraPortrait.src}
          />
          <div className="absolute -bottom-8 -left-8 bg-surface border border-outline-variant p-6 hidden md:block">
            <p className="font-display-lg text-headline-lg text-primary leading-none">10+</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant">
              YEARS OF
              <br />
              EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}