"use client";

import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const SmileTransformation = () => {
  return (
    <section
      id="transformation"
      className="py-28 bg-gradient-to-b from-white via-cyan-50/30 to-white overflow-hidden"
    >
      <div className="container-custom">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 text-sm font-semibold uppercase tracking-[2px]">
            Smile Transformation
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Real Results That
            <span className="text-cyan-500"> Inspire Confidence</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Witness the remarkable difference our cosmetic
            and restorative dental treatments can make.
          </p>
        </motion.div>

        {/* Before After */}
        <div className="relative grid lg:grid-cols-2 gap-10 mt-20">

          {/* VS Circle */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-xl shadow-2xl">
              VS
            </div>
          </div>

          {/* Before */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-white rounded-[32px] overflow-hidden shadow-xl border border-slate-100"
          >
            <div className="overflow-hidden">
              <img
                src="/images/transformation/before.jpg"
                alt="Before Treatment"
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold text-red-500">
                Before
              </h3>

              <p className="mt-3 text-slate-500">
                Discoloration, gaps and uneven alignment.
              </p>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-white rounded-[32px] overflow-hidden shadow-xl border border-slate-100"
          >
            <div className="overflow-hidden">
              <img
                src="/images/transformation/after.jpg"
                alt="After Treatment"
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold text-green-500">
                After
              </h3>

              <p className="mt-3 text-slate-500">
                Bright, aligned and confident smile.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SmileTransformation;