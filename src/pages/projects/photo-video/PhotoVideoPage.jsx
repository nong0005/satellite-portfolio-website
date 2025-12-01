import { useState } from "react";
import { photoVideoProjects } from "../../../data/photoVideoData";
import { X } from "lucide-react";


export default function PhotoVideoPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full py-8">
      {/* Inner container: max-width 1200px */}
      <div className="w-full max-w-[1200px] mx-auto px-4">
        {photoVideoProjects.map((project) => (
          <div key={project.id} className="mb-12">

            <h2 className="text-2xl font-bold mt-8 mb-2">{project.title}</h2>
            <p className="text-secondary-300 mb-4">{project.description}</p>

            {/* ---------- PHOTO GRID ---------- */}
            {project.type === "photos" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {project.items.map((img, index) => (
                  <div key={index} className="cursor-pointer">
                    <img
                      src={img}
                      alt={`${project.title} ${index}`}
                      className="w-full h-auto rounded-md shadow hover:opacity-90 transition"
                      onClick={() =>
                        setSelectedImage({
                          src: img,
                          description: `${project.title} — Image ${
                            index + 1
                          }`,
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            )}

            {/* ---------- VIDEO SECTION ---------- */}
            {project.type === "video" && (
              <div className="w-full mt-4">
                <video
                  controls
                  poster={project.thumbnail}
                  className="w-full h-auto rounded-lg shadow-lg"
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        ))}

        {/* ---------- CENTERED MODAL (50% viewport) ---------- */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-secondary bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="
                relative
                bg-white-900 p-4 rounded-xl shadow-xl 
                w-[90%] sm:w-[50vw] 
                max-h-[90%] sm:h-[50vh]
                flex flex-col
              "
              onClick={(e) => e.stopPropagation()} // prevents closing on click inside
            >
              {/* Close Icon (Lucide) */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-white hover:text-gray-300 transition"
              >
                <X size={24} />
              </button>

              {/* Image */}
              <div className="flex-1 flex justify-center items-center overflow-hidden">
                <img
                  src={selectedImage.src}
                  className="max-w-full max-h-full rounded-lg object-contain"
                  alt="Preview"
                />
              </div>

              {/* Description */}
              <p className="text-gray-300 text-center text-sm mt-3">
                {selectedImage.description}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}