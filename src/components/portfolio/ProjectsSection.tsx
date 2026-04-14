import { useState } from "react";
import { Brain, Plane, BarChart3, ZoomIn } from "lucide-react";

const projects = [
  {
    icon: Brain,
    label: "Graduation Project",
    title: "DeepSight: Automated Diabetic Maculopathy Detection Using Deep Learning",
    description:
'Developed a deep learning-based diagnostic system using Python for automated detection of Diabetic Maculopathy in OCT images, achieving <span class="text-primary font-semibold">96% accuracy</span> to support early clinical decision-making.',
    images: [
      "/projects/Home.png", // Home
      "/projects/Login.png", // Login
      "/projects/Upload.png", // Upload
      "/projects/Result.png", // Result
      "/projects/Report.png", // Report
    ],

    tags: ["Python", "Deep Learning", "Computer Vision", "OCT Images"],
  },

  {
    icon: Plane,
    label: "University Project",
    title: "Najd Airlines – Airline Reservation System",
    description:
      "Designed a user-friendly airline reservation interface in Figma featuring flight search, price comparison, booking flow, and reviews, with a focus on usability and HCI principles.",

    images: [
      "/projects/Najd1.png",
      "/projects/Najd2.png",
      "/projects/Najd3.png",
      "/projects/Najd4.png",
      "/projects/Najd5.png",
    ],

    tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
  },

  {
    icon: BarChart3,
    label: "SDAIA Training",
    title: "SLA Compliance Dashboard",
    description:
      "Designed dashboards to analyze SLA compliance and monitor performance metrics.",

    tags: ["Dashboard Development", "Data Analysis", "Data Visualization"],
  },
];

const ProjectsSection = () => {
  const [imageIndex, setImageIndex] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = (key, length) => {
    setImageIndex((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) === length - 1 ? 0 : (prev[key] || 0) + 1,
    }));
  };

  const prevImage = (key, length) => {
    setImageIndex((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) === 0 ? length - 1 : (prev[key] || 0) - 1,
    }));
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="text-gradient">Projects</span>
        </h2>

        <div className="glow-line max-w-24 mx-auto my-6" />

        <div className="space-y-6 mt-12">
          {projects.map((project) => {
            const index = imageIndex[project.title] || 0;

            return (
              <div
                key={project.title}
                className="glass-card p-8 group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="w-full">

                    {/* LABEL */}
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.label}
                    </span>

                    {/* TITLE */}
                    <h3 className="font-display text-xl font-semibold mt-1">
                      {project.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="text-muted-foreground text-sm mt-3 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: project.description,
                      }}
                    />

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* ===================== */}
                    {/* 🖼 IMAGE SLIDER */}
                    {/* ===================== */}
                    {project.images && (
                      <div className="mt-4">

                        <div className="relative">
                          <img
                            src={project.images[index]}
                            className="rounded-lg w-full h-64 object-cover cursor-pointer"
                            onClick={() =>
                              setSelectedImage(project.images[index])
                            }
                          />

                          {/* Zoom */}
                          <button
                            onClick={() =>
                              setSelectedImage(project.images[index])
                            }
                            className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full"
                          >
                            <ZoomIn className="w-4 h-4" />
                          </button>

                          {/* Prev */}
                          <button
                            onClick={() =>
                              prevImage(project.title, project.images.length)
                            }
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
                          >
                            ‹
                          </button>

                          {/* Next */}
                          <button
                            onClick={() =>
                              nextImage(project.title, project.images.length)
                            }
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
                          >
                            ›
                          </button>
                        </div>

                        {/* dots */}
                        <div className="flex justify-center gap-2 mt-3">
                          {project.images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() =>
                                setImageIndex((prev) => ({
                                  ...prev,
                                  [project.title]: i,
                                }))
                              }
                              className={`w-2 h-2 rounded-full ${
                                i === index ? "bg-primary" : "bg-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================== */}
        {/* 🔍 FULLSCREEN IMAGE */}
        {/* ===================== */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-5xl max-h-[90vh] rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;