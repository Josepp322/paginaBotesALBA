import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import BoatCard from "../components/BoatCard";
import { BOATS, STATS, MARCAS, ACCENT } from "../data/content";

function Marcas() {
  return (
    <section className="bg-white py-14 border-y border-[#123A56]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-[#6E8CA3] mb-8">
          Distribuidor autorizado de
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {MARCAS.map((m) => (
            <span key={m} className="font-serif text-xl md:text-2xl text-[#123A56]/70 tracking-wide">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsTeaser() {
  return (
    <section className="bg-[#eef7fd] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-4xl md:text-5xl text-[#2E86C1]">{s.value}</div>
            <div className="text-xs md:text-sm uppercase tracking-wide text-[#123A56]/60 mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CatalogoTeaser() {
  const featured = BOATS.slice(0, 3);
  return (
    <section id="catalogo" className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#1D6FA5] mb-3">Destacados</p>
            <h2 className="font-serif text-4xl text-[#123A56]">Algunas de nuestras embarcaciones</h2>
          </div>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-sm font-semibold rounded-full pl-5 pr-2 py-2 w-fit transition-colors"
            style={{ backgroundColor: ACCENT.blueVivid, color: ACCENT.blueVividText }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT.blueVividHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT.blueVivid)}
          >
            Ver catálogo completo
            <span className="bg-[#123A56]/10 p-1.5 rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((b) => (
            <BoatCard boat={b} key={b.name} accent="red" />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="bg-[#1B4965] py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-5">
          ¿Listo para encontrar tu próxima embarcación?
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Conoce quiénes somos o escríbenos directamente — un asesor te responde en menos de 24 horas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/nosotros"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-full px-7 py-3 transition-colors"
            style={{ backgroundColor: ACCENT.blueVivid, color: ACCENT.blueVividText }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT.blueVividHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT.blueVivid)}
          >
            Conócenos
          </Link>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold rounded-full px-7 py-3 transition-colors"
            style={{ backgroundColor: ACCENT.red }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT.redHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT.red)}
          >
            Contáctanos ahora
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Video/imagen de fondo del Hero — coloca tus archivos en /public/images */}
      <Hero videoSrc="/images/hero-video.mp4" imageSrc="/images/hero-fallback.jpg" />
      <Marcas />
      <CatalogoTeaser />
      <StatsTeaser />
      <CtaBanner />
    </>
  );
}
