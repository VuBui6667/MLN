import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"
import cn from "@/utils"
// import { usePathname } from "next/navigation"

const SectionChild4: React.FC = () => {
  // const pathname = usePathname()
  // const isQuiz = pathname === '/quiz'
  const sectionRef = useRef<HTMLElement | null>(null)
  const { ref: triggerRef, inView } = useInView({
    threshold: 0.5,
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
    <section ref={sectionRef} className="w-full min-w-[100vw] h-screen flex relative bg-[#e94b59]">
      <img
        src="/images/section4.4.png"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] rounded-l-xl"
      />
      {/* LEFT PANEL */}
      <div className={cn("relative w-full overflow-hidden px-12 py-8 flex flex-col", inView ? "" : "opacity-0")} ref={triggerRef}>
        {/* Big title */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h1
              className="js-title text-white font-extrabold leading-[1.2] tracking-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 8.5rem)" }}
            >
              Chức năng đối ngoại
            </h1>
          </div>

          {/* barbed wire decorative */}
          <div className="mt-6">
            <div className="flex items-center gap-2 text-black js-barb">
              {/* repeated tiny barbed-wire shapes */}
              <svg width="220" height="18" viewBox="0 0 220 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9H220" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <path d="M20 9l6-4M20 9l6 4M52 9l6-4M52 9l6 4M84 9l6-4M84 9l6 4M116 9l6-4M116 9l6 4M148 9l6-4M148 9l6 4" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* bottom caption */}
        <div className="w-[60%] mt-10 js-caption">
          <div className="text-white text-4xl leading-8">
            <ul className="list-decimal list-inside space-y-3 text-2xl ml-4">
              <li>Giữ vững độc lập, chủ quyền, toàn vẹn lãnh thổ.</li>
              <li>Mở rộng hợp tác quốc tế, giao lưu văn hóa – kinh tế.</li>
              <li>Đấu tranh vì hòa bình, công lý, hữu nghị giữa các dân tộc.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionChild4