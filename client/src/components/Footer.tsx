/*
 * Design: Clinical Dashboard — Modern SaaS
 * Footer: 간결한 회사 정보 + 링크
 */

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-white">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-hani-green rounded-lg flex items-center justify-center text-white font-bold text-xs">
                H
              </div>
              <span className="font-bold text-base text-foreground tracking-tight">하니에이전트</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              직원이 바뀌어도 한의원이 똑같이 굴러가는 운영 자동화 시스템.
              녹음 한 번이면 차트부터 리마인드까지 자동으로 처리됩니다.
            </p>
            <div className="mt-4 text-xs text-muted-foreground/70">
              주식회사 하니텍 | 대표 OOO
              <br />
              사업자등록번호 000-00-00000
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">서비스</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  핵심 기능
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  가격
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://www.haniagent.kr/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  서비스 바로가기
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">지원</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.hanitek.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  회사 소개
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@hanitek.kr"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} 주식회사 하니텍. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.hanitek.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors"
            >
              hanitek.kr
            </a>
            <a
              href="https://www.haniagent.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors"
            >
              haniagent.kr
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
