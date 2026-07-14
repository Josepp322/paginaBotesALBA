import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import Navbar from "./Navbar";

const MotionLink = motion.create(Link);

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
      <MotionLink
        to="/contacto"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start group"
      >
        <div className="bg-[#2E86C1]/15 p-1 rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#2E86C1]" />
        </div>
        <span className="text-[13px] font-normal text-[#123A56]">Hablar con un asesor</span>
      </MotionLink>
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

      <Link
        to="/catalogo"
        className="bg-[#2E86C1]/10 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[#2E86C1]/20 shrink-0"
      >
        <ArrowUpRight className="text-[#2E86C1] w-5 h-5" />
      </Link>
      <div className="flex flex-col">
        <span className="text-[16px] md:text-[20px] font-serif text-[#123A56]">
          Catálogo
        </span>
        <Link
          to="/catalogo"
          className="flex items-center gap-1 text-[#123A56]/60 cursor-pointer hover:text-[#123A56]/80 transition-colors"
        >
          <span className="text-[12px] md:text-[15px] font-normal">Ver inventario</span>
          <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Hero({ videoSrc = "", imageSrc = "" }) {
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
          <Navbar variant="transparent" />

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

            <a
              href="https://www.linkedin.com/in/alba-ingenier%C3%ADa-de-desarrollo-42a3493ab/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Br%2F%2FxM0GsTqS3xaRIWRPWvA%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="mt-8 md:mt-10 text-[10px] md:text-[11px] text-white/50 hover:text-white/80 tracking-wide transition-colors"
            >
              Powered by ALBA
            </a>
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  );
}
