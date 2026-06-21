"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/admin/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage(
          "Account Created Successfully"
        );

        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        setTimeout(() => {
          router.push("/admin/login");
        }, 1500);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
      setError("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-slate-900">
            Admin Sign Up
          </h1>

          <p className="mt-2 text-slate-500">
            Create your DentaCare Admin Account
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 text-white py-3 rounded-xl font-semibold hover:bg-cyan-700 transition"
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>

          {message && (
            <div className="bg-green-100 text-green-700 text-center py-3 rounded-xl">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 text-center py-3 rounded-xl">
              {error}
            </div>
          )}

        </form>

        <p className="text-center mt-6 text-slate-600">

          Already have an account?{" "}

          <Link
            href="/admin/login"
            className="text-blue-900 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}