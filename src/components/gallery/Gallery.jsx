"use client";

const galleryImages = [
  "/images/gallery/gallery-1.png",
  "/images/gallery/gallery-2.png",
  "/images/gallery/gallery-3.png",
  "/images/gallery/gallery-4.png",
  "/images/gallery/gallery-5.png",
  "/images/gallery/gallery-6.png",
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-300/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400/20 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 text-sm font-semibold uppercase tracking-[2px]">
            Smile Gallery
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900">
            Transforming Smiles
            <span className="text-cyan-500"> Every Day</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Explore some of our successful dental treatments and smile
            transformations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-white
                shadow-xl
                border
                border-slate-100
                group
                cursor-pointer

                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="
                    w-full
                    h-[380px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  opacity-0
                  translate-y-8
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-white text-2xl font-bold">
                  Smile Transformation
                </h3>

                <p className="text-white/90 mt-2">
                  Advanced Cosmetic Dentistry
                </p>
              </div>

              {/* Shine Effect */}
              <div
                className="
                  absolute
                  top-0
                  left-[-100%]
                  w-[50%]
                  h-full
                  bg-white/20
                  skew-x-12
                  group-hover:left-[150%]
                  transition-all
                  duration-1000
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;