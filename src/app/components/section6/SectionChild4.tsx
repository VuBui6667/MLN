import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"
import cn from "@/utils"

const SectionChild3: React.FC = () => {
  const sectionRef1 = useRef<HTMLDivElement | null>(null)

  const sectionRef2 = useRef<HTMLDivElement | null>(null)

  const sectionRef3 = useRef<HTMLDivElement | null>(null)

  const { ref: triggerRef1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: triggerRef2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: triggerRef3, inView: inView3 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!sectionRef1.current || !inView1) return

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
    }, sectionRef1)

    return () => ctx.revert()
  }, [inView1])

  useEffect(() => {
    if (!sectionRef2.current || !inView2) return

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
    }, sectionRef2)

    return () => ctx.revert()
  }, [inView2])

  useEffect(() => {
    if (!sectionRef3.current || !inView3) return

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
    }, sectionRef3)

    return () => ctx.revert()
  }, [inView3])

  return (
    <section className="w-full min-w-[150vw] h-screen flex relative bg-[#0b0b0b]">
      {/* PANEL 1 */}
      <div ref={triggerRef1} />
      <div
        ref={sectionRef1}
        className={cn("relative z-[20] w-[50%] px-12 py-8 flex flex-col", inView1 ? "" : "opacity-0")}
      >
        {/* Big title */}
        <div className="mt-4">
          <h1
            className="js-title text-[#efe6d0] font-extrabold leading-[1.2] tracking-tight uppercase"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Nếu Nhà nước XHCN mất bản chất → dân chủ sẽ chỉ còn hình thức
          </h1>

          {/* barbed wire decorative */}
          <div className="mt-6">
            <div className="flex items-center gap-2 text-[#c64b4b] js-barb">
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
          <div className="text-[#efe6d0] text-xl leading-8">
            <div className="mb-4 block font-light">
              <span className="inline-block font-bold mr-1">
                Khi bộ máy nhà nước tha hóa, xa rời nhân dân, thì:
              </span>
            </div>
            <div className="mb-4 inline-block font-light">
              <ul className="list-disc list-inside space-y-2 text-xl mt-2">
                <li>Dân chủ bị biến dạng</li>
                <li>Quyền lực rơi vào tay một nhóm nhỏ</li>
                <li>Dễ dẫn tới độc đoán, quan liêu, tham nhũng
                </li>
              </ul>
            </div>
            <div className="mb-4 block font-light">
              <span className="inline-block font-bold mr-1">
                → Khi đó, “dân chủ” chỉ nằm trên khẩu hiệu, còn thực tế là độc tài dưới vỏ bọc hình thức dân chủ.
              </span>
            </div>
          </div>
        </div>
      </div>

      <img src="/images/arrow.gif" className="absolute w-20 h-auto left-[70vw] bottom-40 rotate-180" />
      <div ref={triggerRef2} />
      {/* PANEL 2 */}
      <div ref={sectionRef2} className="relative w-[50%] bg-green-900/40 px-12 py-8 flex-col">

        {/* Big title */}
        <div className="mt-4">
          <h1
            className="js-title text-[#efe6d0] font-extrabold leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Mối quan hệ giữa dân chủ XHCN và Nhà nước XHCN là quan hệ song hành và nhân quả:
          </h1>

          {/* barbed wire decorative */}
          <div className="mt-6">
            <div className="flex items-center gap-2 text-[#c64b4b] js-barb">
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
          <div className="text-[#efe6d0] text-xl leading-8">
            <div className="mb-4 inline-block font-light">
              <ul className="list-disc list-inside space-y-2 text-xl mt-2">
                <li>Dân chủ sinh ra Nhà nước XHCN</li>
                <li>Nhà nước XHCN bảo đảm dân chủ vận hành trong đời sống</li>
              </ul>
            </div>
            <div className="mb-4 inline-block font-light">
              <span className="inline-block font-bold mr-1">
                Giữ đúng bản chất XHCN của Nhà nước chính là cách duy nhất để dân chủ XHCN được thực thi thực chất, không trở thành hình thức.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default SectionChild3