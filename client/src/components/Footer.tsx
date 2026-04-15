import Logo from "./Logo";
import { Link } from "wouter";

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
                <li>
                  <Link
                    href="/consultation"
                    className="text-[13px] text-[#888] hover:text-[#111] transition-colors"
                  >
                    도입 문의
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.hanitek.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#888] hover:text-[#111] transition-colors"
                  >
                    회사 소개
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[13px] text-[#888] hover:text-[#111] transition-colors">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[13px] text-[#888] hover:text-[#111] transition-colors">
                    이용약관
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="mt-8 pt-6 border-t border-[#f0f0f0]">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="space-y-1">
              <p className="text-[12px] font-semibold text-[#888]">주식회사 하니텍</p>
              <div className="text-[11px] text-[#bbb] leading-relaxed space-y-0.5">
                <p>사업자등록번호: 242-87-03859</p>
                <p>통신판매번호: 2025-강원원주-01906</p>
                <p>대표자: 김지연</p>
                <p>주소: 강원특별자치도 원주시 동부순환로 261, 4층 4호-에이56 (행구동)</p>
                <p>연락처: 010-3357-0527</p>
              </div>
            </div>
            <div className="text-right space-y-1.5">
              <p className="text-[11px] text-[#bbb]">
                &copy; {new Date().getFullYear()} 주식회사 하니텍. All rights reserved.
              </p>
              <div className="flex items-center gap-3 justify-end">
                <a href="#" className="text-[11px] text-[#999] hover:text-[#666] transition-colors underline">개인정보처리방침</a>
                <a href="#" className="text-[11px] text-[#999] hover:text-[#666] transition-colors underline">이용약관</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
