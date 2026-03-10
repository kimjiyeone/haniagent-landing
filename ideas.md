# HaniAgent 랜딩페이지 디자인 브레인스토밍

## 배경
기존 hanitek.kr은 "차트 타이핑 도구"에 초점을 맞춘 랜딩페이지였다. 피봇 후 HaniAgent는 "직원이 바뀌어도 한의원이 똑같이 굴러가는 운영 자동화 시스템"으로 포지셔닝이 변경되었다. 레퍼런스인 tiro.ooo는 깔끔한 SaaS 스타일의 화이트 배경 + 제품 스크린샷 중심의 구성을 보여준다.

---

<response>
<text>

## Idea 1: "Operational Blueprint" — 테크니컬 다이어그램 미학

**Design Movement:** Swiss International Style + Technical Documentation Aesthetic

**Core Principles:**
1. 정보의 위계를 극도로 명확하게 — 원장/실장/시스템의 역할이 한눈에 구분되어야 한다
2. 다이어그램적 사고 — 코어 루프(녹음→차트→알림→재방문)를 시각적 플로우로 표현
3. 기능적 아름다움 — 장식이 아닌 정보 전달 자체가 미적 요소
4. 신뢰감 있는 의료 톤 — 의료 SaaS답게 차분하고 전문적

**Color Philosophy:** 
- 기본: 오프화이트(#FAFAF8) 배경 + 차콜(#1A1A1A) 텍스트
- 포인트: 민트 그린(#2DD4A8)으로 "자동화/시스템" 요소 강조
- 보조: 라이트 블루(#E8F4FD)로 정보 영역 구분
- 의도: 의료 환경의 청결함 + 기술의 정밀함

**Layout Paradigm:** 
- 좌측 고정 텍스트 + 우측 플로팅 UI 모형의 비대칭 구조
- 섹션 간 연결선(커넥터)으로 코어 루프의 흐름을 시각적으로 표현
- 그리드 라인이 살짝 보이는 블루프린트 느낌의 배경

**Signature Elements:**
1. 점선 커넥터와 노드로 표현되는 워크플로우 다이어그램
2. 원장/실장 역할을 색상 코딩된 라벨로 구분하는 UI 카드

**Interaction Philosophy:** 스크롤에 따라 코어 루프의 각 단계가 순차적으로 활성화되며, 비활성 단계는 흐릿하게 처리

**Animation:** 
- 섹션 진입 시 노드→커넥터→텍스트 순서로 순차 등장
- 플로우 라인을 따라 움직이는 작은 점(데이터 흐름 시각화)
- 호버 시 카드가 살짝 들어올려지며 그림자 확대

**Typography System:**
- 헤드라인: Pretendard Bold 700 — 강하고 명확한 한글 표현
- 본문: Pretendard Regular 400 — 가독성 최우선
- 코드/라벨: JetBrains Mono — 기술적 요소에 모노스페이스

</text>
<probability>0.06</probability>
</response>

<response>
<text>

## Idea 2: "Warm Automation" — 따뜻한 자동화

**Design Movement:** Scandinavian Warmth + Japanese Wabi-Sabi Digital

**Core Principles:**
1. 자동화는 차갑지 않다 — 따뜻한 톤으로 "사람을 대체"가 아닌 "사람을 돕는" 느낌
2. 여백의 미 — 한의원의 고요함과 치유의 공간감을 디지털로 옮김
3. 촉각적 질감 — 종이, 나무, 천연 소재의 텍스처를 미묘하게 활용
4. 스토리텔링 — 원장의 하루를 시간순으로 따라가는 내러티브 구조

**Color Philosophy:**
- 기본: 따뜻한 크림(#FBF8F3) 배경 + 다크 브라운(#2C2420) 텍스트
- 포인트: 테라코타 오렌지(#D4734E)로 CTA와 핵심 강조
- 보조: 세이지 그린(#8B9E7E)으로 "치유/건강" 연상
- 의도: 한의원의 자연친화적 이미지 + 현대적 기술의 조화

**Layout Paradigm:**
- 풀 와이드 섹션들이 수직으로 쌓이되, 각 섹션 내부는 비대칭 2컬럼
- 좌측에 큰 일러스트/UI 모형, 우측에 간결한 카피
- 섹션 사이에 부드러운 웨이브 디바이더 대신 자연스러운 그라데이션 전환

**Signature Elements:**
1. 손으로 그린 듯한 미니멀 라인 아이콘 (녹음 버튼, 차트, 알림 등)
2. 부드러운 그림자와 둥근 모서리의 "떠있는" UI 카드

**Interaction Philosophy:** 스크롤이 "원장의 하루"를 따라가는 타임라인 — 아침 체크인부터 저녁 마무리까지

**Animation:**
- 부드러운 fade-in + 살짝 위로 떠오르는 entrance
- 패럴랙스 효과로 배경과 전경의 깊이감
- CTA 버튼에 부드러운 펄스 효과

**Typography System:**
- 헤드라인: Noto Serif KR Medium — 한의원의 전통적 품격
- 본문: Pretendard Regular — 현대적 가독성
- 강조: Pretendard SemiBold — 핵심 수치나 키워드

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Idea 3: "Clinical Dashboard" — 대시보드형 제품 중심 랜딩

**Design Movement:** Product-Led Growth Landing + Vercel/Linear 스타일 모던 SaaS

**Core Principles:**
1. 제품이 곧 마케팅 — 실제 UI 스크린샷/모형이 페이지의 주인공
2. 선명한 대비 — 밝은 배경 위에 선명한 제품 UI로 시선 집중
3. 숫자로 말한다 — "재진율 +20%", "신입 Day 1부터 가능" 등 정량적 메시지
4. 원클릭 명확성 — 모든 CTA가 즉각적 행동을 유도

**Color Philosophy:**
- 기본: 순백(#FFFFFF) 배경 + 슬레이트(#0F172A) 텍스트
- 포인트: 하니 그린(#22C55E) — 기존 브랜드 컬러 계승 + "성장/활성화" 의미
- 보조: 라이트 그레이(#F1F5F9)로 섹션 구분
- 경고/강조: 앰버(#F59E0B)로 "미처리 태스크" 등 긴급성 표현
- 의도: tiro.ooo처럼 깔끔하되, 하니에이전트만의 그린 아이덴티티 유지

**Layout Paradigm:**
- 히어로: 중앙 정렬 헤드라인 + 바로 아래 제품 UI 모형 (tiro.ooo 참고)
- 기능 섹션: 좌우 교차 배치 (텍스트↔UI 모형)
- 코어 루프 섹션: 가로 스텝 다이어그램
- 하단: 가격/FAQ/CTA

**Signature Elements:**
1. 실제 제품 UI를 닮은 고퀄리티 모형 카드 (그림자 + 미세 보더)
2. 스텝 넘버링 — 각 기능을 "Step 1, 2, 3"으로 명확하게 순서화

**Interaction Philosophy:** 스크롤 시 제품 UI 모형이 화면 중앙에 고정되고, 주변 텍스트가 바뀌는 스크롤잭 효과

**Animation:**
- 히어로 섹션: 타이핑 효과로 핵심 문구 등장
- 기능 섹션: 스크롤 트리거 fade-in + scale-up
- 코어 루프: 각 스텝이 순차적으로 하이라이트
- 미세한 hover lift 효과

**Typography System:**
- 헤드라인: Pretendard ExtraBold 800 — 임팩트 있는 대형 타이포
- 본문: Pretendard Regular 400 — 깔끔한 가독성
- 라벨/배지: Pretendard Medium 500 — UI 요소와 조화

</text>
<probability>0.07</probability>
</response>

---

## 선택: Idea 3 — "Clinical Dashboard" 접근법

**이유:**
1. 레퍼런스(tiro.ooo)와 가장 유사한 톤앤매너로, 사용자가 원하는 방향성에 부합
2. 기존 hanitek.kr의 그린 브랜드 컬러를 자연스럽게 계승
3. 제품 UI 모형 중심의 구성이 "피봇된 새로운 기능"을 가장 효과적으로 전달
4. SaaS B2B 랜딩페이지의 검증된 패턴으로 전환율 최적화에 유리
