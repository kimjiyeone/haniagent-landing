import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  { label: "기능", href: "#features" },
  { label: "가격", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "사용법", href: "/tutorial" },
  { label: "앱 다운로드", href: "#", external: false },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-[60px]">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Logo className="h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...('external' in item && item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="px-4 py-2 text-[14px] font-medium text-[#555] hover:text-[#111] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.haniagent.kr/main"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-[#555] hover:text-[#111] transition-colors"
          >
            로그인
          </a>
          <Button
            className="bg-[#111] hover:bg-[#333] text-white font-semibold px-5 h-9 rounded-lg text-[13px] shadow-none"
            onClick={() => window.open("https://www.hanitek.kr", "_blank")}
          >
            도입 문의
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-[#333]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#f0f0f0] overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  {...('external' in item && item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="px-3 py-2.5 text-[14px] font-medium text-[#555] hover:text-[#111] rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-[#f0f0f0] flex flex-col gap-2">
                <Button
                  className="bg-[#111] hover:bg-[#333] text-white font-semibold rounded-lg"
                  onClick={() => window.open("https://www.hanitek.kr", "_blank")}
                >
                  도입 문의
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
