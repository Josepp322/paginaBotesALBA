import React, { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { CONTACT_INFO, ACCENT } from "../data/content";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form
      id="contacto-form"
      onSubmit={handleSubmit}
      className="bg-white border border-[#2E86C1]/15 p-8 shadow-[0_10px_40px_rgba(18,58,86,0.08)]"
    >
      {sent ? (
        <div className="h-full flex flex-col items-center justify-center text-center py-16">
          <ShieldCheck className="w-10 h-10 mb-4" style={{ color: ACCENT.red }} />
          <p className="text-[#123A56] font-serif text-xl mb-2">Mensaje enviado</p>
          <p className="text-[#5B7A91] text-sm">Gracias por escribirnos, un asesor te contactará pronto.</p>
        </div>
      ) : (
        <div className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wide text-[#6E8CA3] mb-2">Nombre</label>
            <input
              required
              type="text"
              className="w-full bg-[#eef7fd] border border-[#2E86C1]/20 px-4 py-3 text-[#123A56] text-sm focus:outline-none focus:border-[#2E86C1]"
              placeholder="Tu nombre completo"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wide text-[#6E8CA3] mb-2">Teléfono</label>
              <input
                required
                type="tel"
                className="w-full bg-[#eef7fd] border border-[#2E86C1]/20 px-4 py-3 text-[#123A56] text-sm focus:outline-none focus:border-[#2E86C1]"
                placeholder="+52"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide text-[#6E8CA3] mb-2">Correo</label>
              <input
                required
                type="email"
                className="w-full bg-[#eef7fd] border border-[#2E86C1]/20 px-4 py-3 text-[#123A56] text-sm focus:outline-none focus:border-[#2E86C1]"
                placeholder="tu@correo.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide text-[#6E8CA3] mb-2">
              ¿Qué embarcación buscas?
            </label>
            <textarea
              rows={4}
              className="w-full bg-[#eef7fd] border border-[#2E86C1]/20 px-4 py-3 text-[#123A56] text-sm focus:outline-none focus:border-[#2E86C1]"
              placeholder="Cuéntanos qué tipo de embarcación buscas, uso y presupuesto aproximado"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white py-3.5 text-sm tracking-wide font-semibold transition-colors"
            style={{ backgroundColor: ACCENT.red }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT.redHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT.red)}
          >
            Enviar mensaje
          </button>
        </div>
      )}
    </form>
  );
}

export default function Contacto() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Cuéntanos qué embarcación buscas"
        subtitle="Un asesor especializado te contactará en menos de 24 horas para resolver tus dudas y coordinar una visita a nuestras instalaciones."
      />

      <section className="bg-[#eef7fd] py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#1D6FA5] mb-3">Datos directos</p>
            <h2 className="font-serif text-3xl text-[#123A56] mb-6">Escríbenos o pasa a vernos</h2>
            <p className="text-[#5B7A91] text-sm leading-relaxed mb-10 max-w-md">
              Atendemos citas con y sin previa cita en nuestras tres ubicaciones. Si prefieres, marca
              directamente o escríbenos por correo.
            </p>
            <div className="space-y-5 text-sm text-[#123A56]/80">
              <a href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 hover:text-[#123A56] transition-colors w-fit">
                <Phone className="w-4 h-4 text-[#2E86C1]" />
                {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-[#123A56] transition-colors w-fit">
                <Mail className="w-4 h-4 text-[#2E86C1]" />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#2E86C1]" />
                <span>{CONTACT_INFO.locations}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 text-white text-sm font-semibold rounded-full px-7 py-3 transition-colors w-fit"
              style={{ backgroundColor: ACCENT.blueVivid }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT.blueVividHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT.blueVivid)}
            >
              Escribir por WhatsApp
            </a>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
