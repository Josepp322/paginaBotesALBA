import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ACCENT } from "../data/content";

export default function BoatCard({ boat, accent = "red" }) {
  const isBlue = accent === "blue";
  const accentBg = isBlue ? ACCENT.blueVivid : ACCENT.red;
  const accentHover = isBlue ? ACCENT.blueVividHover : ACCENT.redHover;
  const accentText = isBlue ? ACCENT.blueVividText : "white";

  return (
    <div className="group border border-[#2E86C1]/15 bg-white flex flex-col">
      <div className="relative h-56 bg-[#245478] overflow-hidden flex items-center justify-center">
        {boat.image ? (
          <img
            src={boat.image}
            alt={boat.name}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}
        <svg viewBox="0 0 200 100" className="w-2/3 opacity-80 relative z-0">
          <path d="M20 70 L40 40 L160 40 L180 70 Z" fill="none" stroke="#6BB9EC" strokeWidth="1.5" />
          <line x1="100" y1="40" x2="100" y2="15" stroke="#6BB9EC" strokeWidth="1.5" />
          <line x1="10" y1="70" x2="190" y2="70" stroke="#6BB9EC" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-baseline justify-between mb-1">
          <h3 className="font-serif text-xl text-[#123A56]">{boat.name}</h3>
          <span className="text-xs uppercase tracking-wide text-[#1D6FA5]">{boat.category}</span>
        </div>
        <div
          className="flex flex-wrap gap-x-4 gap-y-1 mt-4 pt-4 border-t border-dashed border-[#2E86C1]/25 text-[11px] uppercase tracking-wide text-[#6E8CA3]"
          style={{ fontFamily: "var(--mono)" }}
        >
          <span>LOA {boat.loa}</span>
          <span>·</span>
          <span>Manga {boat.beam}</span>
          <span>·</span>
          <span>Cap. {boat.capacity}</span>
          <span>·</span>
          <span>{boat.year}</span>
        </div>
        <div className="flex items-center justify-between mt-5 pt-1">
          <span className="font-serif text-lg text-[#1B4965]">{boat.price}</span>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            style={{ backgroundColor: accentBg, color: accentText }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = accentBg)}
          >
            Cotizar <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
