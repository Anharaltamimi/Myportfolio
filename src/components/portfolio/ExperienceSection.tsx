import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="text-gradient">Experience</span>
        </h2>
        <div className="glow-line max-w-24 mx-auto my-6" />

        <div className="glass-card p-8 mt-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">
                Saudi Data & Artificial Intelligence Authority (SDAIA)
              </h3>
              <p className="text-primary text-sm font-medium mt-1">
                Co-op Training in Project Management
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Sep 2025 – Dec 2025 · Riyadh, Saudi Arabia
              </p>
              <ul className="mt-4 space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Designed and implemented interactive dashboards to analyze SLA compliance and monitor key project performance metrics.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Assisted in preparing project reports and documentation, providing actionable insights for management decisions.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Collaborated with cross-functional teams to monitor progress, analyze data, and ensure timely delivery of milestones.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
