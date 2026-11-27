import React, { useState } from 'react';
import logo from '../assets/logo/Logo.png';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { href: '#home', title: 'Home', icon: 'fa-house' },
    { href: '#about', title: 'About', icon: 'fa-layer-group' },
    { href: '#courses', title: 'Courses', icon: 'fa-user' },
    { href: '#contact', title: 'Contact', icon: 'fa-paper-plane' },
  ];

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-6">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between rounded-full border border-white/25  px-5 py-2 shadow-lg backdrop-blur-md">
        {/* اللوجو */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="Bee Academy Logo"
            className="h-9 w-auto rounded-lg  px-2.5 py-0.5 object-contain"
          />
        </a>

        {/* روابط الشاشات المتوسطة والكبيرة */}
        <div className="hidden items-center gap-2 md:flex">
          {menu.map(({ href, title, icon }) => {
            const isActive = active === title;
            return (
              <a
                key={title}
                href={href}
                onClick={() => setActive(title)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-white ${
                  isActive ? 'bg-white/20 text-white' : 'text-white/85'
                }`}
              >
                <i
                  className={`fa-solid ${icon} text-[0.85rem] transition-opacity group-hover:text-[#E47B25] group-hover:opacity-100 ${
                    isActive ? 'text-[#E47B25] opacity-100' : 'opacity-75'
                  }`}
                />
                <span>{title}</span>
              </a>
            );
          })}
        </div>

        {/* زر Login + زر قائمة الموبايل */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-full bg-[#E47B25] px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_15px_rgba(228,123,37,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f08935]"
          >
            Login
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="القائمة"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-sm`} />
          </button>
        </div>
      </nav>

      {/* القائمة المنسدلة للموبايل */}
      {menuOpen && (
        <div className="mx-auto mt-3 flex max-w-[1100px] flex-col gap-2 rounded-3xl border border-white/25 bg-slate-900/75 p-4 shadow-xl backdrop-blur-lg md:hidden">
          {menu.map(({ href, title, icon }) => {
            const isActive = active === title;
            return (
              <a
                key={title}
                href={href}
                onClick={() => {
                  setActive(title);
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-[#E47B25] text-white'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                <i className={`fa-solid ${icon} text-sm`} />
                <span>{title}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}