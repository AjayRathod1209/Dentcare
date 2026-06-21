const StatsCard = ({ title, value, color }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-slate-100">

      <h3 className="text-slate-500 text-sm font-medium">
        {title}
      </h3>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h2>

    </div>
  );
};

export default StatsCard;