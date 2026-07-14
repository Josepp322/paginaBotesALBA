// Datos y paleta compartidos por todas las páginas.
// Cambia aquí textos, precios, rutas de imágenes, etc. — se refleja en todo el sitio.

export const BRAND = "ALTAMAR";

// Colores base (paleta "cielo sobre marina" — no tocar sin revisar todas las páginas)
export const COLORS = {
  bgLight: "#eef7fd",
  navy: "#123A56",
  navyDeep: "#1B4965",
  blue: "#2E86C1",
  blueSoft: "#6BB9EC",
  blueMid: "#1D6FA5",
  slate: "#6E8CA3",
  slateSoft: "#5B7A91",
};

// Acentos para botones en todo el sitio.
// "red" = botón oscuro con texto blanco (acción principal / cotizar, contactar).
// "blue" = mismo celeste del botón "Agendar cita" del navbar, con texto navy — para que
// todos los botones azules del sitio (inicio y páginas interiores) se vean consistentes.
export const ACCENT = {
  red: "#E1483C",
  redHover: "#C93A2F",
  blueVivid: "#6BB9EC",
  blueVividHover: "#8FCBF2",
  blueVividText: "#123A56",
};

// Rutas de imágenes de las páginas interiores (banners y fotos de sección).
// Coloca los archivos en /public/images con estos nombres exactos.
export const PAGE_IMAGES = {
  catalogoHeader: "/images/page-header-catalogo.jpg",
  nosotrosHeader: "/images/page-header-nosotros.jpg",
  contactoHeader: "/images/page-header-contacto.jpg",
  nosotrosEquipo: "/images/nosotros-equipo.jpg",
  contactoShowroom: "/images/contacto-showroom.jpg",
  catalogoCtaBg: "/images/catalogo-cta-bg.jpg",
};

export const NAV_LINKS = [
  { label: "Inicio", path: "/" },
  { label: "Catálogo", path: "/catalogo" },
  { label: "Nosotros", path: "/nosotros" },
  { label: "Contáctanos", path: "/contacto" },
];

export const BOATS = [
  { name: "Serena 32", category: "Deportiva", year: "2026", loa: "9.75 m", beam: "2.99 m", capacity: "10", price: "USD 189,500", status: "Entrega inmediata", image: "/images/boat-serena-32.jpg" },
  { name: "Meridian 40", category: "Crucero", year: "2026", loa: "12.10 m", beam: "3.65 m", capacity: "14", price: "USD 412,000", status: "Entrega inmediata", image: "/images/boat-meridian-40.jpg" },
  { name: "Horizonte 26", category: "Bahía", year: "2025", loa: "7.92 m", beam: "2.59 m", capacity: "9", price: "USD 96,800", status: "En stock", image: "/images/boat-horizonte-26.jpg" },
  { name: "Corinto 48", category: "Flybridge", year: "2027", loa: "14.63 m", beam: "4.20 m", capacity: "16", price: "USD 758,000", status: "Próximamente", image: "/images/boat-corinto-48.jpg" },
  { name: "Vela Alta 28", category: "Wake / Surf", year: "2026", loa: "8.53 m", beam: "2.59 m", capacity: "12", price: "USD 214,300", status: "Entrega inmediata", image: "/images/boat-vela-alta-28.jpg" },
  { name: "Regata 60", category: "Yate", year: "2027", loa: "18.29 m", beam: "5.10 m", capacity: "20", price: "Bajo cotización", status: "Por encargo", image: "/images/boat-regata-60.jpg" },
];

export const BOAT_CATEGORIES = ["Todas", ...Array.from(new Set(BOATS.map((b) => b.category)))];

export const STATS = [
  { value: "30+", label: "años en el mercado" },
  { value: "1,200+", label: "embarcaciones entregadas" },
  { value: "9", label: "marcas representadas" },
  { value: "5", label: "puntos de atención" },
];

export const WHY = [
  { icon: "ShieldCheck", title: "Garantía de fábrica", text: "Cada unidad nueva llega con garantía directa del fabricante y servicio postventa certificado." },
  { icon: "Compass", title: "Asesoría a la medida", text: "Te ayudamos a elegir la embarcación correcta según tu uso, tripulación y presupuesto real." },
  { icon: "Award", title: "Marcas líderes", text: "Representamos astilleros reconocidos internacionalmente por su calidad y valor de reventa." },
];

export const TESTIMONIALS = [
  { name: "Marco Antonio Vega", location: "Puerto Vallarta", text: "El proceso fue transparente de principio a fin. Nos guiaron en cada decisión y la entrega fue puntual.", avatar: "/images/avatar-marco-vega.jpg" },
  { name: "Renata Islas", location: "Cancún", text: "Compramos nuestra primera embarcación con ellos. La asesoría técnica marcó la diferencia frente a otros distribuidores.", avatar: "/images/avatar-renata-islas.jpg" },
  { name: "Diego Farías", location: "Valle de Bravo", text: "Servicio postventa impecable. Seguimos trabajando con el mismo equipo dos años después de la compra.", avatar: "/images/avatar-diego-farias.jpg" },
];

export const MARCAS = ["Nordic Craft", "Bluewater", "Marea Yachts", "Coastwise", "Regatta Marine", "Windline"];

export const CONTACT_INFO = {
  phone: "+52 (55) 5555 0100",
  email: "contacto@altamar.mx",
  locations: "Av. Larco 345, Miraflores, Lima, Perú",
};

export const TIMELINE = [
  { year: "1994", text: "Abrimos nuestro primer showroom en Miraflores, representando dos marcas europeas." },
  { year: "2008", text: "Ampliamos operaciones a Cancún y Puerto Vallarta para atender la costa del Pacífico y el Caribe." },
  { year: "2016", text: "Sumamos taller de servicio propio y programa de mantenimiento certificado." },
  { year: "2026", text: "Más de 1,200 embarcaciones entregadas y 9 marcas representadas en todo el país." },
];
