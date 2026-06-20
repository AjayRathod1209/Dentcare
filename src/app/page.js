"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/common/Navbar";
import Hero from "@/components/hero/Hero";
import AboutDoctor from "@/components/about/AboutDoctor";
import Services from "@/components/services/Services";
import SmileTransformation from "@/components/transformation/SmileTransformation";
import Gallery from "@/components/gallery/Gallery";
import Testimonials from "@/components/testimonials/Testimonials";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/common/Footer";
import Loader from "@/components/common/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutDoctor />
        <Services />
        <SmileTransformation />
        <Gallery />
        <Testimonials />
        <AppointmentForm />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}