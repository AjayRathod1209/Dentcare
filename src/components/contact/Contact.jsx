const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-50"
    >
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-semibold uppercase tracking-[2px]">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            Get In Touch
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Have questions or need assistance?
            Our team is here to help you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Contact Info */}
          <div>

            <div className="bg-white p-8 rounded-3xl shadow-md">

              <h3 className="text-2xl font-bold text-slate-900">
                Contact Information
              </h3>

              <div className="mt-8 space-y-6">

                <div>
                  <h4 className="font-semibold text-slate-900">
                    📍 Address
                  </h4>

                  <p className="text-slate-600 mt-2">
                    123 Dental Street,
                    New York, NY 10001
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    📞 Phone
                  </h4>

                  <p className="text-slate-600 mt-2">
                    +1 (555) 123-4567
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    ✉️ Email
                  </h4>

                  <p className="text-slate-600 mt-2">
                    info@dentacare.com
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    ⏰ Working Hours
                  </h4>

                  <p className="text-slate-600 mt-2">
                    Mon - Sat: 9:00 AM - 8:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-md">

            <h3 className="text-2xl font-bold text-slate-900">
              Send Message
            </h3>

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

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;