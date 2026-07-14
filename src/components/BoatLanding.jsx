import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Anchor,
  Compass,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUpRight,
  Star,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";

/*
  ALTAMAR — Venta de embarcaciones
  ---------------------------------
  Dependencies (install in your project):
    npm install motion lucide-react

  Palette: clear sky-over-marina. Soft celeste (#eef7fd) for light
  sections, medium sky blue for accents, deep blue for structure/dark
  sections. Bright, airy feel instead of the previous warm/dark tones.

  Drop in real media without touching layout code:
    - BOATS[i].image = "https://..."            (falls back to SVG icon)
    - TESTIMONIALS[i].avatar = "https://..."     (falls back to initials)
*/

const BRAND = "ALTAMAR";

const NAV_LINKS = [
  { label: "Catálogo", hasDropdown: false },
  { label: "Marcas", hasDropdown: true },
  { label: "Servicio", hasDropdown: false },
  { label: "Nosotros", hasDropdown: true },
];

const BOATS = [
  { name: "Serena 32", category: "Deportiva", year: "2026", loa: "9.75 m", beam: "2.99 m", capacity: "10", price: "USD 189,500", status: "Entrega inmediata", image: "/images/boat-serena-32.jpg" },
  { name: "Meridian 40", category: "Crucero", year: "2026", loa: "12.10 m", beam: "3.65 m", capacity: "14", price: "USD 412,000", status: "Entrega inmediata", image: "/images/boat-meridian-40.jpg" },
  { name: "Horizonte 26", category: "Bahía", year: "2025", loa: "7.92 m", beam: "2.59 m", capacity: "9", price: "USD 96,800", status: "En stock", image: "/images/boat-horizonte-26.jpg" },
  { name: "Corinto 48", category: "Flybridge", year: "2027", loa: "14.63 m", beam: "4.20 m", capacity: "16", price: "USD 758,000", status: "Próximamente", image: "/images/boat-corinto-48.jpg" },
  { name: "Vela Alta 28", category: "Wake / Surf", year: "2026", loa: "8.53 m", beam: "2.59 m", capacity: "12", price: "USD 214,300", status: "Entrega inmediata", image: "/images/boat-vela-alta-28.jpg" },
  { name: "Regata 60", category: "Yate", year: "2027", loa: "18.29 m", beam: "5.10 m", capacity: "20", price: "Bajo cotización", status: "Por encargo", image: "/images/boat-regata-60.jpg" },
];

const STATS = [
  { value: "30+", label: "años en el mercado" },
  { value: "1,200+", label: "embarcaciones entregadas" },
  { value: "9", label: "marcas representadas" },
  { value: "5", label: "puntos de atención" },
];

const WHY = [
  { icon: ShieldCheck, title: "Garantía de fábrica", text: "Cada unidad nueva llega con garantía directa del fabricante y servicio postventa certificado." },
  { icon: Compass, title: "Asesoría a la medida", text: "Te ayudamos a elegir la embarcación correcta según tu uso, tripulación y presupuesto real." },
  { icon: Award, title: "Marcas líderes", text: "Representamos astilleros reconocidos internacionalmente por su calidad y valor de reventa." },
];

const TESTIMONIALS = [
  { name: "Marco Antonio Vega", location: "Puerto Vallarta", text: "El proceso fue transparente de principio a fin. Nos guiaron en cada decisión y la entrega fue puntual.", avatar: "/images/avatar-marco-vega.jpg" },
  { name: "Renata Islas", location: "Cancún", text: "Compramos nuestra primera embarcación con ellos. La asesoría técnica marcó la diferencia frente a otros distribuidores.", avatar: "/images/avatar-renata-islas.jpg" },
  { name: "Diego Farías", location: "Valle de Bravo", text: "Servicio postventa impecable. Seguimos trabajando con el mismo equipo dos años después de la compra.", avatar: "/images/avatar-diego-farias.jpg" },
];

/* ---------- Hero building blocks (glassmorphism pattern) ---------- */

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      <div className="flex-1 hidden md:flex items-center gap-2">
        <Anchor className="w-5 h-5 text-white" strokeWidth={1.5} />
        <span className="font-serif text-lg tracking-wide text-white">{BRAND}</span>
      </div>

      <ul className="hidden md:flex items-center gap-8 text-white font-normal text-sm">
        {NAV_LINKS.map((item) => (
          <li
            key={item.label}
            className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
          >
            {item.label}
            {item.hasDropdown && (
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rotate-90" />
            )}
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <span className="font-serif tracking-tight text-xl text-white">{BRAND}</span>
      </div>

      <div className="flex-1 flex justify-end">
        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[#6BB9EC] text-[#123A56] rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[#8FCBF2] transition-colors group"
        >
          <div className="bg-[#123A56]/10 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#123A56]" />
          </div>
          <span className="text-xs md:text-sm font-medium">Agendar cita</span>
        </motion.a>
      </div>
    </nav>
  );
}

function BottomLeftCard() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/14 backdrop-blur-xl border border-white/20 flex flex-col gap-2 lg:gap-3 min-w-[150px] md:min-w-[160px] lg:min-w-[190px] w-fit"
    >
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">
          1,200+
        </span>
        <span className="text-[10px] md:text-[12px] font-normal text-white/75 uppercase tracking-wider">
          Embarcaciones entregadas
        </span>
      </div>
      <motion.a
        href="#contacto"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start group"
      >
        <div className="bg-[#2E86C1]/15 p-1 rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#2E86C1]" />
        </div>
        <span className="text-[13px] font-normal text-[#123A56]">Hablar con un asesor</span>
      </motion.a>
    </motion.div>
  );
}

function BottomRightCorner() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#eef7fd] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6"
    >
      <div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#eef7fd" />
        </svg>
      </div>
      <div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#eef7fd" />
        </svg>
      </div>

      <a
        href="#catalogo"
        className="bg-[#2E86C1]/10 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[#2E86C1]/20 shrink-0"
      >
        <ArrowUpRight className="text-[#2E86C1] w-5 h-5" />
      </a>
      <div className="flex flex-col">
        <span className="text-[16px] md:text-[20px] font-serif text-[#123A56]">
          Catálogo
        </span>
        <a
          href="#catalogo"
          className="flex items-center gap-1 text-[#123A56]/60 cursor-pointer hover:text-[#123A56]/80 transition-colors"
        >
          <span className="text-[12px] md:text-[15px] font-normal">Ver inventario</span>
          <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </a>
      </div>
    </motion.div>
  );
}

function Hero({ videoSrc = "", imageSrc = "" }) {
  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#eef7fd]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center bg-[#1B4965] group">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="Atardecer en la bahía"
            className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
          />
        ) : (
          <svg
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMax slice"
          >
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0D2E4A" />
                <stop offset="35%" stopColor="#2E5F8A" />
                <stop offset="65%" stopColor="#1D6FA5" />
                <stop offset="100%" stopColor="#BFE3FA" />
              </linearGradient>
              <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A90C4" />
                <stop offset="35%" stopColor="#1B4965" />
                <stop offset="100%" stopColor="#1B4965" />
              </linearGradient>
              <radialGradient id="sunglow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#BFE3FA" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#BFE3FA" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="1440" height="900" fill="url(#sky)" />
            <circle cx="1180" cy="470" r="220" fill="url(#sunglow)" />
            <circle cx="1180" cy="470" r="90" fill="#D6EEFB" opacity="0.9" />
            <rect x="0" y="540" width="1440" height="360" fill="url(#sea)" />
            <path d="M560 600 L 720 460 L 880 600 Z" fill="#1B4965" opacity="0.92" />
            <rect x="700" y="590" width="40" height="90" fill="#1B4965" opacity="0.92" />
          </svg>
        )}

        <div className="absolute inset-0 bg-[#1B4965]/25 z-[1]" />

        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar />

          <div className="flex-1 w-full flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-normal text-white mb-2 tracking-tight leading-[1.05]"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.25)" }}
            >
              Cada embarcación,
              <br />
              una promesa de horizonte.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-xl font-normal"
            >
              Venta de lanchas, yates y embarcaciones deportivas. Asesoría experta,
              garantía de fábrica y entrega en los principales destinos náuticos.
            </motion.p>
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  );
}

/* ---------- Rest of the page ---------- */

function SpecPlate({ boat }) {
  return (
    <div className="group border border-[#2E86C1]/15 bg-white">
      <div className="relative h-56 bg-[#245478] overflow-hidden flex items-center justify-center">
        {boat.image ? (
          <img src={boat.image} alt={boat.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <svg viewBox="0 0 200 100" className="w-2/3 opacity-80">
            <path d="M20 70 L40 40 L160 40 L180 70 Z" fill="none" stroke="#6BB9EC" strokeWidth="1.5" />
            <line x1="100" y1="40" x2="100" y2="15" stroke="#6BB9EC" strokeWidth="1.5" />
            <line x1="10" y1="70" x2="190" y2="70" stroke="#6BB9EC" strokeWidth="1.5" />
          </svg>
        )}
      </div>
      <div className="p-6">
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
        <div className="flex items-center justify-between mt-5">
          <span className="font-serif text-lg text-[#1B4965]">{boat.price}</span>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1 text-sm text-[#1D6FA5] group-hover:text-[#2E86C1] transition-colors"
          >
            Consultar <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Catalogo() {
  return (
    <section id="catalogo" className="bg-[#eef7fd] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#1D6FA5] mb-3">Catálogo</p>
            <h2 className="font-serif text-4xl text-[#123A56]">Embarcaciones disponibles</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-[#1B4965] border-b border-[#1B4965] pb-1 w-fit">
            Ver inventario completo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOATS.map((b) => (
            <SpecPlate boat={b} key={b.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Marcas() {
  const marcas = ["Nordic Craft", "Bluewater", "Marea Yachts", "Coastwise", "Regatta Marine", "Windline"];
  return (
    <section className="bg-white py-14 border-y border-[#123A56]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-[#6E8CA3] mb-8">
          Distribuidor autorizado de
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {marcas.map((m) => (
            <span key={m} className="font-serif text-xl md:text-2xl text-[#123A56]/70 tracking-wide">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
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

function PorQue() {
  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {WHY.map((w) => (
          <div key={w.title}>
            <w.icon className="w-8 h-8 text-[#2E86C1] mb-5" strokeWidth={1.4} />
            <h3 className="font-serif text-xl text-[#123A56] mb-3">{w.title}</h3>
            <p className="text-sm text-[#5B7A91] leading-relaxed">{w.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonios() {
  return (
    <section className="bg-[#eef7fd] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[#1D6FA5] mb-3 text-center">Clientes</p>
        <h2 className="font-serif text-4xl text-[#123A56] text-center mb-14">
          Lo que dicen quienes ya navegan con nosotros
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => {
            const initials = t.name.split(" ").slice(0, 2).map((n) => n[0]).join("");
            return (
              <div key={t.name} className="bg-white p-8 border border-[#2E86C1]/15">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#6BB9EC] text-[#6BB9EC]" />
                  ))}
                </div>
                <p className="text-sm text-[#123A56]/80 leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
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

function Contacto() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contacto" className="bg-[#1B4965] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#6BB9EC] mb-3">Contacto</p>
          <h2 className="font-serif text-4xl text-white mb-6">Cuéntanos qué embarcación buscas</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-md">
            Un asesor especializado te contactará en menos de 24 horas para resolver tus dudas
            y coordinar una visita a nuestras instalaciones.
          </p>
          <div className="space-y-5 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#6BB9EC]" />
              <span>+52 (55) 5555 0100</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#6BB9EC]" />
              <span>contacto@altamar.mx</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#6BB9EC]" />
              <span>Ciudad de México · Cancún · Puerto Vallarta</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <ShieldCheck className="w-10 h-10 text-[#6BB9EC] mb-4" />
              <p className="text-white font-serif text-xl mb-2">Mensaje enviado</p>
              <p className="text-white/60 text-sm">Gracias por escribirnos, un asesor te contactará pronto.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wide text-white/60 mb-2">Nombre</label>
                <input
                  required
                  type="text"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6BB9EC]"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-white/60 mb-2">Teléfono</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6BB9EC]"
                    placeholder="+52"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-white/60 mb-2">Correo</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6BB9EC]"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-white/60 mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6BB9EC]"
                  placeholder="Cuéntanos qué tipo de embarcación buscas"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2E86C1] text-white py-3 text-sm tracking-wide font-medium hover:bg-[#4295CE] transition-colors"
              >
                Enviar mensaje
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1B4965] border-t border-white/10 py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex items-center gap-2">
          <Anchor className="w-5 h-5 text-[#6BB9EC]" strokeWidth={1.5} />
          <span className="font-serif text-xl text-white">{BRAND}</span>
        </div>
        <nav className="flex flex-wrap gap-8 text-sm text-white/60">
          <a href="#catalogo" className="hover:text-white transition-colors">Catálogo</a>
          <a href="#" className="hover:text-white transition-colors">Marcas</a>
          <a href="#" className="hover:text-white transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </nav>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {BRAND}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default function BoatLanding() {
  return (
    <div className="w-full min-h-screen bg-[#eef7fd]" style={{ "--mono": "'IBM Plex Mono', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; }
        * { font-family: 'Inter', sans-serif; }
        .font-serif, .font-serif * { font-family: 'Fraunces', serif; }
        body { margin: 0; overflow-x: hidden; }
      `}</style>

      {/* Video de fondo del Hero (gana si ambos están presentes) + imagen de respaldo */}
      <Hero videoSrc="/images/hero-video.mp4" imageSrc="/images/hero-fallback.jpg" />

      <Marcas />
      <Catalogo />
      <Stats />
      <PorQue />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  );
}