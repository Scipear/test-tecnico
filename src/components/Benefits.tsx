import { motion } from "motion/react";
import { Sparkles, PackageCheck, Star } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Variedad de Procuctor",
    description:
      "De chapitas a peluches, de mangas a CDs. Tenemos todo lo que los fans del anime y los videojuegos puede desear.",
  },
  {
    icon: PackageCheck,
    title: "Envíos Seguros",
    description:
      "Empaquetamos con mucho cuidado cada pedido para que llegue perfecto a tus manos.",
  },
  {
    icon: Star,
    title: "Traído para Ti",
    description:
      "¿No encuentras lo que buscas? Usa nuestro servicio de encargos y lo traemos especialmente para ti.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl border border-[#F4D1DC] hover:border-[#A65B78]/40 hover:shadow-lg hover:shadow-[#F4D1DC]/60 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F4D1DC] flex items-center justify-center group-hover:bg-[#A65B78] transition-colors duration-300">
                <b.icon size={24} className="text-[#A65B78] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3
                className="text-xl font-bold text-[#2a1520]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {b.title}
              </h3>
              <p
                className="text-[#2a1520]/60 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}