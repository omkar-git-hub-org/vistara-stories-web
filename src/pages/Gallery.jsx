import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import CoverCard from "../components/CoverCard";
import EventLightbox from "../components/EventLightbox";
import { useEvents } from "../hooks/useEvents";

export default function Gallery() {
  const { events, loading, error } = useEvents();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeType, setActiveType] = useState(searchParams.get("type") || "ALL");
  const [activeEvent, setActiveEvent] = useState(null);

  const types = useMemo(() => {
    const unique = Array.from(new Set(events.map((e) => e.type)));
    return ["ALL", ...unique];
  }, [events]);

  useEffect(() => {
    const urlType = searchParams.get("type");
    if (urlType) setActiveType(urlType);
  }, [searchParams]);

  const filteredEvents = useMemo(() => {
    if (activeType === "ALL") return events;
    return events.filter((e) => e.type === activeType);
  }, [events, activeType]);

  const handleTypeClick = (type) => {
    setActiveType(type);
    if (type === "ALL") setSearchParams({});
    else setSearchParams({ type });
  };

  return (
    <div className="antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop bg-background">
        <Container>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase italic mb-stack-lg">
            Full Portfolio
          </h1>

          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 mb-stack-lg">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeClick(type)}
                className={`px-5 py-2 rounded-full text-label-caps font-label-caps uppercase tracking-widest whitespace-nowrap border transition-all duration-300 ${
                  activeType === type
                    ? "bg-primary text-background border-primary"
                    : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {loading && (
            <p className="font-body-md text-body-md text-on-surface-variant">Loading events…</p>
          )}
          {error && (
            <p className="font-body-md text-body-md text-error">Couldn't load events right now.</p>
          )}
          {!loading && !error && filteredEvents.length === 0 && (
            <p className="font-body-md text-body-md text-on-surface-variant">
              No events found for this category yet.
            </p>
          )}

          {!loading && !error && filteredEvents.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
              {filteredEvents.map((event) => (
                <CoverCard
                  key={event.eventId}
                  event={event}
                  onClick={() => setActiveEvent(event)}
                />
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />

      {activeEvent && (
        <EventLightbox event={activeEvent} onClose={() => setActiveEvent(null)} />
      )}
    </div>
  );
}