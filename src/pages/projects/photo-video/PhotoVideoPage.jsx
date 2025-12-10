import React, { useState } from "react";
import { photoVideoProjects } from "../../../data/photoVideoData";
import { X } from "lucide-react";
import AnimatedGradient from "../../../components/AnimatedGradient";

export default function PhotoVideoPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full py-12 bg-[var(--color-background)] text-secondary font-body">
      {/* ---------- PAGE TITLE ---------- */}
      <h1 className="text-5xl font-bold mt-6 mb-6 text-center font-heading text-secondary flex justify-center items-center">
        Photo & <br />
        Videography
        <sup className="text-2xl w-8 h-8 ml-2 inline-flex items-center justify-center rounded-full bg-primary text-secondary">
          4
        </sup>
      </h1>

      {/* ---------- PAGE DESCRIPTION ---------- */}
      <p className="text-center text-secondary-300 max-w-2xl mx-auto mb-16 text-lg sm:text-xl">
        A curated showcase of my photo and videography projects, highlighting my creative skills in digital media and visual storytelling.
      </p>

      {/* ---------- PROJECT SECTIONS ---------- */}
      <div className="w-full max-w-[1200px] mx-auto px-4 space-y-20">
        {photoVideoProjects.map((project) => (
          <AnimatedGradient key={project.id}>
            <section className="space-y-6 p-6 rounded-xl">
              {/* Section Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2 text-center">
                {project.title}
              </h2>

              {/* Section Description */}
              <p className="text-secondary-300 text-center mb-6">{project.description}</p>

              {/* ---------- PHOTO GRID ---------- */}
              {project.type === "photos" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                  {project.items.map((img, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded-lg overflow-hidden shadow-lg group"
                      onClick={() =>
                        setSelectedImage({
                          src: img,
                          title: project.title,
                          description: `${project.title} — Image ${index + 1}`,
                        })
                      }
                    >
                      <img
                        src={img}
                        alt={`${project.title} ${index}`}
                        className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* ---------- VIDEO SECTION ---------- */}
              {project.type === "video" && (
                <div className="w-full flex justify-center mt-4">
                  <div className="w-full md:w-3/4 aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={project.youtubeLink}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}
            </section>
          </AnimatedGradient>
        ))}
      </div>

      {/* ---------- IMAGE MODAL (CENTERED, 70% VIEWPORT) ---------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Modal Container */}
          <div
            className="relative w-[70vw] h-[70vh] bg-transparent flex flex-col justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 p-2 text-white hover:text-gray-300 transition z-50"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <div className="flex justify-center items-center w-full h-[65%] mb-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="object-contain w-full h-full rounded-lg shadow-lg"
              />
            </div>

            {/* Description */}
            <div className="w-full text-center h-[30%] overflow-auto">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-secondary-300 text-lg text-white leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}