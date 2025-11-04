import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"
import cn from "@/utils"

const SectionChild5: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const rafRef = useRef<number | null>(null)

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

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full min-w-[200vw] h-screen flex relative bg-[#0b0b0b]">
      {/* LEFT PANEL */}
      <div
        ref={triggerRef}
        className={cn("relative z-[20] w-[50%] px-12 py-8 flex flex-col", inView ? "" : "opacity-0")}
      >
        {/* FOLLOW IMAGE (replace src with your image) */}

        {/* Big title */}
        <div className="mt-4">
          <h1
            className="js-title text-[#efe6d0] font-extrabold leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 8.5rem)" }}
          >
            CHỨC NĂNG GIAI CẤP (TRẤN ÁP)
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
            <ul className="list-disc list-inside space-y-3 text-xl">
              <li>Trấn áp thế lực phản động, chống phá Nhà nước.</li>
              <li>Bảo vệ lợi ích của nhân dân lao động.
              </li>
              <li>Giữ gìn an ninh, trật tự, kỷ cương.</li>
            </ul>
          </div >
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="relative w-[50%] bg-[#c64b4b] px-12 py-8 flex-col">

        {/* Big title */}
        <div className="mt-4">
          <h1
            className="js-title text-[#efe6d0] font-extrabold leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 8.5rem)" }}
          >
            CHỨC NĂNG XÃ HỘI (TỔ CHỨC, XÂY DỰNG)
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
            <ul className="list-disc list-inside space-y-3 text-xl">
              <li>Tổ chức, quản lý và phát triển xã hội.
              </li>
              <li>Xây dựng kinh tế, văn hóa, giáo dục, y tế.
              </li>
              <li>Thực hiện an sinh xã hội, nâng cao đời sống nhân dân.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-[50%] bg-green-900/40 px-12 py-8 flex-col">

        {/* Big title */}
        <div className="mt-4">
          <h1
            className="js-title text-[#efe6d0] font-extrabold leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 8.5rem)" }}
          >
            CHỨC NĂNG
            <br />
            XÃ HỘI – CƠ BẢN, QUAN TRỌNG NHẤT
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
            <ul className="list-disc list-inside space-y-3 text-xl">
              <li>Trọng tâm: xây dựng cơ sở vật chất và con người XHCN.
              </li>
              <li>Hướng đến mục tiêu: “Dân giàu – Nước mạnh – Dân chủ – Công bằng – Văn minh”.
              </li>
              <li>Nhà nước phục vụ nhân dân, vì con người.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section >
  )
}

export default SectionChild5