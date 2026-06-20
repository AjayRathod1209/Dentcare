"use client";

import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const elements =
      document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-show"
            );
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) =>
      observer.observe(el)
    );

    return () => {
      elements.forEach((el) =>
        observer.unobserve(el)
      );
    };
  }, []);
};

export default useScrollAnimation;