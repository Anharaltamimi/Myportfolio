import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
          Education
        </h2>

        <div className="glow-line max-w-24 mx-auto my-6" />

        <div className="glass-card p-8 mt-12">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="font-display text-lg font-semibold">Education</h3>
          </div>

          <h4 className="font-semibold">
            Bachelor's Degree in Information Technology
          </h4>

          <p className="text-primary text-sm mt-1">
            Princess Nourah bint Abdulrahman University
          </p>

          <p className="text-muted-foreground text-sm mt-1">
            Aug 2021 – Jan 2026 · Riyadh
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;