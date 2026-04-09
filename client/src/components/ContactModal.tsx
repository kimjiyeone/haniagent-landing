import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Phone, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="sm:max-w-md bg-white border border-[#e8e8e8] rounded-2xl p-0 overflow-hidden">
        {/* 상단 헤더 영역 */}
        <div className="px-6 pt-6 pb-4">
          <DialogHeader>
            <DialogTitle className="text-[20px] font-extrabold text-[#111] tracking-tight">
              도입 문의
            </DialogTitle>
            <DialogDescription className="text-[14px] text-[#777] mt-1.5 leading-relaxed">
              편하신 방법으로 연락 주시면 빠르게 안내드리겠습니다.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* 연락처 카드 */}
        <div className="px-6 pb-6 space-y-3">
          {/* 전화번호 */}
          <a
            href="tel:010-3357-0527"
            className="flex items-center gap-4 p-4 rounded-xl border border-[#e8e8e8] hover:border-[#00B6C5]/40 hover:bg-[#f8fdfb] transition-all group"
          >
            <div className="w-11 h-11 rounded-full bg-[#e8f7f8] flex items-center justify-center shrink-0 group-hover:bg-[#00B6C5]/15 transition-colors">
              <Phone size={18} className="text-[#00B6C5]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] text-[#999] font-medium">전화 문의</p>
              <p className="text-[16px] font-bold text-[#111] tracking-wide">010-3357-0527</p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCopy("010-3357-0527", "phone");
              }}
              className="w-9 h-9 rounded-lg border border-[#e8e8e8] hover:border-[#ccc] flex items-center justify-center transition-colors shrink-0"
              aria-label="전화번호 복사"
            >
              {copiedPhone ? (
                <Check size={14} className="text-[#00B6C5]" />
              ) : (
                <Copy size={14} className="text-[#999]" />
              )}
            </button>
          </a>

          {/* 이메일 */}
          <a
            href="mailto:jykim@hanitek.kr"
            className="flex items-center gap-4 p-4 rounded-xl border border-[#e8e8e8] hover:border-[#00B6C5]/40 hover:bg-[#f8fdfb] transition-all group"
          >
            <div className="w-11 h-11 rounded-full bg-[#e8f7f8] flex items-center justify-center shrink-0 group-hover:bg-[#00B6C5]/15 transition-colors">
              <Mail size={18} className="text-[#00B6C5]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] text-[#999] font-medium">이메일 문의</p>
              <p className="text-[16px] font-bold text-[#111]">jykim@hanitek.kr</p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCopy("jykim@hanitek.kr", "email");
              }}
              className="w-9 h-9 rounded-lg border border-[#e8e8e8] hover:border-[#ccc] flex items-center justify-center transition-colors shrink-0"
              aria-label="이메일 복사"
            >
              {copiedEmail ? (
                <Check size={14} className="text-[#00B6C5]" />
              ) : (
                <Copy size={14} className="text-[#999]" />
              )}
            </button>
          </a>
        </div>

        {/* 하단 안내 */}
        <div className="px-6 py-4 bg-[#fafafa] border-t border-[#f0f0f0]">
          <p className="text-[12px] text-[#999] text-center leading-relaxed">
            평일 9:00 ~ 20:00 응대 가능 · 이메일은 24시간 접수
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
