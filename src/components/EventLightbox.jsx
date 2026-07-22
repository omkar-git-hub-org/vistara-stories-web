import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function EventLightbox({ event, onClose }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const photos = event.photos || [];

  const goNext = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % photos.length);
  };
  const goPrev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos.length]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center px-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-on-surface hover:text-primary transition-colors z-10"
        aria-label="Close"
      >
        <span className="material-symbols-outlined text-4xl">close</span>
      </button>

      <div className="absolute top-6 left-6 font-label-caps text-label-caps text-primary uppercase tracking-widest">
        {event.type} · {index + 1}/{photos.length}
      </div>

      <div className="relative w-full max-w-3xl aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-lg flex items-center justify-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={index}
            src={photos[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full object-contain"
            alt={`${event.type} photo ${index + 1}`}
          />
        </AnimatePresence>

        {photos.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/60 hover:bg-primary hover:text-background text-primary flex items-center justify-center transition-colors"
              aria-label="Previous photo"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/60 hover:bg-primary hover:text-background text-primary flex items-center justify-center transition-colors"
              aria-label="Next photo"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <div className="flex gap-2 mt-6 overflow-x-auto no-scrollbar max-w-full px-4">
          {photos.map((p, i) => (
            <button
              key={p}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${
                i === index ? "border-primary" : "border-transparent opacity-60"
              }`}
            >
              <img src={p} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}