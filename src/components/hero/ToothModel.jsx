"use client";

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const ToothModel = () => {
  useEffect(() => {
    // Floating Doctor Image
    gsap.to(".doctor-image", {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Floating Cards
    gsap.to(".floating-card-1", {
      y: -12,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(".floating-card-2", {
      y: -12,
      duration: 2,
      delay: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="relative flex justify-center items-center">

      {/* Doctor Image */}
      <div className="doctor-image relative w-full max-w-[520px]">
        <Image
          src="/images/doctor/doctor-main.png"
          alt="Doctor"
          width={520}
          height={650}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Floating Card 1 */}
      <div className="floating-card-1 absolute top-10 left-0 bg-white shadow-xl rounded-2xl px-5 py-3">

        <h4 className="font-bold text-lg">
          12+ Years
        </h4>

        <p className="text-slate-500 text-sm">
          Experience
        </p>

      </div>

      {/* Floating Card 2 */}
      <div className="floating-card-2 absolute bottom-10 right-0 bg-white shadow-xl rounded-2xl px-5 py-3">

        <h4 className="font-bold text-lg">
          ★ 4.9/5
        </h4>

        <p className="text-slate-500 text-sm">
          Patient Rating
        </p>

      </div>

    </div>
  );
};

export default ToothModel;