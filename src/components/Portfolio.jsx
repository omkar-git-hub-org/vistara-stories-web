import { IMAGES } from "../constants/theme";

const FILTERS = ["ALL", "Weddings", "Portraits", "Fashion"];

export default function Portfolio() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-stack-lg gap-4">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase italic">
          Portfolio
        </h2>
        <div className="flex gap-stack-lg overflow-x-auto pb-4 no-scrollbar">
          {FILTERS.map((filter, i) =>
            i === 0 ? (
              <span
                key={filter}
                className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 cursor-pointer"
              >
                {filter}
              </span>
            ) : (
              <span
                key={filter}
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors cursor-pointer strikethrough-hover uppercase"
              >
                {filter}
              </span>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Large Vertical */}
        <div className="md:col-span-8 group cursor-pointer overflow-hidden relative reveal">
          <img
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
            alt={IMAGES.cathedral.alt}
            src={IMAGES.cathedral.src}
          />
          <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="font-label-caps text-label-caps text-primary bg-background/50 backdrop-blur-md px-3 py-1">
              THE CATHEDRAL UNION
            </p>
          </div>
        </div>

        {/* Small Grid Items */}
        <div className="md:col-span-4 flex flex-col gap-gutter">
          <div className="group cursor-pointer overflow-hidden relative reveal">
            <img
              className="w-full aspect-[1/1] object-cover transition-transform duration-700 group-hover:scale-105"
              alt={IMAGES.fashionCloseup.alt}
              src={IMAGES.fashionCloseup.src}
            />
          </div>
          <div className="group cursor-pointer overflow-hidden relative reveal">
            <img
              className="w-full aspect-[1/1] object-cover transition-transform duration-700 group-hover:scale-105"
              alt={IMAGES.mountains.alt}
              src={IMAGES.mountains.src}
            />
          </div>
        </div>

        {/* Horizontal Row */}
        <div className="md:col-span-12 group cursor-pointer overflow-hidden relative reveal mt-gutter">
          <img
            className="w-full aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-105"
            alt={IMAGES.event.alt}
            src={IMAGES.event.src}
          />
        </div>
      </div>
    </section>
  );
}