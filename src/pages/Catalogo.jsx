import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import BoatCard from "../components/BoatCard";
import { BOATS, BOAT_CATEGORIES, ACCENT, PAGE_IMAGES } from "../data/content";

export default function Catalogo() {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filtered =
    activeCategory === "Todas" ? BOATS : BOATS.filter((b) => b.category === activeCategory);

  return (
    <>
      <PageHeader
        eyebrow="Catálogo"
        title="Embarcaciones disponibles para entrega y por encargo"
        subtitle="Explora nuestro inventario actual. Cada ficha incluye especificaciones técnicas reales y precio de referencia — cotiza en un clic."
        ctaLabel="Cotizar con un asesor"
        ctaTo="/contacto"
        ctaAccent="red"
        bgImage={PAGE_IMAGES.catalogoHeader}
      />

      <section className="bg-[#eef7fd] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-12">
            {BOAT_CATEGORIES.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="text-sm px-5 py-2 rounded-full border transition-colors"
                  style={
                    active
                      ? { backgroundColor: ACCENT.blueVivid, borderColor: ACCENT.blueVivid, color: ACCENT.blueVividText }
                      : { backgroundColor: "white", borderColor: "rgba(46,134,193,0.25)", color: "#123A56" }
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-[#5B7A91] py-20">
              No hay embarcaciones en esta categoría por ahora. Escríbenos y te avisamos apenas llegue una.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((b) => (
                <BoatCard boat={b} key={b.name} accent="red" />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-10 overflow-hidden bg-[#1B4965]">
        <img
          src={PAGE_IMAGES.catalogoCtaBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="absolute inset-0 bg-[#123A56]/80" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-white mb-4">
            ¿No encuentras exactamente lo que buscas?
          </h2>
          <p className="text-white/70 text-sm md:text-base mb-8 leading-relaxed">
            Trabajamos también con pedidos por encargo directo a fábrica. Cuéntanos qué necesitas
            y te armamos una propuesta a la medida.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold rounded-full px-8 py-3 transition-colors"
            style={{ backgroundColor: ACCENT.red }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT.redHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT.red)}
          >
            Hablar con un asesor
          </Link>
        </div>
      </section>
    </>
  );
}
