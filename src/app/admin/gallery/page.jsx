"use client";

import Image from "next/image";

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      image: "/images/gallery/gallery-1.png",
      title: "Smile Transformation",
    },
    {
      id: 2,
      image: "/images/gallery/gallery-2.png",
      title: "Dental Implant",
    },
    {
      id: 3,
      image: "/images/gallery/gallery-3.png",
      title: "Teeth Whitening",
    },
    {
      id: 4,
      image: "/images/gallery/gallery-4.png",
      title: "Root Canal",
    },
    {
      id: 5,
      image: "/images/gallery/gallery-5.png",
      title: "Orthodontics",
    },
    {
      id: 6,
      image: "/images/gallery/gallery-6.png",
      title: "Cosmetic Dentistry",
    },
  ];

  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Gallery Management
          </h1>

          <p className="text-slate-500 mt-2">
            Manage clinic gallery images
          </p>
        </div>

        <button className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition">
          Upload Image
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-slate-500">
            Total Images
          </h3>

          <p className="text-4xl font-bold mt-3 text-blue-900">
            36
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-slate-500">
            Smile Transformations
          </h3>

          <p className="text-4xl font-bold mt-3 text-cyan-500">
            18
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-slate-500">
            Treatments
          </h3>

          <p className="text-4xl font-bold mt-3 text-green-500">
            18
          </p>
        </div>

      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >

            <div className="relative h-[250px]">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-5">

              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <div className="flex gap-3 mt-5">

                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm">
                  Edit
                </button>

                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
                  Delete
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}