import { useState } from "react";
import { trpc } from "@/lib/trpc";
import Logo from "@/components/Logo";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Consultation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    clinicName: "",
    isPreOpening: false,
    region: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submitMutation = trpc.consultation.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (err) => {
      console.error("상담 신청 실패:", err);
    },
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "성함을 입력해주세요";
    if (!form.phone.trim()) newErrors.phone = "연락처를 입력해주세요";
    if (!form.clinicName.trim()) newErrors.clinicName = "한의원명을 입력해주세요";
    if (!form.region.trim()) newErrors.region = "지역을 입력해주세요";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    submitMutation.mutate({
      name: form.name.trim(),
      phone: form.phone.trim(),
      clinicName: form.clinicName.trim(),
      isPreOpening: form.isPreOpening,
      region: form.region.trim(),
    });
  };

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 상단 헤더 */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Logo />
            </div>
          </Link>
          <Link href="/">
            <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
              홈으로 돌아가기
            </span>
          </Link>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* 왼쪽: 상담 안내 */}
          <div className="lg:sticky lg:top-32">
            <h1 className="text-3xl lg:text-[40px] font-extrabold text-[#111] leading-tight tracking-tight">
              <span className="text-[#00B6C5]">하니에이전트</span> 도입 상담
            </h1>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              AI로 달라지는 한의원 운영, 직접 확인해보세요.
            </p>

            {/* 상담 유형 */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f7f8] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B6C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#111]">전화 상담</p>
                  <p className="text-sm text-gray-400">소요시간 5분</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f7f8] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B6C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#111]">방문 상담 + 온보딩</p>
                  <p className="text-sm text-gray-400">소요시간 30분</p>
                </div>
              </div>
            </div>

            {/* 미팅 아젠다 */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">미팅 아젠다</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00B6C5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <p className="text-[15px] text-[#333] leading-relaxed">
                    하니에이전트 제품 시연<br />
                    <span className="text-gray-400 text-sm">차팅 → SOAP → 카톡 CRM 자동화</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00B6C5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <p className="text-[15px] text-[#333] leading-relaxed">
                    우리 한의원 맞춤 운영 전략 논의
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00B6C5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <p className="text-[15px] text-[#333] leading-relaxed">
                    도입 플랜과 견적 안내
                  </p>
                </div>
              </div>
            </div>

            {/* 고객사 로고 영역 */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-4">도입 한의원</p>
              <div className="flex flex-wrap gap-6">
                {["미소한의원", "연세한의원", "청담한의원", "강남한의원"].map((name) => (
                  <div
                    key={name}
                    className="px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-400 font-medium"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 오른쪽: 상담 신청 폼 */}
          <div>
            {submitted ? (
              /* 제출 완료 화면 */
              <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#e8f7f8] flex items-center justify-center mx-auto mb-6">
                  <Check size={28} className="text-[#00B6C5]" />
                </div>
                <h2 className="text-2xl font-bold text-[#111] mb-3">
                  상담 신청이 완료되었습니다
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  24시간 내에 연락드리겠습니다.<br />
                  빠른 상담을 원하시면 아래로 연락해주세요.
                </p>
                <div className="space-y-3 text-sm text-gray-500">
                  <p>
                    전화: <a href="tel:010-3357-0527" className="text-[#00B6C5] font-semibold hover:underline">010-3357-0527</a>
                  </p>
                  <p>
                    이메일: <a href="mailto:jykim@hanitek.kr" className="text-[#00B6C5] font-semibold hover:underline">jykim@hanitek.kr</a>
                  </p>
                </div>
                <Link href="/">
                  <button className="mt-8 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                    홈으로 돌아가기
                  </button>
                </Link>
              </div>
            ) : (
              /* 폼 */
              <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                <div className="mb-8">
                  <p className="text-lg font-bold text-[#111] leading-snug">
                    아래 양식을 입력하시고{" "}
                    <span className="text-[#00B6C5]">무료 상담</span>을 예약해보세요
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    최대한 신속하게 연락드리겠습니다.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* 성함 */}
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      성함<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="예) 김원장"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? "border-red-400" : "border-gray-200"
                      } bg-white text-[#111] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B6C5]/30 focus:border-[#00B6C5] transition-all text-[15px]`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* 연락처 */}
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      연락 가능한 연락처<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="숫자만 입력해 주세요"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value.replace(/[^0-9]/g, ""))}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? "border-red-400" : "border-gray-200"
                      } bg-white text-[#111] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B6C5]/30 focus:border-[#00B6C5] transition-all text-[15px]`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* 한의원명 */}
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      한의원명<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="예) OO한의원"
                      value={form.clinicName}
                      onChange={(e) => handleChange("clinicName", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.clinicName ? "border-red-400" : "border-gray-200"
                      } bg-white text-[#111] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B6C5]/30 focus:border-[#00B6C5] transition-all text-[15px]`}
                    />
                    {errors.clinicName && (
                      <p className="text-xs text-red-500 mt-1">{errors.clinicName}</p>
                    )}
                    {/* 개원 예정 체크박스 */}
                    <label className="flex items-center gap-2 mt-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.isPreOpening}
                        onChange={(e) => handleChange("isPreOpening", e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-[#00B6C5] focus:ring-[#00B6C5]/30 accent-[#00B6C5]"
                      />
                      <span className="text-sm text-gray-500">개원 예정</span>
                    </label>
                  </div>

                  {/* 지역 */}
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      지역<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="예) 서울시 강남구 대치동"
                      value={form.region}
                      onChange={(e) => handleChange("region", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.region ? "border-red-400" : "border-gray-200"
                      } bg-white text-[#111] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B6C5]/30 focus:border-[#00B6C5] transition-all text-[15px]`}
                    />
                    {errors.region && (
                      <p className="text-xs text-red-500 mt-1">{errors.region}</p>
                    )}
                  </div>

                  {/* 제출 버튼 */}
                  <button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full py-3.5 bg-[#00B6C5] text-white font-bold text-[16px] rounded-xl hover:bg-[#009aa8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors mt-2"
                  >
                    {submitMutation.isPending ? "신청 중..." : "상담 신청"}
                  </button>

                  {submitMutation.isError && (
                    <p className="text-sm text-red-500 text-center">
                      오류가 발생했습니다. 잠시 후 다시 시도해주세요.
                    </p>
                  )}
                </form>

                {/* 하단 안내 */}
                <p className="mt-5 text-xs text-gray-400 leading-relaxed">
                  *제출하신 상담 신청서는 절대 외부로 공유되지 않으며, 오직 도입 상담을 위한 준비 과정에만 활용됩니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
