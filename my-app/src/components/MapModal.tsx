import React from "react";

interface MapModalProps {
  location: string | null;
  onClose: () => void;
}

export function MapModal({ location, onClose }: MapModalProps) {
  if (!location) return null;

  const title = location.split(",")[0];
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-[#F7F4EE] w-full max-w-sm rounded-3xl p-6 shadow-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-stone-800"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
        <div className="w-12 h-12 bg-[#4A5D4E]/10 text-[#4A5D4E] rounded-full flex items-center justify-center mx-auto mb-3">
          <i className="fa-solid fa-map-location-dot text-lg"></i>
        </div>
        <h3 className="font-serif text-2xl text-[#4A5D4E] font-bold mb-2">
          {title}
        </h3>
        <p className="text-xs text-stone-600 mb-6">{location}</p>

        <div className="space-y-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#4A5D4E] text-white py-3 rounded-xl text-xs uppercase tracking-wider font-medium hover:bg-[#38483B] transition"
          >
            <i className="fa-brands fa-google"></i>
            Abrir en Google Maps
          </a>
          <button
            onClick={onClose}
            className="w-full py-2 text-xs text-stone-500 uppercase tracking-wider cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}