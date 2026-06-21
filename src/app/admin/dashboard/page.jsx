"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      const [appointmentsRes, contactsRes] = await Promise.all([
        fetch("https://dentacare-kok5.onrender.com/api/appointments"),
        fetch("http://localhost:5000/api/contacts"),
      ]);

      const appointmentsData = await appointmentsRes.json();
      const contactsData = await contactsRes.json();

      setAppointments(appointmentsData);
      setContacts(contactsData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const pendingAppointments = appointments.filter(
    (item) => item.status === "Pending"
  ).length;

  const completedAppointments = appointments.filter(
    (item) => item.status === "Completed"
  ).length;

  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back, Admin 👋
        </p>

      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-slate-500">
            Total Appointments
          </h3>

          <p className="text-4xl font-bold mt-3 text-blue-900">
            {appointments.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-slate-500">
            Contact Messages
          </h3>

          <p className="text-4xl font-bold mt-3 text-cyan-500">
            {contacts.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-slate-500">
            Pending Appointments
          </h3>

          <p className="text-4xl font-bold mt-3 text-orange-500">
            {pendingAppointments}
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-slate-500">
            Completed Appointments
          </h3>

          <p className="text-4xl font-bold mt-3 text-green-500">
            {completedAppointments}
          </p>
        </div>

      </div>

      {/* Recent Appointments */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

        <h2 className="text-2xl font-bold mb-6">
          Recent Appointments
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b">

                <th className="text-left p-4">
                  Patient
                </th>

                <th className="text-left p-4">
                  Service
                </th>

                <th className="text-left p-4">
                  Date
                </th>

                <th className="text-left p-4">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>

              {loading ? (
                <tr>
                  <td
                    colSpan="4"
                    className="p-6 text-center"
                  >
                    Loading...
                  </td>
                </tr>
              ) : (
                appointments
                  .slice(0, 5)
                  .map((appointment) => (
                    <tr
                      key={appointment._id}
                      className="border-b"
                    >
                      <td className="p-4">
                        {appointment.fullName}
                      </td>

                      <td className="p-4">
                        {appointment.service}
                      </td>

                      <td className="p-4">
                        {appointment.appointmentDate}
                      </td>

                      <td className="p-4">

                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            appointment.status ===
                            "Pending"
                              ? "bg-orange-100 text-orange-600"
                              : appointment.status ===
                                "Completed"
                              ? "bg-green-100 text-green-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {appointment.status}
                        </span>

                      </td>
                    </tr>
                  ))
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Recent Contact Messages */}
      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Contact Messages
        </h2>

        <div className="space-y-4">

          {loading ? (
            <p>Loading...</p>
          ) : (
            contacts
              .slice(0, 5)
              .map((contact) => (
                <div
                  key={contact._id}
                  className="border rounded-2xl p-4"
                >
                  <h3 className="font-semibold">
                    {contact.fullName}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    {contact.message}
                  </p>
                </div>
              ))
          )}

        </div>

      </div>

    </div>
  );
}
