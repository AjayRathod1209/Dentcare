"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      name: "Appointments",
      href: "/admin/appointments",
    },
    {
      name: "Contacts",
      href: "/admin/contacts",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    router.push("/admin/login");
  };

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white p-6">

      {/* Logo */}
      <div className="mb-10">

        <h1 className="text-3xl font-bold">
          DentaCare
        </h1>

        <p className="text-slate-400 mt-1">
          Admin Panel
        </p>

      </div>

      {/* Navigation */}
      <nav className="space-y-3">

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
              pathname === link.href
                ? "bg-cyan-500 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            {link.name}
          </Link>
        ))}

      </nav>

      {/* Logout */}
      <div className="mt-12">

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-xl font-medium"
        >
          Logout
        </button>

      </div>

    </aside>
  );
}