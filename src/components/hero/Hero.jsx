"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import HeroContent from "./HeroContent";
import ToothModel from "./ToothModel";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure visible state
      gsap.set(
        [
          ".hero-badge",
          ".hero-title",
          ".hero-description",
          ".hero-buttons",
          ".hero-stat",
          ".hero-image",
        ],
        {
          opacity: 1,
          clearProps: "all",
        }
      );

      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-badge",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          ".hero-title",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          ".hero-description",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".hero-buttons",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-stat",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
          },
          "-=0.2"
        );

      gsap.fromTo(
        ".hero-image",
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.5,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center bg-white pt-24 overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="hero-content">
            <HeroContent />
          </div>

          <div className="hero-image">
            <ToothModel />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;