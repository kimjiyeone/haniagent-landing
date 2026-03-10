/*
 * Design: hanitek.kr 스타일 — 다크 배경 Footer (압축)
 */
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white">
      <div className="container py-10 md:py-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <Logo className="h-6 w-auto" color="#ffffff" />
            <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-sm">
              직원이 바뀌어도 한의원이 똑같이 굴러가는 운영 자동화 시스템.
            </p>
            <div className="mt-3 text-xs text-white/40">
              주식회사 하니텍 | 대표 OOO | 사업자등록번호 000-00-00000
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-3">서비스</h4>
            <ul className="space-y-2">
              {[
                { label: "핵심 기능", href: "#features" },
                { label: "가격", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "서비스 바로가기", href: "https://www.haniagent.kr/main", external: true },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-3">지원</h4>
            <ul className="space-y-2">
              {[
                { label: "회사 소개", href: "https://www.hanitek.kr", external: true },
                { label: "문의하기", href: "mailto:contact@hanitek.kr" },
                { label: "개인정보처리방침", href: "#" },
                { label: "이용약관", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} 주식회사 하니텍. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.hanitek.kr" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/60 transition-colors">hanitek.kr</a>
            <a href="https://www.haniagent.kr" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/60 transition-colors">haniagent.kr</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
