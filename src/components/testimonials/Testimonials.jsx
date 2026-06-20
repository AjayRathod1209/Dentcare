const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    review:
      "Amazing experience! The staff was friendly and the treatment was completely painless. Highly recommended.",
  },
  {
    name: "Michael Brown",
    role: "Patient",
    review:
      "Professional dentists and modern equipment. My smile makeover exceeded expectations.",
  },
  {
    name: "Emily Davis",
    role: "Patient",
    review:
      "Excellent care and attention. The entire team made me feel comfortable throughout the procedure.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-white"
    >
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-semibold uppercase tracking-[2px]">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            What Our Patients Say
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Trusted by thousands of happy patients for
            quality dental care and exceptional service.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-slate-50
                p-8
                rounded-3xl
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
              "
            >

              {/* Stars */}
              <div className="text-yellow-500 text-xl">
                ★★★★★
              </div>

              {/* Review */}
              <p className="mt-6 text-slate-600 leading-8">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-slate-500 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;