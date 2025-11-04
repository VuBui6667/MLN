import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Section1: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const headingRef = useRef<HTMLDivElement | null>(null)
  const hiddenRef = useRef<HTMLDivElement | null>(null)
  const [headingHeight, setHeadingHeight] = useState(0);
  const [chapterHeights, setChapterHeights] = useState<number>(0);
  const chapterRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()
    // small helper to create a typing tween that appends characters
    const type = (el: HTMLDivElement | null, text: string, duration = 1.2) => {
      if (!el) return
      el.textContent = ''
      const obj = { i: 0 }
      tl.to(obj, {
        i: text.length,
        duration,
        ease: 'none',
        onUpdate: () => {
          const n = Math.floor(obj.i)
          el.textContent = text.substr(0, n)
        },
      })
      // small pause after each typed piece
      tl.to({}, { duration: 0.15 })
    }

    // SAFELY read the final texts we want to animate
    type(headingRef.current, 'DÂN CHỦ XÃ HỘI CHỦ NGHĨA VÀ NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA', 2.2)

    const chapterTexts = [
      'Sự Ra Đời của nhà nước xã hội chủ nghĩa',
      'Bản chất của nhà nước XHCN',
      'Chức năng của nhà nước XHCN',
      'Mối quan hệ giữa dân chủ XHCN và nhà nước XHCN',
      "Dân chủ XHCN ở Việt Nam",
      "Nhà nước pháp quyền XHCN ở Việt Nam",
      "Phương hướng phát huy dân chủ & xây dựng Nhà nước pháp quyền XHCN hiện nay"
    ]

    chapterRefs.forEach((r, i) => {
      // add slight stagger/duration increase so each chapter types after the previous
      type(r.current, chapterTexts[i], 0.9 + i * 0.2)
    })

    // Parallax scroll animations via ScrollTrigger
    if (sectionRef.current) {
      const baseTrigger = {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }

      // heading moves slower (parallax)
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: { ...baseTrigger },
        })
      }

      // chapters each get slightly different parallax amounts
      chapterRefs.forEach((r, i) => {
        if (r.current) {
          gsap.to(r.current, {
            y: -30 - i * 12, // pixel offset; adjust to taste
            ease: 'none',
            scrollTrigger: { ...baseTrigger },
          })
        }
      })
    }

    return () => {
      tl.kill()
      // kill all scroll triggers created by this component
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`h-fit bg-[#efe8db] text-[#0b0b0b] pt-8 md:pt-12 relative`}
    >
      <header className="flex justify-between items-start mb-8 px-8 md:px-12">
        <div className="text-lg uppercase tracking-wider text-gray-600">MLN131 • Group 2</div>
      </header>
      <div className="flex items-start mb-12">
        <div
          ref={headingRef}
          className="font-extrabold leading-[1.2] text-black text-[64px] md:text-[120px] whitespace-pre-wrap absolute left-[48px] top-[100px] pr-8 md:pr-12"
          aria-hidden
        />
        <div
          className="font-extrabold leading-[1.2] text-black text-[64px] md:text-[120px] whitespace-pre-wrap opacity-0 px-8 md:px-12"
          aria-hidden
        >
          DÂN CHỦ XÃ HỘI CHỦ NGHĨA VÀ NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-12 border-y border-black/60 w-full">
        {[
          { label: '01', ref: chapterRefs[0], color: '#e94b59' },
          { label: '02', ref: chapterRefs[1], color: '#e94b59' },
          { label: '03', ref: chapterRefs[2], color: '#e94b59' },
          { label: '04', ref: chapterRefs[3], color: '#e94b59' },
          { label: '05', ref: chapterRefs[4], color: '#e94b59' },
          { label: '06', ref: chapterRefs[5], color: '#e94b59' },
          { label: '07', ref: chapterRefs[6], color: '#e94b59' },
        ].map((c, i) => (
          <div
            key={i}
            className={`relative p-6 border border-black/30 min-h-[346px] ${i <= 3 ? 'md:col-span-3' : 'md:col-span-4'
              }`}
            style={{ background: c.color }}
          >
            <div className="absolute top-4 left-4 text-lg font-bold">{c.label}</div>
            <div
              ref={c.ref}
              className="font-extrabold text-3xl md:text-4xl lg:text-5xl mt-20 text-align-justify leading-tight text-center"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section1