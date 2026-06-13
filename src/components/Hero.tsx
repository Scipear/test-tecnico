import { motion } from "motion/react";
import img1 from "../assets/Hero-img-1.png";
import img2 from "../assets/Hero-img-2.png";
import img3 from "../assets/Hero-img-3.png";

const heroImages = [
  {
    src: img1,
    alt: "Peluches de la colección Sanrio",
  },
  {
    src: img2,
    alt: "Lampara de Pikachu",
  },
  {
    src: img3,
    alt: "Discos de música",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen pt-16 flex items-center bg-[#FAFAFA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >

          <h1
            className="text-5xl lg:text-6xl font-extrabold leading-tight text-[#2a1520]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Tu portal al mundo{" "}
            <span className="text-[#A65B78]">Anime</span>
          </h1>

          <p
            className="text-lg text-[#2a1520]/60 leading-relaxed max-w-md"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Tu tienda de chapitas, peluches, accesorios, música y mucho más. Lo que quieras
            aquí lo vas a encontrar, y si no, ¡lo encargamos
            por ti!
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#productos"
              className="inline-flex items-center gap-2 bg-[#A65B78] hover:bg-[#8d4a65] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-200 shadow-lg shadow-[#A65B78]/30 hover:shadow-[#A65B78]/50 hover:-translate-y-0.5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Explorar Tienda
            </a>
            <a
              href="#encargos"
              className="inline-flex items-center gap-2 border-2 border-[#A65B78] text-[#A65B78] hover:bg-[#F4D1DC] px-8 py-3.5 rounded-full font-semibold transition-all duration-200"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Hacer un Encargo
            </a>
          </div>

          <div
            className="flex items-center gap-6 pt-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {[
              { value: "500+", label: "Productos" },
              { value: "200+", label: "Clientes felices" },
              { value: "100%", label: "Encargos cumplidos" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-[#A65B78]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {stat.value}
                </span>
                <span className="text-xs text-[#2a1520]/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:grid grid-cols-2 gap-4 h-125"
        >
          {/* Large image top-left */}
          <div className="row-span-2 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Small top-right */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={heroImages[1].src}
              alt={heroImages[1].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Small bottom-right */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={heroImages[2].src}
              alt={heroImages[2].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Decorative blob */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#F4D1DC] rounded-full blur-3xl opacity-60 -z-10" />
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#A65B78]/20 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}