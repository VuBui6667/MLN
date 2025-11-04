import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SwapNote from "../SwapNote";
import { usePathname } from "next/navigation";
import ViewModal from "../ViewModal";
import { onSubmitQuiz } from "@/lib/utils";
import { toast } from "react-toastify";

const SectionChild2: React.FC = () => {
  const pathname = usePathname()
  const isQuiz = pathname === '/quiz'
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const yearRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const scribbleRef = useRef<SVGPathElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const clamp = (v: number, a = -1, b = 1) => Math.max(a, Math.min(b, v));

    const onScroll = () => {
      if (!sectionRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current!.getBoundingClientRect();
          const sectionCenterX = rect.left + rect.width / 2;
          const viewportCenterX = window.innerWidth / 2;
          const progress = clamp((sectionCenterX - viewportCenterX) / (window.innerWidth / 2));

          // multipliers increased for visible effect
          const bgX = progress * 80;
          const titleX = progress * 160;
          const yearX = progress * 100;
          const scribbleX = progress * 110;
          const scribbleRot = progress * 10;

          if (bgRef.current) {
            gsap.to(bgRef.current, { x: bgX, ease: "power3.out", overwrite: true, duration: 0.6 });
          }
          if (titleRef.current) {
            gsap.to(titleRef.current, { x: titleX, ease: "power3.out", overwrite: true, duration: 0.6 });
          }
          if (yearRef.current) {
            gsap.to(yearRef.current, { x: yearX, ease: "power3.out", overwrite: true, duration: 0.6 });
          }
          if (scribbleRef.current) {
            gsap.to(scribbleRef.current, {
              x: scribbleX,
              rotation: scribbleRot,
              transformOrigin: "50% 50%",
              ease: "power3.out",
              overwrite: true,
              duration: 0.6,
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      gsap.killTweensOf([bgRef.current, titleRef.current, yearRef.current, scribbleRef.current]);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitQuiz = async (answerType: string) => {
    if (isLoading) return;
    setIsLoading(true);

    const toastId = toast.loading("Đang gửi câu trả lời...");

    try {
      const username = localStorage.getItem("username") || "Guest";
      const isScored = answerType === "C";
      const data = await onSubmitQuiz({
        username,
        quizId: 4,
        isScored,
      });

      // close the loading toast before showing the result toast
      toast.dismiss(toastId);

      if (data.error) {
        toast.error(`Có lỗi xảy ra: ${data.error}`);
      } else {
        if (isScored) {
          toast.success("Chúc mừng! Bạn đã trả lời đúng câu hỏi.");
        } else {
          toast.warning("Rất tiếc! Câu trả lời của bạn chưa chính xác.");
        }
      }

      setIsOpen(false);
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Đã xảy ra lỗi. Vui lòng thử lại.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-w-[150vw] w-full min-h-screen flex bg-black"
    >
      <div className="relative w-[100vw] flex items-center bg-gradient-to-r from-[#e94b59] to-green-900/40">
        <div
          ref={bgRef}
          role="presentation"
          aria-hidden={true}
          className="absolute inset-0 bg-cover bg-center z-[10] filter brightness-75 contrast-75 pointer-events-none sepia"
          style={{ backgroundImage: "url('/images/section9.1.webp')", willChange: "transform" }}
        />
        <p className="absolute z-[99] w-[92%] max-w-[1100px] text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#f2eadf] text-[8rem]">Khái niệm Nhà nước pháp quyền
          <br /> XHCN Việt Nam</p>
      </div>
      <div className="w-[50vw] h-screen flex items-center justify-center bg-green-900/40">
        <SwapNote
          notes={[
            "Nhà nước của nhân dân, do nhân dân, vì nhân dân",
            "Tổ chức và hoạt động trên cơ sở Hiến pháp và pháp luật",
            "Nhằm phát huy quyền làm chủ của nhân dân, tôn trọng – bảo vệ – bảo đảm quyền con người",
            "Dưới sự lãnh đạo của Đảng Cộng sản Việt Nam."
          ]}
        />
      </div>
    </section>
  );
};

export default SectionChild2;
