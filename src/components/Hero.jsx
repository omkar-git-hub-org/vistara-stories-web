import { SITE_TAGLINE, ESTABLISHED_YEAR, IMAGES } from "../constants/theme";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-end justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt={IMAGES.hero.alt}
          src={IMAGES.hero.src}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
      </div>
      <div className="relative z-10 text-center px-margin-mobile mb-24 max-w-2xl">
        <p className="font-label-caps text-label-caps tracking-[0.3em] text-primary mb-stack-sm uppercase">
          ESTABLISHED {ESTABLISHED_YEAR}
        </p>
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-stack-md leading-none uppercase italic">
          {SITE_TAGLINE.split(" ").map((word, i) => (
            <span key={word}>
              {i === 1 && <br />}
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-md mx-auto">
          Professional Photography by Elara Studio. Fine art storytelling for the meticulous soul.
        </p>
        <button className="px-10 py-4 border border-primary text-label-caps font-label-caps text-primary hover:bg-primary hover:text-background transition-all duration-500 uppercase tracking-widest">
          Explore Work
        </button>
      </div>
    </section>
  );
}