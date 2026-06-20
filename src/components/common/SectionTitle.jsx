const SectionTitle = ({
  badge,
  title,
  description,
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-semibold uppercase tracking-[2px]">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        {description}
      </p>

    </div>
  );
};

export default SectionTitle;