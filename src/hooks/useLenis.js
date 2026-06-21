"use client";

import { useEffect } from "react";

const useLenis = () => {
  useEffect(() => {
    const html = document.documentElement;

    html.style.scrollBehavior = "smooth";

    return () => {
      html.style.scrollBehavior = "auto";
    };
  }, []);
};

export default useLenis;