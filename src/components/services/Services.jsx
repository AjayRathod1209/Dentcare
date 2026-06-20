"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Dental Implants",
    desc: "Permanent solutions for missing teeth with natural appearance.",
    icon: "🦷",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional whitening treatments for a brighter smile.",
    icon: "✨",
  },
  {
    title: "Root Canal",
    desc: "Advanced root canal treatment with minimal discomfort.",
    icon: "🔬",
  },
  {
    title: "Orthodontics",
    desc: "Braces and aligners to achieve perfect teeth alignment.",
    icon: "😁",
  },
  {
    title: "Smile Makeover",
    desc: "Transform your smile with personalized cosmetic dentistry.",
    icon: "🌟",
  },
  {
    title: "Preventive Care",
    desc: "Regular checkups and cleaning for lifelong oral health.",
    icon: "🛡️",
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container-custom">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-semibold uppercase tracking-[2px]">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            Comprehensive Dental Care
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We provide a complete range of modern dental
            treatments designed to keep your smile healthy,
            beautiful, and confident.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              desc={service.desc}
              icon={service.icon}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;