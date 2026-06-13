import { motion } from "motion/react";
import logo from "../assets/logo.png";
import usImage from "../assets/about-us.png";

export function About() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-120 bg-[#F4D1DC]/30">
              <img
                src= {usImage}
                alt="Comunidad de Nezuko Shop frente a su stand de un bazar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#A65B78]/40 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-[#F4D1DC]">
              <img src={logo} alt="Logo Nezuko" className="h-12 w-auto" />
              <div>
                <p
                  className="font-bold text-[#A65B78] text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Nezuko Shop
                </p>
                <p
                  className="text-xs text-[#2a1520]/50"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Tu tienda de confianza
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#F4D1DC]" />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <h2
              className="text-4xl font-bold text-[#2a1520] leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Más que una tienda,{" "}
              <span className="text-[#A65B78]">una comunidad</span>
            </h2>

            <p
              className="text-[#2a1520]/60 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Nezuko nació de una pasión genuina por el anime y la cultura geek. 
              Somos una tienda online que trata cada producto con cariño, donde cada uno de sus colaboradores
              desea que sus clientes tengan la mejor experiencia y satisfacción con sus gustos.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                {label: "Cultura Anime" },
                {label: "Videojuegos" },
                {label: "Música" },
                {label: "Mangas & Libros" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-[#FAFAFA] rounded-2xl px-4 py-3 border border-[#F4D1DC]/60"
                >
                  <span
                    className="text-sm font-medium text-[#2a1520]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
