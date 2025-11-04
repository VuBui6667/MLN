import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SwapNote from "../SwapNote";

const SectionChild2: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const yearRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const scribbleRef = useRef<SVGPathElement | null>(null);

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
          className="absolute inset-0 bg-cover bg-center z-[10] filter brightness-75 contrast-75 pointer-events-none grayscale blur-[2px]"
          style={{ backgroundImage: "url('/images/section7.1.webp')", willChange: "transform" }}
        />

        <div className="absolute z-[99] w-[92%] max-w-[1100px] text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1
            ref={titleRef}
            className="mt-4 font-extrabold leading-[1.2] text-[clamp(36px,8vw,80px)] tracking-[-0.08em] uppercase text-[#f2eadf] relative max-w-[1100px] drop-shadow-[0_6px_18px_rgba(0,0,0,0.7)]"
            style={{ willChange: "transform" }}
          >
            Tầm quan trọng của mối quan hệ giữa dân chủ
            <br />
            và Nhà nước pháp quyền XHCN
            <span
              className="block absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-[86%] h-[36px] pointer-events-none"
              aria-hidden
            >
              <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-full">
                <path
                  ref={scribbleRef}
                  d="M10 20 C50 10, 90 30, 130 18 C170 6, 210 30, 250 18 C290 6, 330 30, 390 20"
                  stroke="#e24b5a"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  style={{ willChange: "transform" }}
                />
              </svg>
            </span>
          </h1>
        </div>
      </div>
      <div className="w-[50vw] h-screen flex items-center justify-center bg-green-900/40 relative">
        <SwapNote
          titles={[
            "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN.",
            "Xây dựng Đảng trong sạch, vững mạnh.",
            "Xây dựng Nhà nước pháp quyền mạnh.",
            "Tăng cường vai trò tổ chức chính trị – xã hội.",
            "Hoàn thiện hệ thống giám sát, phản biện.",
            "Nâng cao hiệu quả hoạt động Quốc hội.",
            "Xây dựng đội ngũ cán bộ, công chức.",
            "Phòng chống tham nhũng, lãng phí."
          ]}
          notes={[
            "-> Phát triển kinh tế gắn với công bằng xã hội; hoàn thiện cơ chế sở hữu, phân phối, cạnh tranh lành mạnh; Nhà nước vừa tôn trọng quy luật thị trường vừa bảo đảm định hướng XHCN.",
            "-> Chỉnh đốn, nâng cao năng lực lãnh đạo; thực hành dân chủ trong Đảng; đề cao phê bình, tự phê bình và lắng nghe dân.",
            "-> Hoàn thiện pháp luật, cải cách hành chính, đổi mới tư pháp; bảo đảm quyền con người và công lý.",
            "-> Phát huy vai trò cầu nối giữa dân và Nhà nước; thực hiện giám sát, phản biện xã hội.",
            "-> Tăng kiểm soát quyền lực, mở rộng vai trò báo chí và nhân dân trong giám sát, phản biện chính sách.",
            "-> Tăng năng lực lập pháp, giám sát; minh bạch hoạt động; ứng dụng công nghệ số để gắn kết với cử tri.",
            "-> Tuyển chọn, đào tạo, đánh giá minh bạch; đề cao trách nhiệm cá nhân và hiệu quả công việc.",
            "-> Hoàn thiện kiểm soát tài sản cán bộ; tăng vai trò cơ quan chống tham nhũng và giám sát của nhân dân, báo chí.",
          ]}
        />
      </div>
    </section>
  );
};

export default SectionChild2;
