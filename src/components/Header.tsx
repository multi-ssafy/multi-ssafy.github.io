"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/site";
import { MenuIcon, XIcon } from "@/lib/icons";
import NotifyButton from "@/components/NotifyButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b ${
        scrolled ? "shadow-card border-ink-100" : "border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo/ssafy-logo-navy.png"
              alt="SSAFY"
              className="h-6 sm:h-7 w-auto"
            />
            <span className="hidden sm:inline text-[11px] font-bold text-brand-600 bg-brand-50 rounded-full px-2 py-0.5">
              SW·AI
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-ink-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <NotifyButton className="btn-primary hidden sm:inline-flex !py-2.5 !px-5 text-[13px]">
              17기 모집 알림 신청
            </NotifyButton>
            <button
              type="button"
              aria-label="메뉴 열기"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-ink-700 hover:bg-ink-100"
            >
              {menuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <nav className="flex flex-col px-5 py-4 gap-1 text-[15px] font-semibold text-ink-700">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 ${
                  i < NAV_LINKS.length - 1 ? "border-b border-ink-50" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <NotifyButton
              onClick={() => setMenuOpen(false)}
              className="btn-primary justify-center mt-3"
            >
              17기 모집 알림 신청
            </NotifyButton>
          </nav>
        </div>
      )}
    </header>
  );
}
