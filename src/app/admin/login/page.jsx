"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "admin",
          JSON.stringify(data.admin)
        );

        setMessage("Login Successful");

        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 1000);
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
            Admin Login
          </h1>

          <p className="mt-2 text-slate-500">
            Welcome back to DentaCare Admin Panel
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

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
              placeholder="Enter your password"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            {loading
              ? "Logging In..."
              : "Login"}
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

          Don't have an account?{" "}

          <Link
            href="/admin/signup"
            className="text-cyan-600 font-semibold"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}