"use client";

export default function SettingsPage() {
  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="text-slate-500 mt-2">
          Manage clinic information and admin settings
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Clinic Information */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Clinic Information
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Clinic Name
              </label>

              <input
                type="text"
                placeholder="DentaCare Clinic"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="clinic@email.com"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="+91 9876543210"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Address
              </label>

              <textarea
                rows="4"
                placeholder="Clinic Address"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
              ></textarea>
            </div>

          </div>

        </div>

        {/* Admin Settings */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Admin Settings
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Admin Name
              </label>

              <input
                type="text"
                placeholder="Admin Name"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Admin Email
              </label>

              <input
                type="email"
                placeholder="admin@email.com"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                New Password
              </label>

              <input
                type="password"
                placeholder="Enter new password"
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

          </div>

        </div>

      </div>

      {/* Logo Upload */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Clinic Logo
        </h2>

        <input
          type="file"
          className="w-full border border-slate-300 rounded-xl p-3"
        />

      </div>

      {/* Save Button */}
      <div className="mt-8">

        <button className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-600 transition">
          Save Changes
        </button>

      </div>

    </div>
  );
}