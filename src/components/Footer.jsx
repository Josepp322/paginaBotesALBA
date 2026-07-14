import React from "react";
import { Link } from "react-router-dom";
import { Anchor, Phone, Mail, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS, CONTACT_INFO } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[#1B4965] border-t border-white/10 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Anchor className="w-5 h-5 text-[#6BB9EC]" strokeWidth={1.5} />
            <span className="font-serif text-xl text-white">{BRAND}</span>
          </Link>
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Venta de lanchas, yates y embarcaciones deportivas. Asesoría experta y garantía de fábrica.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#6BB9EC] mb-4">Navegación</p>
          <nav className="flex flex-col gap-3 text-sm text-white/60">
            {NAV_LINKS.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-white transition-colors w-fit">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#6BB9EC] mb-4">Contacto</p>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <a href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 hover:text-white transition-colors w-fit">
              <Phone className="w-4 h-4 text-[#6BB9EC] shrink-0" />
              {CONTACT_INFO.phone}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors w-fit">
              <Mail className="w-4 h-4 text-[#6BB9EC] shrink-0" />
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#6BB9EC] mb-4">Ubicaciones</p>
          <div className="flex items-start gap-2 text-sm text-white/60">
            <MapPin className="w-4 h-4 text-[#6BB9EC] shrink-0 mt-0.5" />
            <span>{CONTACT_INFO.locations}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {BRAND}. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-xs text-white/40">
          <a href="#" className="hover:text-white/70 transition-colors">Aviso de privacidad</a>
          <a href="#" className="hover:text-white/70 transition-colors">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
}
