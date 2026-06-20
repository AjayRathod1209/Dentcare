
"use client";

import { useState } from "react";
const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "Most patients should visit every 6 months for regular checkups and cleaning."
  },
  {
    question: "Do dental implants look natural?",
    answer:
      "Yes, modern dental implants are designed to look and function like natural teeth."
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Professional teeth whitening is completely safe when performed by qualified dentists."
  },
  {
    question: "Do you provide emergency dental care?",
    answer:
      "Yes, we offer emergency dental treatments for urgent situations."
  }
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="faq"
      className="py-24 bg-slate-50"
    >
      <div className="container-custom">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-semibold uppercase tracking-[2px]">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="max-w-4xl mx-auto mt-16">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm mb-5 overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(
                    active === index
                      ? null
                      : index
                  )
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="text-2xl">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;