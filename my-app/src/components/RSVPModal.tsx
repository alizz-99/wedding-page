import React from "react";

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-[#F7F4EE] w-full max-w-sm rounded-3xl p-6 shadow-2xl text-center">
        <div className="w-16 h-16 bg-[#4A5D4E] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
          <i className="fa-solid fa-heart"></i>
        </div>
        <h3 className="font-serif text-3xl text-[#4A5D4E] italic mb-2">
          ¡Gracias por confirmar!
        </h3>
        <p className="text-xs text-stone-600 leading-relaxed mb-6">
          Hemos recibido tu respuesta correctamente. ¡Estamos deseando compartir
          este día tan especial contigo!
        </p>
        <button
          onClick={onClose}
          className="w-full bg-[#4A5D4E] text-white py-3 rounded-xl text-xs uppercase tracking-wider font-medium hover:bg-[#38483B] transition cursor-pointer"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}