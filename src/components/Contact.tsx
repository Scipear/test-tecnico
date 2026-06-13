import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-[#2a1520] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Contáctanos
          </h2>
          <p
            className="text-[#2a1520]/60"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ya sea una consulta o un encargo, estamos acá para ayudarte.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAFAFA] rounded-3xl p-8 border border-[#F4D1DC]/60"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle size={56} className="text-[#A65B78]" />
              <h3
                className="text-2xl font-bold text-[#2a1520]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                ¡Mensaje enviado!
              </h3>
              <p
                className="text-[#2a1520]/60"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Te respondemos en menos de 24 horas. ¡Gracias por contactarnos!
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", type: "", message: "" }); }}
                className="mt-4 text-[#A65B78] text-sm underline"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#2a1520]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-white border border-[#F4D1DC] rounded-2xl px-4 py-3 text-[#2a1520] placeholder:text-[#2a1520]/30 focus:outline-none focus:ring-2 focus:ring-[#A65B78]/40 focus:border-[#A65B78] transition-all"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#2a1520]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-white border border-[#F4D1DC] rounded-2xl px-4 py-3 text-[#2a1520] placeholder:text-[#2a1520]/30 focus:outline-none focus:ring-2 focus:ring-[#A65B78]/40 focus:border-[#A65B78] transition-all"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="type"
                  className="text-sm font-semibold text-[#2a1520]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Tipo de solicitud
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={form.type}
                  onChange={handleChange}
                  className="bg-white border border-[#F4D1DC] rounded-2xl px-4 py-3 text-[#2a1520] focus:outline-none focus:ring-2 focus:ring-[#A65B78]/40 focus:border-[#A65B78] transition-all appearance-none cursor-pointer"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <option value="" disabled>Selecciona una opción...</option>
                  <option value="consulta">Consulta</option>
                  <option value="encargo">Pedido por encargo</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#2a1520]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="En que te podemos ayudar..."
                  className="bg-white border border-[#F4D1DC] rounded-2xl px-4 py-3 text-[#2a1520] placeholder:text-[#2a1520]/30 focus:outline-none focus:ring-2 focus:ring-[#A65B78]/40 focus:border-[#A65B78] transition-all resize-none"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#A65B78] hover:bg-[#8d4a65] text-white py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg shadow-[#A65B78]/25 hover:shadow-[#A65B78]/40 hover:-translate-y-0.5 mt-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Send size={18} />
                Enviar Mensaje
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
