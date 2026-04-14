import { Award } from "lucide-react";

const courses = {
  AI: [
    {
      name: "Artificial Intelligence Fundamentals",
      org: "IBM SkillsBuild",
    },
    {
      name: "AI Concepts and Advanced Applications",
      org: "SDAIA",
    },
    {
      name: "Fundamentals of Artificial Intelligence",
      org: "SDAIA",
    },
  ],

  Cybersecurity: [
    {
      name: "Cybersecurity Fundamentals",
      org: "IBM SkillsBuild",
    },
    {
      name: "Introduction to Cybersecurity",
      org: "Cisco",
    },
    {
      name: "Introduction to Networks",
      org: "Cisco",
    },
    {
      name: "Networking Basics",
      org: "Cisco",
    },
  ],

  Database: [
    {
      name: "Database Foundations",
      org: "Oracle Academy",
    },
  ],
};

const CourseCard = ({ title, icon, items }) => {
  return (
    <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300">
      
      <h3 className="font-semibold text-primary mb-5 flex items-center gap-2 text-lg">
        <span>{icon}</span>
        {title}
      </h3>

      <div className="space-y-3">
        {items.map((course) => (
          <div
            key={course.name}
            className="flex items-start justify-between gap-4 p-3 rounded-lg hover:bg-white/5 transition"
          >
            <div className="flex items-start gap-2">
              <Award size={16} className="text-primary mt-1" />
              <span className="text-sm text-foreground/90 leading-relaxed">
                {course.name}
              </span>
            </div>

            <span className="text-xs text-muted-foreground whitespace-nowrap bg-white/5 px-2 py-1 rounded-md">
              {course.org}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">

        <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
          Courses
        </h2>

        <div className="glow-line max-w-24 mx-auto my-6" />

        {/* 👇 كل شيء تحت بعض */}
        <div className="space-y-8">

          <CourseCard
            title="Artificial Intelligence"
            icon="🤖"
            items={courses.AI}
          />

          <CourseCard
            title="Cybersecurity & Networking"
            icon="🔐"
            items={courses.Cybersecurity}
          />

          <CourseCard
            title="Databases"
            icon="🗄️"
            items={courses.Database}
          />

        </div>

      </div>
    </section>
  );
};

export default CoursesSection;