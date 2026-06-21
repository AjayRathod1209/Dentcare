"use client";

import { useEffect, useState } from "react";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "https://dentacare-kok5.onrender.com/api/appointments"
      );

      const data = await response.json();

      setAppointments(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const deleteAppointment = async (id) => {
  try {
    await fetch(
      ` https://dentacare-kok5.onrender.com/api/appointments/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchAppointments();
  } catch (error) {
    console.log(error);
  }
};
    const updateStatus = async (id, status) => {
  try {
    await fetch(
      ` https://dentacare-kok5.onrender.com/api/appointments/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      }
    );

    fetchAppointments();
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Appointments
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all appointment requests
          </p>
        </div>

        <button className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition">
          Export Excel
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Total Appointments
          </h3>

          <p className="text-4xl font-bold mt-2">
            {appointments.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Pending
          </h3>

          <p className="text-4xl font-bold mt-2 text-orange-500">
            {
              appointments.filter(
                (item) => item.status === "Pending"
              ).length
            }
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Completed
          </h3>

          <p className="text-4xl font-bold mt-2 text-green-500">
            {
              appointments.filter(
                (item) => item.status === "Completed"
              ).length
            }
          </p>
        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1200px]">

            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Service</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>

              {loading ? (
                <tr>
                  <td
                    colSpan="8"
                    className="p-8 text-center"
                  >
                    Loading...
                  </td>
                </tr>
              ) : appointments.length === 0 ? (
                <tr>
                  <td
                    colSpan="8"
                    className="p-8 text-center"
                  >
                    No Appointments Found
                  </td>
                </tr>
              ) : (
                appointments.map((item) => (
                  <tr
                    key={item._id}
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="p-4 font-medium">
                      {item.fullName}
                    </td>

                    <td className="p-4">
                      {item.email}
                    </td>

                    <td className="p-4">
                      {item.phone}
                    </td>

                    <td className="p-4">
                      {item.service}
                    </td>

                    <td className="p-4">
                      {item.appointmentDate}
                    </td>

                    <td className="p-4 max-w-xs">
                      {item.message}
                    </td>

                    <td className="p-4">
  <select
    value={item.status}
    onChange={(e) =>
      updateStatus(item._id, e.target.value)
    }
    className="border rounded-lg px-3 py-2 text-sm"
  >
    <option value="Pending">
      Pending
    </option>

    <option value="Confirmed">
      Confirmed
    </option>

    <option value="Completed">
      Completed
    </option>

    <option value="Cancelled">
      Cancelled
    </option>
  </select>
</td>

                    <td className="p-4">
                      <div className="flex justify-center gap-2">

                        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm">
                          View
                        </button>

                       <button
                            onClick={() => deleteAppointment(item._id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}