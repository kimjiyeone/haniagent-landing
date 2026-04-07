import { motion, AnimatePresence } from "framer-motion";
import { useState, type ReactNode } from "react";
import { Mic, FileCheck, Inbox, MessageSquare, BarChart3, Brain, Monitor, CheckCircle2, Copy, ArrowRight, Volume2, Radio, TrendingUp, Users, Activity } from "lucide-react";

/* ─── Theme / Feature types ─── */
interface Feature {
  icon: typeof Mic;
  label: string;
  title: string;
  desc: string;
  bullets: string[];
  mockup: () => ReactNode;
}
interface Theme {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  lightBg: string;
  features: Feature[];
}

/* ─── Inline UI Mockups (실제 제품 화면 기반) ─── */

function MockupRecording() {
  return (
    <div className="bg-white rounded-xl border border-[#e8e8e8] overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#f0f0f0] bg-[#fafafa]">
        <Mic size={13} className="text-[#888]" />
        <span className="text-[12px] font-bold text-[#333]">원장 상담 녹음</span>
      </div>
      <div className="p-4">
        {/* 인포그래픽: 원장-환자 진료 */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-11 h-11 rounded-full bg-[#e8f7f8] flex items-center justify-center border-2 border-[#00B6C5]/30">
              <Mic size={16} className="text-[#00B6C5]" />
            </div>
            <span className="text-[9px] font-bold text-[#555] mt-1">원장</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[0,1,2,3,4].map(i => (
                <div key={i} className="w-0.5 bg-[#00B6C5] rounded-full" style={{ height: `${8 + Math.random() * 12}px` }} />
              ))}
            </div>
            <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-0.5 rounded-full">
              <Radio size={8} />
              <span className="text-[8px] font-bold">녹음 중</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center border-2 border-amber-200/50">
              <Volume2 size={16} className="text-amber-500" />
            </div>
            <span className="text-[9px] font-bold text-[#555] mt-1">환자</span>
          </div>
        </div>
        {/* 실시간 텍스트 */}
        <div className="bg-[#f8fafb] rounded-lg p-3 border border-[#f0f0f0]">
          <div className="flex items-center gap-1.5 mb-2">
            <Volume2 size={10} className="text-[#00B6C5]" />
            <span className="text-[9px] font-bold text-[#555]">실시간 텍스트 변환</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex gap-1.5">
              <span className="text-[8px] font-bold text-[#00B6C5] bg-[#e8f7f8] px-1 py-0.5 rounded shrink-0">원장</span>
              <p className="text-[10px] text-[#555]">허리 통증은 언제부터 시작됐어요?</p>
            </div>
            <div className="flex gap-1.5">
              <span className="text-[8px] font-bold text-amber-600 bg-amber-50 px-1 py-0.5 rounded shrink-0">환자</span>
              <p className="text-[10px] text-[#555]">일주일 전에 무거운 거 들다가...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupEMR() {
  return (
    <div className="bg-white rounded-xl border border-[#e8e8e8] overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#f0f0f0] bg-[#fafafa]">
        <FileCheck size={14} className="text-[#00B6C5]" />
        <span className="text-[12px] font-bold text-[#333]">EMR 복붙 대기열</span>
        <span className="text-[10px] text-[#999] ml-auto">3건 대기</span>
      </div>
      {[
        { name: "김서연", tag: "차트", tagColor: "bg-amber-100 text-amber-700", time: "14:51", cc: "허리 통증" },
        { name: "윤상필", tag: "차트", tagColor: "bg-amber-100 text-amber-700", time: "16:23", cc: "다한증" },
        { name: "신태현", tag: "리핏", tagColor: "bg-purple-100 text-purple-700", time: "17:17", cc: "리핏 메모" },
      ].map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="flex items-center gap-3 px-4 py-3 border-b border-[#f5f5f5] last:border-0 hover:bg-[#fafafa] transition-colors"
        >
          <div className="w-7 h-7 rounded-full bg-[#f0f0f0] flex items-center justify-center shrink-0">
            <span className="text-[10px] font-bold text-[#888]">{item.name.charAt(0)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-bold text-[#333]">{item.name}</span>
              <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${item.tagColor}`}>{item.tag}</span>
            </div>
            <p className="text-[10px] text-[#999] mt-0.5">{item.cc}</p>
          </div>
          <span className="text-[10px] text-[#bbb] font-mono shrink-0">{item.time}</span>
          <button className="w-7 h-7 rounded-lg bg-[#f5f5f5] hover:bg-[#eee] flex items-center justify-center transition-colors shrink-0">
            <Copy size={12} className="text-[#888]" />
          </button>
        </motion.div>
      ))}
    </div>
  );
}

function MockupInbox() {
  return (
    <div className="bg-white rounded-xl border border-[#e8e8e8] overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#f0f0f0] bg-[#fafafa]">
        <Inbox size={14} className="text-blue-500" />
        <span className="text-[12px] font-bold text-[#333]">실장님 인박스</span>
        <span className="text-[9px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded-full ml-auto">3건</span>
      </div>
      {[
        { name: "김서연", task: "예약확인", taskLabel: "현장안내", color: "border-amber-200 bg-amber-50/30", tagBg: "bg-amber-200 text-amber-800", memo: "예약 확인 + 카톡", time: "방금" },
        { name: "윤상필", task: "예약확인", taskLabel: "현장안내", color: "border-amber-200 bg-amber-50/30", tagBg: "bg-amber-200 text-amber-800", memo: "통합보드 메모", time: "5분 전" },
        { name: "신태현", task: "D-1카톡", taskLabel: "리마인드", color: "border-blue-200 bg-blue-50/30", tagBg: "bg-blue-200 text-blue-800", memo: "내일 예약 리마인드", time: "내일" },
      ].map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className={`mx-3 my-2 p-3 rounded-lg border ${item.color}`}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${item.tagBg}`}>{item.task}</span>
            <span className="text-[10px] text-[#999]">{item.taskLabel}</span>
            <span className="text-[10px] text-[#bbb] ml-auto">{item.time}</span>
          </div>
          <p className="text-[12px] font-bold text-[#333]">{item.name}</p>
          <p className="text-[10px] text-[#888] mt-0.5">{item.memo}</p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md flex items-center gap-1">
              <MessageSquare size={10} />카톡
            </span>
            <span className="text-[10px] text-[#999] bg-[#f5f5f5] px-2.5 py-1 rounded-md">안내불필요</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── AI 맞춤 카톡 — 예약확인/D-1/D+1 탭 전환 ─── */
function MockupKakao() {
  const [activeTab, setActiveTab] = useState<"t1" | "d1" | "d1plus">("t1");

  const kakaoMessages = {
    t1: {
      title: "예약확인",
      sender: "OO한의원",
      content: (
        <p className="text-[11px] text-[#333] leading-relaxed">
          안녕하세요, 서연님<br /><br />
          OO한의원 담당의 <b>이OO 원장</b>입니다.<br />
          오늘 치료 잘 받으셨는지 모르겠네요.<br /><br />
          아까 말씀드린 부분 중에서 한두 가지만 다시 말씀드릴게요.<br /><br />
          <b>핫팩은 하루 2~3번, 15분 정도</b> 해주시면 됩니다. 혈류 순환이 좋아져서 회복이 빨라집니다.<br /><br />
          무거운 물건은 당분간 피해주시고, 꼭 들어야 할 때는 허리가 아니라 <b>무릎을 굽혀서</b> 들어주시면 됩니다.<br /><br />
          <b>3월 24일(월) 14:00</b>에 예약 잡혀 있습니다.<br /><br />
          다음에 오실 때도 최선을 다해 진료하겠습니다. 그때 뵙겠습니다!<br />
          불편한 점 생기시면 언제든 편하게 연락 주세요.<br /><br />
          이OO 원장 드림
        </p>
      ),
    },
    d1: {
      title: "D-1 카톡",
      sender: "OO한의원",
      content: (
        <p className="text-[11px] text-[#333] leading-relaxed">
          안녕하세요, 서연님<br /><br />
          OO한의원 담당의 <b>이OO 원장</b>입니다.<br />
          오늘 치료 잘 받으셨는지 모르겠네요.<br /><br />
          아까 말씀드린 부분 중에서 한두 가지만 다시 적어드릴게요.<br /><br />
          <b>핫팩은 하루 2~3번, 15분 정도</b> 해주시면 됩니다. 혈류 순환이 좋아져서 회복이 빨라집니다.<br /><br />
          <b>3월 24일(월) 14:00</b>에 예약 잡혀 있습니다.<br /><br />
          이OO 원장 드림
        </p>
      ),
    },
    d1plus: {
      title: "D+1 카톡",
      sender: "OO한의원",
      content: (
        <p className="text-[11px] text-[#333] leading-relaxed">
          안녕하세요, 서연님<br /><br />
          OO한의원 담당의 <b>이OO 원장</b>입니다.<br />
          어제 내원 예정이셨는데 못 오셨더라고요. 별일 없으신지 걱정이 돼서 연락드렸어요.<br /><br />
          요즘 허리 쪽 통증이 심해지지는 않으셨을지 걱정이 됩니다.<br /><br />
          말씀드렸던 핫팩, 틈틈이 해주고 계시면 좋겠습니다.<br /><br />
          불편하신 부분이 있으시면 참지 마시고 편하게 오셔도 됩니다.<br />
          예약 없이 오셔도 괜찮습니다.<br /><br />
          이OO 원장 드림
        </p>
      ),
    },
  };

  const msg = kakaoMessages[activeTab];

  return (
    <div className="bg-white rounded-xl border border-[#e8e8e8] overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#f0f0f0] bg-[#fafafa]">
        <MessageSquare size={14} className="text-amber-500" />
        <span className="text-[12px] font-bold text-[#333]">AI 맞춤 카톡 생성</span>
      </div>
      <div className="p-4">
        {/* 탭 전환: 예약확인 / D-1 / D+1 */}
        <div className="flex items-center gap-1.5 mb-4">
          {([
            { key: "t1" as const, label: "예약확인", color: "bg-amber-500" },
            { key: "d1" as const, label: "D-1 카톡", color: "bg-blue-500" },
            { key: "d1plus" as const, label: "D+1 카톡", color: "bg-rose-500" },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all ${
                activeTab === tab.key
                  ? `${tab.color} text-white shadow-sm`
                  : "bg-[#f0f0f0] text-[#999] hover:bg-[#e8e8e8]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 카톡 미리보기 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="bg-[#B2C7D9] rounded-xl p-3 max-w-xs mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#FEE500] flex items-center justify-center">
                  <MessageSquare size={10} className="text-[#3C1E1E]" />
                </div>
                <span className="text-[11px] font-bold text-white">{msg.sender}</span>
              </div>
              <div className="bg-white rounded-lg p-3">
                {msg.content}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10px] text-[#999]">차트 기반 생활코칭 포함</span>
          <span className="text-[10px] text-[#00B6C5] font-semibold cursor-pointer">복사하기</span>
        </div>
      </div>
    </div>
  );
}

/* ─── 경영지표 대시보드 — 실제 그래프 포함 ─── */
function MockupDashboard() {
  const weeklyData = [
    { day: "월", patients: 12, revisit: 8 },
    { day: "화", patients: 18, revisit: 12 },
    { day: "수", patients: 15, revisit: 10 },
    { day: "목", patients: 22, revisit: 16 },
    { day: "금", patients: 25, revisit: 18 },
    { day: "토", patients: 20, revisit: 14 },
  ];
  const maxVal = 30;

  return (
    <div className="bg-white rounded-xl border border-[#e8e8e8] overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#f0f0f0] bg-[#fafafa]">
        <BarChart3 size={14} className="text-amber-500" />
        <span className="text-[12px] font-bold text-[#333]">경영지표 대시보드</span>
        <span className="text-[9px] text-[#999] bg-[#f0f0f0] px-1.5 py-0.5 rounded ml-auto">이번 주</span>
      </div>
      <div className="p-4">
        {/* KPI 카드 */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "총 환자", value: "112", icon: Users, change: "+12%", up: true, color: "text-[#00B6C5]" },
            { label: "재진율", value: "68%", icon: TrendingUp, change: "+5%", up: true, color: "text-green-500" },
            { label: "인박스 처리율", value: "94%", icon: Activity, change: "+8%", up: true, color: "text-amber-500" },
          ].map((kpi) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f8fafb] rounded-lg p-2.5 text-center border border-[#f0f0f0]"
            >
              <kpi.icon size={14} className={`${kpi.color} mx-auto mb-1`} />
              <p className="text-[8px] text-[#999] mb-0.5">{kpi.label}</p>
              <p className="text-[16px] font-extrabold text-[#111]">{kpi.value}</p>
              <p className={`text-[9px] font-bold ${kpi.up ? "text-green-500" : "text-red-500"}`}>
                {kpi.up ? "↑" : "↓"} {kpi.change}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 주간 환자 수 + 재진 환자 바 차트 */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-[#555]">주간 환자 현황</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#00B6C5]" />
                <span className="text-[8px] text-[#999]">전체</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#00B6C5]/30" />
                <span className="text-[8px] text-[#999]">재진</span>
              </div>
            </div>
          </div>
          <div className="flex items-end gap-2 h-24 px-1">
            {weeklyData.map((d, i) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-0.5">
                <div className="w-full relative" style={{ height: "80px" }}>
                  {/* 전체 환자 바 */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-[#00B6C5] rounded-t"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(d.patients / maxVal) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  />
                  {/* 재진 환자 바 (겹침) */}
                  <motion.div
                    className="absolute bottom-0 left-[15%] right-[15%] bg-[#00B6C5]/30 rounded-t"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(d.revisit / maxVal) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                  />
                  {/* 숫자 */}
                  <motion.span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] font-bold text-[#00B6C5]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.4 }}
                  >
                    {d.patients}
                  </motion.span>
                </div>
                <span className="text-[8px] text-[#999]">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 재진율 트렌드 라인 */}
        <div className="bg-[#f8fafb] rounded-lg p-2.5 border border-[#f0f0f0]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] font-bold text-[#555]">재진율 추이</span>
            <span className="text-[9px] text-green-500 font-bold">↑ 5% 상승</span>
          </div>
          <svg viewBox="0 0 200 40" className="w-full h-8">
            <motion.path
              d="M 0 35 L 33 28 L 66 30 L 100 22 L 133 18 L 166 15 L 200 10"
              fill="none"
              stroke="#00B6C5"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
            <motion.path
              d="M 0 35 L 33 28 L 66 30 L 100 22 L 133 18 L 166 15 L 200 10 L 200 40 L 0 40 Z"
              fill="url(#trendGrad)"
              opacity="0.15"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.15 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            />
            <defs>
              <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00B6C5" />
                <stop offset="100%" stopColor="#00B6C5" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex justify-between text-[7px] text-[#bbb] mt-0.5">
            <span>4주 전</span><span>3주 전</span><span>2주 전</span><span>지난주</span><span>이번주</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupAIFeedback() {
  return (
    <div className="bg-white rounded-xl border border-[#e8e8e8] overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#f0f0f0] bg-[#fafafa]">
        <Brain size={14} className="text-purple-500" />
        <span className="text-[12px] font-bold text-[#333]">AI 상담 피드백</span>
        <span className="text-[8px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded ml-auto">Coming Soon</span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#f0f0f0]">
          <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
            <span className="text-[11px] font-bold text-purple-600">김</span>
          </div>
          <div>
            <p className="text-[12px] font-bold text-[#333]">김서연</p>
            <p className="text-[10px] text-[#999]">허리 통증 · 3회차</p>
          </div>
          <span className="ml-auto text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">호전 중</span>
        </div>
        <div className="space-y-2">
          {[
            { label: "환자 유형", value: "꼼꼼한 정보 탐색형", icon: "" },
            { label: "소통 팁", value: "치료 근거와 경과를 수치로 설명하면 효과적", icon: "" },
            { label: "주의사항", value: "치료 기간에 대한 명확한 안내 필요", icon: "" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-2 bg-[#f8fafb] rounded-lg p-2.5">
              <span className="text-[10px] font-bold text-[#00B6C5] shrink-0">{item.label.charAt(0)}</span>
              <div>
                <p className="text-[10px] text-[#999] mb-0.5">{item.label}</p>
                <p className="text-[11px] text-[#555] font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Theme data ─── */
const themes: Theme[] = [
  {
    id: "charting",
    name: "진료 자동화",
    subtitle: "녹음만 하면 차트가 완성됩니다",
    color: "text-[#00B6C5]",
    lightBg: "bg-[#f0fafb]",
    features: [
      {
        icon: Mic,
        label: "AI 음성 차팅",
        title: "진료 중 녹음만 하세요.\nAI가 SOAP 차트를 만듭니다.",
        desc: "진료 대화를 실시간으로 텍스트로 변환하고, 한의학 SOAP 형식의 차트를 자동 생성합니다. 원장님은 확인 후 확정 1탭이면 끝.",
        bullets: ["음성 → 텍스트 자동 변환", "SOAP 차트 자동 생성", "확정 1탭으로 완료"],
        mockup: MockupRecording,
      },
      {
        icon: FileCheck,
        label: "EMR 복붙 대기열",
        title: "EMR 입력도\n복사 → 붙여넣기 1초.",
        desc: "확정된 SOAP 차트가 EMR 복붙 대기열에 자동 정렬됩니다. 어떤 EMR에도 호환됩니다. 원장님은 전자서명만.",
        bullets: ["자동 대기열 정렬", "어떤 EMR에도 호환"],
        mockup: MockupEMR,
      },
    ],
  },
  {
    id: "patient",
    name: "환자/직원 관리",
    subtitle: "직원이 바뀌어도 한의원이 똑같이 굴러갑니다",
    color: "text-blue-600",
    lightBg: "bg-blue-50/50",
    features: [
      {
        icon: Inbox,
        label: "실장 인박스",
        title: "실장은 인박스만\n따라하면 됩니다.",
        desc: "원장이 확정한 차트에서 태스크가 자동 생성됩니다. 우선순위대로 정렬되어 신입 실장도 Day 1부터 업무 가능.",
        bullets: ["태스크 자동 생성", "우선순위 정렬", "신입 Day 1 즉시 투입"],
        mockup: MockupInbox,
      },
      {
        icon: MessageSquare,
        label: "AI 맞춤 카톡",
        title: "차트 기반 맞춤 카톡,\nAI가 자동 생성합니다.",
        desc: "예약확인, D-1 리마인드, D+1 사후관리 카톡을 AI가 차트 내용과 생활코칭 기반으로 맞춤 생성합니다.",
        bullets: ["예약확인 · D-1 리마인드 · D+1 사후관리", "차트 기반 생활코칭 포함 메시지", "추후 자동 발송 업데이트 예정"],
        mockup: MockupKakao,
      },
    ],
  },
  {
    id: "growth",
    name: "경영 인사이트",
    subtitle: "데이터로 한의원 성장을 설계합니다",
    color: "text-amber-600",
    lightBg: "bg-amber-50/50",
    features: [
      {
        icon: BarChart3,
        label: "경영지표 대시보드",
        title: "재진율, 매출, 환자 현황.\n숫자로 한눈에 파악합니다.",
        desc: "재진율 추이, 일일 환자 수, 환자 유형 분포, 월 매출 변화를 실시간 대시보드로 확인합니다. 데이터 기반 의사결정이 가능해집니다.",
        bullets: ["재진율 · 매출 실시간 추적", "환자 유형별 분포 분석", "데이터 기반 경영 의사결정"],
        mockup: MockupDashboard,
      },
      {
        icon: Brain,
        label: "AI 상담 피드백",
        title: "환자 유형을 AI가 분석하고,\n맞춤 소통 팁을 제안합니다.",
        desc: "상담 내용을 바탕으로 환자 유형을 자동 분류하고, 환자별 맞춤 치료 접근법과 커뮤니케이션 팁을 AI가 제안합니다.",
        bullets: ["환자 유형 자동 분류", "맞춤 치료 접근법 제안", "환자 만족도 분석"],
        mockup: MockupAIFeedback,
      },
    ],
  },
];

/* ─── Main Component ─── */
export default function FeatureSection() {
  const [activeTheme, setActiveTheme] = useState(0);

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
            Features
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            한의원 운영의 모든 것을 자동화합니다
          </h2>
        </motion.div>

        {/* Theme tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {themes.map((theme, i) => (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(i)}
              className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all ${
                i === activeTheme
                  ? "bg-[#111] text-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
                  : "bg-[#f5f5f5] text-[#777] hover:bg-[#eee]"
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>

        {/* Active theme content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTheme}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            {/* Theme subtitle */}
            <p className={`text-center text-[15px] sm:text-[16px] font-medium ${themes[activeTheme].color} mb-10`}>
              {themes[activeTheme].subtitle}
            </p>

            {/* Features in this theme */}
            <div className="space-y-16 md:space-y-20">
              {themes[activeTheme].features.map((f, i) => {
                const isReversed = i % 2 === 1;
                const MockupComponent = f.mockup;
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-14`}
                  >
                    {/* Text */}
                    <div className="flex-1 max-w-md">
                      <div className="flex items-center gap-2 mb-3">
                        <f.icon className="w-4 h-4 text-[#00B6C5]" />
                        <span className="text-[12px] font-bold text-[#00B6C5] tracking-wide uppercase">{f.label}</span>
                      </div>
                      <h3 className="text-[20px] sm:text-[22px] md:text-[26px] font-extrabold text-[#111] leading-[1.3] whitespace-pre-line">
                        {f.title}
                      </h3>
                      <p className="mt-3 text-[13px] sm:text-[14px] text-[#666] leading-relaxed">
                        {f.desc}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {f.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-[12px] sm:text-[13px] text-[#555]">
                            <CheckCircle2 className="w-4 h-4 text-[#00B6C5] shrink-0 mt-0.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Inline UI Mockup */}
                    <div className="flex-1 max-w-sm md:max-w-md w-full">
                      <MockupComponent />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* App download CTA inline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.haniagent.kr/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] hover:bg-[#333] text-white font-semibold rounded-xl text-[14px] transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
          >
            <Monitor size={16} />
            지금 바로 시작하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
