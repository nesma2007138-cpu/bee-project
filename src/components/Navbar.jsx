import React, { useState } from "react";
import logo from "../assets/logo.png"; // عدّلي المسار حسب مكان logo.png داخل src

export default function Navbar({ activePage, onNavigate, onOpenLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "courses", label: "Courses" },
    { id: "contact", label: "Contact", isFooterScroll: true },
  ];

  const handleLinkClick = (link) => {
    setMenuOpen(false);
    if (link.isFooterScroll) {
      const footerEl = document.getElementById("main-footer");
      if (footerEl) {
        footerEl.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    onNavigate(link.id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-4 md:px-6 py-2 flex items-center justify-between shadow-lg">
        {/* شعار Bee Academy بدون border */}
        <button
          type="button"
          onClick={() => onNavigate("courses")}
          className="flex items-center gap-2.5 text-right cursor-pointer border-0 bg-transparent p-0 focus:outline-none"
        >
          <img
            src={logo}
            alt="Bee Academy Logo"
            className="h-12 md:h-14 w-auto object-contain border-0 shrink-0 scale-160 origin-center transition-transform"
          />
         
        </button>

        {/* روابط التنقل - سطح المكتب */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-white">
          {navLinks.map((link) => {
            const isActive = activePage === link.id && !link.isFooterScroll;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link)}
                className={`cursor-pointer transition px-3 py-1 rounded-full ${
                  isActive
                    ? "bg-[#F5BD35] text-white"
                    : "hover:text-[#F5BD35]"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* زر Login وقائمة الموبايل */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenLogin}
            className="bg-[#F5BD35] hover:bg-[#df6926] text-white text-xs md:text-sm font-bold px-5 py-2 rounded-full transition cursor-pointer shadow"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-white p-2 rounded-full hover:bg-white/15 cursor-pointer"
            aria-label="القائمة"
          >
            ☰
          </button>
        </div>
      </div>

      {/* قائمة الموبايل */}
      {menuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-[#1E293B]/95 backdrop-blur-lg border border-white/15 p-4 flex flex-col gap-2 text-white text-sm font-semibold">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLinkClick(link)}
              className="text-right py-2 px-3 rounded-xl hover:bg-white/10 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}