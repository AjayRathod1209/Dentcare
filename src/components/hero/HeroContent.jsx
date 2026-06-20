"use client";

const HeroContent = () => {
  const scrollToAppointment = () => {
    const section = document.getElementById("appointment");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToServices = () => {
    const section = document.getElementById("services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="max-w-[750px]">

      {/* Badge */}
      <div className="hero-badge mb-8">
        <span className="inline-block px-5 py-3 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-semibold uppercase tracking-[2px]">
          Premium Dental Care
        </span>
      </div>

      {/* Heading */}
      <h1 className="hero-title text-[40px] md:text-[50px] lg:text-[56px] font-bold leading-[1.1] text-slate-900">
        Creating
        <br />

        <span className="text-cyan-500">
          Beautiful Smiles
        </span>

        <br />

        With Precision & Care
      </h1>

      {/* Description */}
      <p className="hero-description mt-8 text-lg text-slate-600 max-w-xl">
        Advanced dental treatments delivered with compassion,
        modern technology and personalized care for every patient.
      </p>

      {/* Buttons */}
      <div className="hero-buttons flex flex-wrap gap-4 mt-10">

        <button
          onClick={scrollToAppointment}
          className="bg-blue-900 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition duration-300"
        >
          Book Appointment
        </button>

        <button
          onClick={scrollToServices}
          className="bg-cyan-500 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition duration-300"
        >
          View Services
        </button>

      </div>

      {/* Stats */}
      <div className="hero-stats flex gap-10 mt-12 flex-wrap">

        <div className="hero-stat">
          <h3 className="text-4xl font-bold text-slate-900">
            5000+
          </h3>

          <p className="text-slate-500 mt-1">
            Happy Patients
          </p>
        </div>

        <div className="hero-stat">
          <h3 className="text-4xl font-bold text-slate-900">
            12+
          </h3>

          <p className="text-slate-500 mt-1">
            Years Experience
          </p>
        </div>

        <div className="hero-stat">
          <h3 className="text-4xl font-bold text-slate-900">
            98%
          </h3>

          <p className="text-slate-500 mt-1">
            Satisfaction
          </p>
        </div>

      </div>

    </div>
  );
};

export default HeroContent;