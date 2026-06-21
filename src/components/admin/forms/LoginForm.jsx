"use client";

export default function LoginForm() {
  return (
    <form className="mt-8 space-y-5">

      <div>
        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
      >
        Login
      </button>

    </form>
  );
}