export default function CoverCard({ event, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden relative reveal active rounded-lg"
    >
      <img
        className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
        src={event.coverPhoto}
        alt={`${event.type} event cover`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="font-label-caps text-label-caps text-primary bg-background/50 backdrop-blur-md px-3 py-1 uppercase">
          {event.type}
        </p>
      </div>
    </div>
  );
}