import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import StickyNote from "./StickyNote"
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
    <section ref={sectionRef} className="w-full min-w-[80vw] h-screen flex relative bg-[#e94b59]">
      {/* LEFT PANEL */}
      <div ref={triggerRef} className={cn("relative w-3/5 overflow-hidden px-12 py-8 flex flex-col", inView ? "" : "opacity-0")}>
        {/* Big title */}
        <div className="mt-4">
          <h1
            className="js-title text-[#efe6d0] font-extrabold leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 8.5rem)" }}
          >
            Dân chủ trực tiếp
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
            <ul className="list-disc list-inside space-y-3 text-base">
              <li>Nhân dân trực tiếp tham gia vào hoạt động quản lý nhà nước & xã hội</li>
              <li>Được cung cấp thông tin, thảo luận, quyết định vấn đề ở cộng đồng</li>
              <li>Cơ chế dân chủ cơ sở: “Dân biết – dân bàn – dân làm – dân kiểm tra”</li>
              <li>Giám sát hoạt động của cơ quan nhà nước ngay từ cơ sở</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionChild7