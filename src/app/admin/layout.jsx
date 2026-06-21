"use client";

import { useEffect } from "react";
import {
  useRouter,
  usePathname,
} from "next/navigation";

import Sidebar from "@/components/admin/layout/Sidebar";
import Topbar from "@/components/admin/layout/Topbar";

export default function AdminLayout({
  children,
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Login & Signup pages par layout mat dikhana
  if (
    pathname === "/admin/login" ||
    pathname === "/admin/signup"
  ) {
    return children;
  }

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-slate-100">
        <Topbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}