import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Compass, Award, Star } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { WHY, STATS, TESTIMONIALS, TIMELINE, ACCENT } from "../data/content";

const ICONS = { ShieldCheck, Compass, Award };

function PorQue() {
  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {WHY.map((w) => {
          const Icon = ICONS[w.icon];
          return (
            <div key={w.title}>
              <Icon className="w-8 h-8 text-[#2E86C1] mb-5" strokeWidth={1.4} />
              <h3 className="font-serif text-xl text-[#123A56] mb-3">{w.title}</h3>
              <p className="text-sm text-[#5B7A91] leading-relaxed">{w.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section className="bg-[#eef7fd] py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[#1D6FA5] mb-3 text-center">
          Nuestra historia
        </p>
        <h2 className="font-serif text-4xl text-[#123A56] text-center mb-16">
          Más de tres décadas conectando personas con el mar
        </h2>
        <div className="space-y-10">
          {TIMELINE.map((t, i) => (
            <div key={t.year} className="flex gap-6 md:gap-10">
              <div className="shrink-0 w-16 md:w-24 text-right">
                <span className="font-serif text-xl md:text-2xl text-[#2E86C1]">{t.year}</span>
              </div>
              <div className="relative pl-6 border-l border-[#2E86C1]/25 pb-2">
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#2E86C1]" />
                <p className="text-sm md:text-base text-[#123A56]/80 leading-relaxed">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-[#1B4965] py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-4xl md:text-5xl text-[#6BB9EC]">{s.value}</div>
            <div className="text-xs md:text-sm uppercase tracking-wide text-white/60 mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonios() {
  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[#1D6FA5] mb-3 text-center">Clientes</p>
        <h2 className="font-serif text-4xl text-[#123A56] text-center mb-14">
          Lo que dicen quienes ya navegan con nosotros
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => {
            const initials = t.name.split(" ").slice(0, 2).map((n) => n[0]).join("");
            return (
              <div key={t.name} className="bg-[#eef7fd] p-8 border border-[#2E86C1]/15">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#6BB9EC] text-[#6BB9EC]" />
                  ))}
                </div>
                <p className="text-sm text-[#123A56]/80 leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-9 h-9 rounded-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-[#2E86C1]/15 text-[#1D6FA5] text-xs font-medium flex items-center justify-center">
                      {initials}
                    </div>
                  )}
                  <div>
                    <p className="font-serif text-base text-[#123A56] leading-tight">{t.name}</p>
                    <p className="text-xs uppercase tracking-wide text-[#6E8CA3]">{t.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="bg-[#eef7fd] py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#123A56] mb-5">
          Conócenos en persona, agenda una visita
        </h2>
        <p className="text-[#5B7A91] text-sm md:text-base mb-9 max-w-lg mx-auto leading-relaxed">
          Visita cualquiera de nuestras instalaciones y platica con un asesor sobre la embarcación
          que mejor se adapta a ti.
        </p>
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold rounded-full px-8 py-3 transition-colors"
          style={{ backgroundColor: ACCENT.red }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT.redHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT.red)}
        >
          Agendar una visita
        </Link>
      </div>
    </section>
  );
}

export default function Nosotros() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title="Gente de mar, vendiendo embarcaciones desde 1994"
        subtitle="Somos distribuidores autorizados de marcas líderes, con asesoría técnica real y servicio postventa propio en cada punto de atención."
        ctaLabel="Ver catálogo"
        ctaTo="/catalogo"
        ctaAccent="blue"
      />
      <PorQue />
      <Historia />
      <Stats />
      <Testimonios />
      <CtaBanner />
    </>
  );
}
