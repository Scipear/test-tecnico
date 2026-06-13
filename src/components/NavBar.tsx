import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Encargos", href: "#encargos" },
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Nezuko" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-3 rounded-sm text-sm text-[#2a1520]/70 hover:bg-[#A65B78] hover:text-[#FFFFFF] transition-colors duration-200 font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="relative p-2 text-[#A65B78] hover:bg-[#F4D1DC] rounded-full transition-colors duration-200 cursor-pointer"
            aria-label="Carrito de compras"
          >
            <ShoppingBag size={22} />
            <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#A65B78] text-white rounded-full text-[10px] flex items-center justify-center font-semibold">
              0
            </span>
          </button>
          <button
            className="md:hidden p-2 text-[#A65B78]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#F4D1DC] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#2a1520]/70 hover:text-[#A65B78] transition-colors font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}