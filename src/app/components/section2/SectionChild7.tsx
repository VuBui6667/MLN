import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"
import cn from "@/utils"
import StickyNote2 from "./StickyNote2"

const SectionChild7: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { ref: triggerRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!sectionRef.current || !inView) return

    const ctx = gsap.context(() => {
      // Title entrance
      gsap.from(".js-title", {
        y: 80,
        autoAlpha: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.05,
      })

      // decorative barbed wire
      gsap.from(".js-barb", {
        x: -40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      })

      // caption lines
      gsap.from(".js-caption > *", {
        y: 20,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.4,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [inView])

  return (
    <section ref={sectionRef} className="w-full min-w-[100vw] h-screen flex relative bg-[#0b0b0b]">
      {/* LEFT PANEL */}
      <div className={cn("relative w-3/5 overflow-hidden px-12 py-8 flex flex-col", inView ? "" : "opacity-0")}>
        {/* Big title */}
        <div className="mt-4">
          <h1
            className="js-title text-[#efe6d0] font-extrabold leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 8.5rem)" }}
          >
            Tính đa dạng trong quá trình ra đời
          </h1>

          {/* barbed wire decorative */}
          <div className="mt-6">
            <div className="flex items-center gap-2 text-[#c64b4b] js-barb">
              {/* repeated tiny barbed-wire shapes */}
              <svg width="220" height="18" viewBox="0 0 220 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9H220" stroke="#c64b4b" strokeWidth="2" strokeLinecap="round" />
                <g stroke="#c64b4b" strokeWidth="2" strokeLinecap="round">
                  <path d="M20 9l6-4M20 9l6 4M52 9l6-4M52 9l6 4M84 9l6-4M84 9l6 4M116 9l6-4M116 9l6 4M148 9l6-4M148 9l6 4" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* bottom caption */}
        <div className="w-[80%] mt-10 js-caption">
          <div className="text-[#efe6d0] text-xl leading-8">
            <p className="mb-4 font-semibold">
              Tùy vào điều kiện kinh tế, chính trị, văn hóa của từng quốc gia mà nhà nước xã hội chủ nghĩa ra đời theo những con đường khác nhau:
            </p>

            <ul className="list-disc list-inside space-y-3 text-base">
              <li>Ở các nước tư bản phát triển, cách mạng vô sản diễn ra trong lòng xã hội tư bản.</li>
              <li>Ở các nước thuộc địa như Việt Nam, cách mạng dân tộc giải phóng gắn liền với cách mạng xã hội chủ nghĩa.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="relative w-2/5" ref={triggerRef}>
        {/* background image (replace url with your image) */}
        <div
          className="absolute inset-0 bg-cover bg-center filter grayscale contrast-90"
          style={{
            backgroundImage: "url('/images/prison.jpg')",
            mixBlendMode: "multiply",
            backgroundColor: "#1e5b3a",
          }}
          aria-hidden
        />

        {/* green overlay to match tonal look */}
        <div className="absolute inset-0 bg-green-900/40" />

        {/* stack of sticky notes */}
      </div>
      {inView &&
        <StickyNote2 />
      }
    </section>
  )
}

export default SectionChild7