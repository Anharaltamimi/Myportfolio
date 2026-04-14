import { Code, Database, BarChart3, Wrench, Users } from "lucide-react";

const skillGroups = [
  {
    icon: Code,
    title: "Programming",
    skills: ["Java", "JavaScript", "SQL", "PHP", "Python"],
  },
  {
    icon: Database,
    title: "Web Technologies",
    skills: ["HTML", "CSS"],
  },
  {
    icon: BarChart3,
    title: "Data & AI",
    skills: ["Data Analysis", "Data Visualization", "Deep Learning"],
  },
  {
    icon: Wrench,
    title: "Tools & Methods",
    skills: ["Figma", "UML", "Dashboard Dev", "SDLC", "Project Docs"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Team Collaboration", "Time Management", "Problem Solving"],
  },
];

const SkillsSection = () => {
  const firstRow = skillGroups.slice(0, 3);
  const secondRow = skillGroups.slice(3);

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Title */}
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="text-gradient">Skills</span>
        </h2>
        <div className="glow-line max-w-24 mx-auto my-6" />

        {/* First Row (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {firstRow.map((group) => (
            <div
              key={group.title}
              className="glass-card p-6 hover:border-primary/30 transition-colors rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <group.icon className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-lg">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row (centered 2 cards) */}
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          {secondRow.map((group) => (
            <div
              key={group.title}
              className="glass-card p-6 w-full sm:w-[45%] lg:w-[30%] hover:border-primary/30 transition-colors rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <group.icon className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-lg">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;