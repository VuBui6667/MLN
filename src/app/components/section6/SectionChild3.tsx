import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SectionChild2: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const yearRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const scribbleRef = useRef<SVGPathElement | null>(null);
  const subRef1 = useRef<HTMLDivElement | null>(null);
  const subRef2 = useRef<HTMLDivElement | null>(null);

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
          if (subRef1.current) {
            const sub1X = progress * 130;
            gsap.to(subRef1.current, { x: sub1X, ease: "power3.out", overwrite: true, duration: 0.6 });
          }
          if (subRef2.current) {
            const sub2X = progress * 150;
            gsap.to(subRef2.current, { x: sub2X, ease: "power3.out", overwrite: true, duration: 0.6 });
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
      className="relative min-w-[100vw] w-full min-h-screen flex bg-black"
    >
      <div className="relative w-[100vw] flex items-center bg-gradient-to-r from-green-900/40 to-black">
        <div
          ref={bgRef}
          role="presentation"
          aria-hidden={true}
          className="absolute inset-0 bg-cover bg-center z-[10] filter brightness-75 contrast-75 pointer-events-none sepia"
          style={{ backgroundImage: "url('/images/section6.2.webp')", willChange: "transform" }}
        />

        <div className="absolute z-[99] w-[92%] max-w-[1100px] text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1
            ref={titleRef}
            className="mt-4 font-extrabold leading-[1.2] text-[clamp(36px,8vw,52px)] tracking-[-0.08em] uppercase text-[#f2eadf] relative max-w-[1100px] drop-shadow-[0_6px_18px_rgba(0,0,0,0.7)]"
            style={{ willChange: "transform" }}
          >
            Nhà nước XHCN là công cụ
            <br />
            thực hiện và bảo đảm dân chủ XHCN
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
          <div className="text-3xl mt-8 text-[#f2eadf] max-w-3xl mx-auto leading-7" ref={subRef1}>
            Dân chủ là mục tiêu – Nhà nước là phương tiện
          </div>
          <div className="text-2xl flex flex-col justify-center mt-8 text-[#f2eadf] mx-auto leading-7 gap-4 bg-red-500/30 p-6 w-fit rounded-xl" ref={subRef2}>
            <p>Nhà nước XHCN được tổ chức để biến dân chủ từ “ý chí” thành “hiện thực”.</p>
            <p>Thông qua hệ thống pháp luật, bộ máy quyền lực, nhà nước:</p>
            <p>1. Tổ chức nhân dân tham gia quản lý xã hội</p>
            <p>2. Bảo vệ quyền dân chủ</p>
            <p>3. Xử lý mọi hành vi xâm phạm dân chủ của nhân dân</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionChild2;
