import { motion } from "motion/react";
import { MessageCircle, Calculator, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Dinos lo que buscas",
    desc: "Manga, libro, accesorio, figura, lo que desees. Escribenos junto al link del producto que deseas traer.",
  },
  {
    icon: Calculator,
    num: "02",
    title: "Te cotizamos",
    desc: "Al instante te respondemos con una cotización sin compromiso.",
  },
  {
    icon: Truck,
    num: "03",
    title: "Lo traemos por ti",
    desc: "Confirmado el encargo, nos encargamos de todo el proceso hasta que llegue a tus manos.",
  },
];

export function Order() {
  return (
    <section id="encargos" className="py-24 bg-[#F4D1DC]/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white border border-[#F4D1DC] overflow-hidden shadow-lg"
        >
          <div className="bg-linear-to-r from-[#A65B78] to-[#c47090] p-10 text-white text-center">
            <h2
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Área de Encargos
            </h2>
            <p
              className="text-white/80 max-w-lg mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              ¿No encuentras lo que buscas? No te preocupes, nosotros te lo traemos.
            </p>
          </div>

          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-[#F4D1DC] flex items-center justify-center">
                      <step.icon size={28} className="text-[#A65B78]" />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-7 h-7 bg-[#A65B78] text-white rounded-full text-xs font-bold flex items-center justify-center"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-[#2a1520]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#2a1520]/60 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.desc}
                  </p>

                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute" />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-[#A65B78] hover:bg-[#8d4a65] text-white px-10 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg shadow-[#A65B78]/30 hover:-translate-y-0.5"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Hacer mi Encargo Ahora
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
