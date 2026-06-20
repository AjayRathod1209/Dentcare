"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const AboutDoctor = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "all",
      });

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        clearProps: "all",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-slate-50"
    >
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">

            <div className="about-card bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-5xl font-bold text-blue-900">
                5000+
              </h3>
              <p className="mt-3 text-slate-500">
                Happy Patients
              </p>
            </div>

            <div className="about-card bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-5xl font-bold text-cyan-500">
                12+
              </h3>
              <p className="mt-3 text-slate-500">
                Years Experience
              </p>
            </div>

            <div className="about-card bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-5xl font-bold text-blue-900">
                98%
              </h3>
              <p className="mt-3 text-slate-500">
                Satisfaction Rate
              </p>
            </div>

            <div className="about-card bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-5xl font-bold text-cyan-500">
                24/7
              </h3>
              <p className="mt-3 text-slate-500">
                Emergency Support
              </p>
            </div>

          </div>

          {/* Right Side - Content */}
          <div className="about-content">

            <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-semibold uppercase tracking-[2px]">
              About DentaCare
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Creating Healthy &
              Beautiful Smiles
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              At DentaCare, we believe every patient deserves exceptional dental care in a comfortable and welcoming environment.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              From routine checkups and preventive care to cosmetic dentistry, smile makeovers, implants, and advanced restorative treatments.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <p>Advanced Dental Technology</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <p>Certified Dental Specialists</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <p>Personalized Treatment Plans</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <p>Emergency Dental Care</p>
              </div>
            </div>

            <button className="mt-10 bg-blue-900 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutDoctor;