import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SectionChild5: React.FC = () => {
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
      <div className="relative w-[100vw] flex items-center bg-gradient-to-r from-[#f1eada] to-black">
        <div
          ref={bgRef}
          role="presentation"
          aria-hidden={true}
          className="absolute inset-0 bg-cover bg-center z-[10] filter brightness-75 contrast-75 pointer-events-none sepia"
          style={{ backgroundImage: "url('/images/section4.3.webp')", willChange: "transform" }}
        />
      </div>
    </section>
  );
};

export default SectionChild5;
