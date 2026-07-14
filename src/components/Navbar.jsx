import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { Anchor, ArrowUpRight, Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "../data/content";

/**
 * variant="transparent" -> se usa flotando sobre el video del Hero (solo Inicio).
 * variant="solid"       -> barra fija de color navy para el resto de las páginas.
 */
export default function Navbar({ variant = "solid" }) {
  const [open, setOpen] = useState(false);
  const isTransparent = variant === "transparent";

  return (
    <nav
      className={`w-full z-30 ${
        isTransparent
          ? "relative"
          : "sticky top-0 bg-[#1B4965] shadow-[0_2px_20px_rgba(18,58,86,0.15)]"
      }`}
    >
      <div className="flex items-center justify-between py-5 px-6 md:px-10 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Anchor className="w-5 h-5 text-white" strokeWidth={1.5} />
          <span className="font-serif text-lg tracking-wide text-white">{BRAND}</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-white font-normal text-sm">
          {NAV_LINKS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `cursor-pointer transition-opacity hover:opacity-70 ${
                    isActive ? "opacity-100 border-b border-[#6BB9EC] pb-0.5" : "opacity-80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:block"
          >
            <Link
              to="/contacto"
              className="flex items-center bg-[#6BB9EC] text-[#123A56] rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[#8FCBF2] transition-colors group"
            >
              <div className="bg-[#123A56]/10 p-1 md:p-1.5 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#123A56]" />
              </div>
              <span className="text-xs md:text-sm font-medium">Agendar cita</span>
            </Link>
          </motion.div>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#123A56] px-6 pb-6 pt-2 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm py-1 ${isActive ? "text-[#6BB9EC]" : "text-white/85"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="mt-1 text-center bg-[#6BB9EC] text-[#123A56] rounded-full py-2 text-sm font-medium"
          >
            Agendar cita
          </Link>
        </div>
      )}
    </nav>
  );
}
