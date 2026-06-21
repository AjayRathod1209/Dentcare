"use client";

import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("✅ Message Sent Successfully!");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSuccess(
          "❌ " + (data.message || "Something went wrong")
        );
      }
    } catch (error) {
      console.log(error);
      setSuccess("❌ Server Error");
    } finally {
      setLoading(false);
    }
  };

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

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-cyan-500 resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300"
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {success && (
                <div
                  className={`mt-4 px-4 py-3 rounded-xl text-center font-medium ${
                    success.includes("✅")
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-red-100 text-red-700 border border-red-300"
                  }`}
                >
                  {success}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;