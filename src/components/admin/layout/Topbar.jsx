"use client";

export default function Topbar() {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-5">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            DentaCare Admin
          </h2>

          <p className="text-slate-500 text-sm">
            Manage your clinic efficiently
          </p>
        </div>

        <div className="flex items-center gap-4">

          <button className="relative bg-slate-100 p-3 rounded-xl hover:bg-slate-200 transition">
            🔔

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl">

            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
              A
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Admin
              </h4>

              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>

          </div>

        </div>

      </div>

    </header>
  );
}