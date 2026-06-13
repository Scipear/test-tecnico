import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import product1 from "../assets/Products-1.png";
import product2 from "../assets/Products-2.png";
import product3 from "../assets/Products-3.png";
import product4 from "../assets/Products-4.png";
import product5 from "../assets/Products-5.png";
import product6 from "../assets/Products-6.png";

const tabs = ["Populares", "Novedades"] as const;
type Tab = typeof tabs[number];

const products: Record<Tab, { id: number; name: string; price: string; tag: string; img: string; alt: string }[]> = {
  Populares: [
    { id: 1, name: "Llaveros Acrilicos Personalizados", price: "$4", tag: "Favorito", img: product1, alt: "Aviso de llaveros personalizables" },
    { id: 2, name: "Mochila Hamburguesa de Steven Universe", price: "$35", tag: "Bolso", img: product2, alt: "Bolso en forma de hamburguesa" },
    { id: 3, name: "Collar de Fresita", price: "$8", tag: "Accesorio", img: product3, alt: "Collar metalico con una fresa en el centro" },
  ],

  Novedades: [
    { id: 4, name: "Bolso de Miku", price: "$30", tag: "Bolso", img: product4, alt: "Bolso con forma de la cabeza de Miku" },
    { id: 5, name: "Figura de Sasuke 9cm", price: "$10", tag: "Figura", img: product5, alt: "Figura de Sasuke en una medida de 9 centimetros" },
    { id: 6, name: "Peluche de BMO 28cm", price: "$18", tag: "Peluche", img: product6, alt: "Peluche en forma del personaje BMO de Hora de Aventura" },
  ],

};

export function Products() {
  const [activeTab, setActiveTab] = useState<Tab>("Populares");

  return (
    <section id="productos" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-[#2a1520] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Explorar Productos
          </h2>
          <p
            className="text-[#2a1520]/60 max-w-md mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Desde lo más popular hasta los articulos más recientes.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white border border-[#F4D1DC] rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#A65B78] text-white shadow-sm"
                    : "text-[#A65B78] hover:bg-[#F4D1DC]"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products[activeTab].map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#F4D1DC]/60 hover:border-[#A65B78]/30 hover:shadow-xl hover:shadow-[#F4D1DC]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-56 bg-[#F4D1DC]/20">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#A65B78] text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3
                      className="font-semibold text-[#2a1520] mb-1"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {p.name}
                    </h3>
                    <span
                      className="text-[#A65B78] font-bold"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {p.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}