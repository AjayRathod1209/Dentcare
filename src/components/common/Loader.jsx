"use client";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      
      {/* Tooth Icon */}
      <div className="animate-spin">
        <div className="w-20 h-20 rounded-full border-4 border-cyan-500 border-t-transparent"></div>
      </div>

      {/* Text */}
      <h2 className="mt-8 text-2xl font-bold text-slate-900">
        DentaCare
      </h2>

      <p className="mt-2 text-slate-500">
        Creating Your Perfect Smile...
      </p>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-slate-200 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-cyan-500 animate-pulse w-full"></div>
      </div>

    </div>
  );
};

export default Loader;