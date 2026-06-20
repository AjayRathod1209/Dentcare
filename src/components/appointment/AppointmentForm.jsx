const AppointmentForm = () => {
  return (
    <section
      id="appointment"
      className="py-24 bg-gradient-to-r from-blue-900 to-cyan-600"
    >
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold uppercase tracking-[2px]">
              Book Appointment
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
              Schedule Your Visit
              Today For A Healthier Smile
            </h2>

            <p className="mt-6 text-lg text-white/80 leading-8">
              Our experienced dental specialists provide
              personalized treatments using modern
              technology and patient-focused care.
              Book your appointment today and take the
              first step toward a healthier smile.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>
                <h3 className="text-4xl font-bold text-white">
                  5000+
                </h3>

                <p className="text-white/80 mt-2">
                  Happy Patients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  12+
                </h3>

                <p className="text-white/80 mt-2">
                  Years Experience
                </p>
              </div>

            </div>

          </div>

          {/* Right Form */}
          <div className="bg-white p-8 lg:p-10 rounded-[32px] shadow-2xl">

            <h3 className="text-3xl font-bold text-slate-900">
              Make An Appointment
            </h3>

            <p className="mt-3 text-slate-500">
              Fill out the form and our team will contact
              you shortly.
            </p>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500"
              />

              <input
                type="date"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500"
              />

              <select
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500"
              >
                <option>Select Service</option>
                <option>Dental Implants</option>
                <option>Teeth Whitening</option>
                <option>Root Canal Treatment</option>
                <option>Braces & Aligners</option>
                <option>Cosmetic Dentistry</option>
                <option>Emergency Dental Care</option>
              </select>

              <textarea
                rows="4"
                placeholder="Additional Message"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300"
              >
                Book Appointment
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppointmentForm;