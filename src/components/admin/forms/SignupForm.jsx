"use client";

export default function SignupForm() {
  return (
    <form className="mt-8 space-y-5">

      <div>
        <label className="block mb-2 font-medium">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
        />
      </div>

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
          placeholder="Create password"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Confirm Password
        </label>

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
      >
        Create Account
      </button>

    </form>
  );
}