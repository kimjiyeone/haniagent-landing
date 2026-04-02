import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[#eee]">
      <div className="container py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-xs">
            <Logo className="h-6 w-auto" />
            <p className="mt-3 text-[13px] text-[#999] leading-relaxed">
              녹음 한 번이면 차팅, 환자관리부터 경영까지.
              <br />
              한의원 운영 자동화 솔루션.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-[12px] font-bold text-[#111] mb-3 uppercase tracking-wider">서비스</h4>
              <ul className="space-y-2">
                {[
                  { label: "기능 소개", href: "#features" },
                  { label: "가격", href: "#pricing" },
                  { label: "FAQ", href: "#faq" },
                  { label: "사용법", href: "/tutorial" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[13px] text-[#888] hover:text-[#111] transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-[#111] mb-3 uppercase tracking-wider">지원</h4>
              <ul className="space-y-2">
                {[
                  { label: "문의하기", href: "mailto:contact@hanitek.kr" },
                  { label: "회사 소개", href: "https://www.hanitek.kr", ext: true },
                  { label: "개인정보처리방침", href: "#" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-[13px] text-[#888] hover:text-[#111] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#f0f0f0] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-[#bbb]">
            &copy; {new Date().getFullYear()} 주식회사 하니텍. All rights reserved.
          </p>
          <p className="text-[11px] text-[#bbb]">
            강원도 원주시 | 주식회사 하니텍
          </p>
        </div>
      </div>
    </footer>
  );
}
