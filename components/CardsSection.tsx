// SelectedWork.jsx

"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        borderRadius: "100px",
      },
      {
        borderRadius: "12px",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="min-h-[200vh] pt-24">

      <div 
        ref={sectionRef} 
        className="bg-[#d9dbe1] max-w-[1480px] mx-auto px-8 pt-40 pb-8 rounded-[104px] overflow-hidden"
      >
        <div className="grid grid-cols-4  gap-5">
          <div className="w-full h-96 bg-gray-400 rounded-2xl" />
          <div className="w-full h-96 bg-gray-400 rounded-2xl" />
          <div className="w-full h-96 bg-gray-400 rounded-2xl" />
          <div className="w-full h-96 bg-gray-400 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}