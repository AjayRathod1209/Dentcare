const ServiceCard = ({ title, desc, icon }) => {
  return (
    <div className="service-card group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">

      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-cyan-50 text-5xl group-hover:scale-110 transition duration-500">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-slate-600 leading-7">
        {desc}
      </p>

      {/* Button */}
      <button className="mt-6 text-cyan-600 font-semibold group-hover:text-blue-900 transition">
        Learn More →
      </button>

      {/* Background Circle */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-cyan-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

    </div>
  );
};

export default ServiceCard;