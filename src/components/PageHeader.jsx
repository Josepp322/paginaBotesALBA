import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ACCENT } from "../data/content";

/**
 * Banner para páginas que no son el Inicio.
 * ctaAccent: "red" | "blue" -> color del botón de alto contraste (opcional).
 * bgImage: ruta opcional de foto de fondo (marina/embarcaciones) — si no se pasa, usa el degradado SVG.
 */
export default function PageHeader({ eyebrow, title, subtitle, ctaLabel, ctaTo, ctaAccent = "red", bgImage }) {
  const isBlue = ctaAccent === "blue";
  const accentBg = isBlue ? ACCENT.blueVivid : ACCENT.red;
  const accentHover = isBlue ? ACCENT.blueVividHover : ACCENT.redHover;
  const accentText = isBlue ? ACCENT.blueVividText : "white";

  return (
    <section className="relative bg-[#1B4965] overflow-hidden">
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-45"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#123A56]/80 via-[#123A56]/60 to-[#1B4965]/90" />
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="pageHeaderGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#123A56" />
            <stop offset="100%" stopColor="#1B4965" />
          </linearGradient>
        </defs>
        <path d="M0 320 Q 360 260 720 320 T 1440 320 V400 H0 Z" fill="#2E86C1" opacity="0.25" />
        <path d="M0 360 Q 360 310 720 360 T 1440 360 V400 H0 Z" fill="#6BB9EC" opacity="0.2" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          {eyebrow && (
            <p className="text-xs tracking-[0.3em] uppercase text-[#6BB9EC] mb-3">{eyebrow}</p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 max-w-2xl leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed">{subtitle}</p>
          )}
        </div>

        {ctaLabel && ctaTo && (
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-2 rounded-full pl-2 pr-6 py-2 text-sm font-semibold shadow-lg transition-colors w-fit shrink-0"
            style={{ backgroundColor: accentBg, color: accentText }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = accentBg)}
          >
            <span className={`p-1.5 rounded-full flex items-center justify-center ${isBlue ? "bg-[#123A56]/10" : "bg-white/20"}`}>
              <ArrowUpRight className="w-4 h-4" />
            </span>
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
