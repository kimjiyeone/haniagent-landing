/*
 * Design: hanitek.kr 스타일 — 틸(#00B6C5) 브랜드, 깔끔한 SaaS
 * tiro.ooo 참고: 상단 고정 네비게이션, 로그인 + CTA
 */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/hanitek-logo_f6aa8a8a.svg";

const navItems = [
  { label: "기능 소개", href: "#features" },
  { label: "원장님 리뷰", href: "#testimonials" },
  { label: "가격 안내", href: "#pricing" },
  { label: "자주 묻는 질문", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[68px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <img
            src={LOGO_URL}
            alt="하니에이전트 로고"
            className="h-7 md:h-8 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-sm font-medium text-[#333] hover:text-hani transition-colors rounded-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.haniagent.kr/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#333] hover:text-hani transition-colors"
          >
            로그인
          </a>
          <Button
            className="bg-hani hover:bg-hani-dark text-white font-semibold px-5 rounded-full shadow-none text-sm"
            onClick={() => window.open("https://www.haniagent.kr/auth/login", "_blank")}
          >
            무료 체험하기
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#333]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2.5 text-sm font-medium text-[#333] hover:text-hani hover:bg-hani-light/50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
                <a
                  href="https://www.haniagent.kr/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 text-sm font-medium text-[#333]"
                >
                  로그인
                </a>
                <Button
                  className="bg-hani hover:bg-hani-dark text-white font-semibold rounded-full"
                  onClick={() => window.open("https://www.haniagent.kr/auth/login", "_blank")}
                >
                  무료 체험하기
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
