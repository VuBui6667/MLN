import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"
import cn from "@/utils"
// import { usePathname } from "next/navigation"
import ViewModal from "../ViewModal"

const SectionChild4: React.FC = () => {
  // const pathname = usePathname()
  const isQuiz = false
  const sectionRef = useRef<HTMLElement | null>(null)
  const { ref: triggerRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  const [isOpen, setIsOpen] = useState(false)

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
    <section ref={sectionRef} className="w-[80vw] min-w-[80vw] h-screen flex relative bg-[#0b0b0b]">
      {/* LEFT PANEL */}
      <div className={cn("relative w-full overflow-hidden px-12 py-8 flex flex-col to-[#e94b59]", inView ? "" : "opacity-0")} ref={triggerRef}>
        {/* Big title */}
        <div className="mt-4">
          <h1
            className="js-title text-red-500 font-extrabold leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 8.5rem)" }}
          >
            Dân chủ gián tiếp (Đại diện)
          </h1>

          {/* barbed wire decorative */}
          <div className="mt-6">
            <div className="flex items-center gap-2 text-white js-barb">
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
        <div className="w-[80%] mt-10 js-caption">
          <div className="text-white text-xl leading-8">
            <ol className="list-decimal list-inside space-y-3 text-base ml-4">
              <li>Nhân dân ủy quyền quyền lực cho cơ quan đại diện do mình bầu ra</li>
              <li>Quốc hội & HĐND thay mặt nhân dân quyết định các vấn đề quan trọng</li>
              <li>Thể hiện quyền làm chủ thông qua đại diện</li>
              <li>Đại biểu do dân bầu theo nhiệm kỳ → trách nhiệm giải trình trước nhân dân</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionChild4