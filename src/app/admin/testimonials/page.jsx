"use client";

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Amazing experience. The staff was professional and the treatment was painless.",
    },
    {
      id: 2,
      name: "Priya Verma",
      rating: 5,
      review:
        "Highly recommended clinic. Very clean environment and excellent service.",
    },
    {
      id: 3,
      name: "Amit Patil",
      rating: 4,
      review:
        "Doctor explained everything clearly and the treatment was great.",
    },
  ];

  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Testimonials
          </h1>

          <p className="text-slate-500 mt-2">
            Manage patient reviews and testimonials
          </p>
        </div>

        <button className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition">
          Add Testimonial
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-slate-500">
            Total Reviews
          </h3>

          <p className="text-4xl font-bold mt-3 text-blue-900">
            124
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-slate-500">
            Average Rating
          </h3>

          <p className="text-4xl font-bold mt-3 text-yellow-500">
            4.9
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-slate-500">
            Featured Reviews
          </h3>

          <p className="text-4xl font-bold mt-3 text-green-500">
            18
          </p>
        </div>

      </div>

      {/* Reviews Table */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">
                  Patient Name
                </th>

                <th className="p-4 text-left">
                  Rating
                </th>

                <th className="p-4 text-left">
                  Review
                </th>

                <th className="p-4 text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {testimonials.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {item.name}
                  </td>

                  <td className="p-4">
                    {"⭐".repeat(item.rating)}
                  </td>

                  <td className="p-4 max-w-md">
                    {item.review}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm">
                        Edit
                      </button>

                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}