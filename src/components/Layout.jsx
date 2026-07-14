import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="w-full min-h-screen bg-[#eef7fd] flex flex-col" style={{ "--mono": "'IBM Plex Mono', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; }
        * { font-family: 'Inter', sans-serif; }
        .font-serif, .font-serif * { font-family: 'Fraunces', serif; }
        body { margin: 0; overflow-x: hidden; }
      `}</style>

      <ScrollToTop />

      {/* En Inicio, el Navbar transparente ya vive dentro del Hero (flota sobre el video). */}
      {!isHome && <Navbar variant="solid" />}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
