"use client";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        "https://dentacare-kok5.onrender.com/api/contacts"
      );

      const data = await response.json();

      setContacts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

const deleteContact = async (id) => {
  try {
    const response = await fetch(
      `https://dentacare-kok5.onrender.com/api/contacts/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    console.log(data);

    setContacts(
      contacts.filter(
        (contact) => contact._id !== id
      )
    );
  } catch (error) {
    console.log(error);
  }
};
const updateStatus = async (id, status) => {
  try {
    await fetch(
      ` https://dentacare-kok5.onrender.com/api/contacts/${id}`,
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

    fetchContacts();
  } catch (error) {
    console.log(error);
  }
};

  const exportToExcel = () => {
  const excelData = contacts.map((contact) => ({
    Name: contact.fullName,
    Email: contact.email,
    Phone: contact.phone,
    Message: contact.message,
    Status: contact.status,
    "Created At": new Date(
      contact.createdAt
    ).toLocaleString(),
  }));

  const worksheet =
    XLSX.utils.json_to_sheet(excelData);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Contacts"
  );

  const excelBuffer = XLSX.write(
    workbook,
    {
      bookType: "xlsx",
      type: "array",
    }
  );

  const file = new Blob(
    [excelBuffer],
    {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    }
  );

  saveAs(
    file,
    `Contacts_${new Date()
      .toISOString()
      .slice(0, 10)}.xlsx`
  );
};

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Contact Messages
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all contact form inquiries
          </p>
        </div>

    <button
  onClick={exportToExcel}
  className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
>
  Export Excel
</button>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Total Messages
          </h3>

          <p className="text-4xl font-bold mt-2">
            {contacts.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            New Messages
          </h3>

          <p className="text-4xl font-bold mt-2 text-orange-500">
            {
              contacts.filter(
                (item) => item.status === "New"
              ).length
            }
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-slate-500">
            Replied
          </h3>

          <p className="text-4xl font-bold mt-2 text-green-500">
            {
              contacts.filter(
                (item) => item.status === "Replied"
              ).length
            }
          </p>
        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>

              {loading ? (
                <tr>
                  <td
                    colSpan="6"
                    className="p-8 text-center"
                  >
                    Loading...
                  </td>
                </tr>
              ) : contacts.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="p-8 text-center"
                  >
                    No Messages Found
                  </td>
                </tr>
              ) : (
                contacts.map((contact) => (
                  <tr
                    key={contact._id}
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="p-4 font-medium">
                      {contact.fullName}
                    </td>

                    <td className="p-4">
                      {contact.email}
                    </td>

                    <td className="p-4">
                      {contact.phone}
                    </td>

                    <td className="p-4 max-w-md">
                      {contact.message}
                    </td>

                    <td className="p-4">

  <select
    value={contact.status}
    onChange={(e) =>
      updateStatus(
        contact._id,
        e.target.value
      )
    }
    className="border rounded-lg px-3 py-2 text-sm"
  >
    <option value="New">
      New
    </option>

    <option value="Replied">
      Replied
    </option>

    <option value="Closed">
      Closed
    </option>

  </select>

</td>

                    <td className="p-4">

                      <div className="flex justify-center gap-3">

                        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition">
                          View
                        </button>

                      <button
                         onClick={() => deleteContact(contact._id)}
                         className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
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
