import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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
      className="relative min-w-[100vw] w-full min-h-screen flex bg-black"
    >
      <div className="relative w-[100vw] flex items-center bg-gradient-to-r from-green-900/40 to-black">
        <div
          ref={bgRef}
          role="presentation"
          aria-hidden={true}
          className="absolute inset-0 bg-cover bg-center z-[10] filter brightness-75 contrast-75 pointer-events-none sepia"
          style={{ backgroundImage: "url('/images/section5.2.webp')", willChange: "transform" }}
        />

        <div className="absolute z-[99] w-[92%] max-w-[1100px] text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1
            ref={titleRef}
            className="mt-4 font-extrabold leading-[1.2] text-[clamp(36px,8vw,52px)] tracking-[-0.08em] uppercase text-[#f2eadf] relative max-w-[1100px] drop-shadow-[0_6px_18px_rgba(0,0,0,0.7)]"
            style={{ willChange: "transform" }}
          >
            Đặc Trưng Nhà Nước
            <br />
            Pháp Quyền XHCN Việt Nam
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
          <div className="text-3xl mt-8 text-[#f2eadf] max-w-3xl mx-auto leading-7">
            Kết hợp bản chất giai cấp công nhân với tính dân tộc rộng rãi. Quyền lực nhà nước thống nhất với sự phân công, phối hợp giữa các cơ quan lập pháp, hành pháp, tư pháp.
          </div>
          <div className="text-2xl flex flex-col justify-center mt-8 text-[#f2eadf] max-w-3xl mx-auto leading-7 gap-4 bg-red-500/30 p-6 w-fit rounded-xl">
            <p>Thống Nhất: Quyền lực nhà nước tập trung</p>
            <p>Phối hợp: Các cơ quan hoạt động hiệp thương</p>
            <p>Dân tộc: Gắn bó chặt chẽ với nhân dân</p>
            <p>Kiểm soát: Cân bằng quyền lực hậu quả</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionChild2;
