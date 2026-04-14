import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
          Information Technology Graduate
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up-delay-1">
          Anhar <span className="text-gradient">Altamimi</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
          Cybersecurity · Artificial Intelligence · Software Development
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-fade-up-delay-3">
          <a
            href="mailto:anhar.altamimi24@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            anhar.altamimi24@gmail.com
          </a>

          <a
            href="tel:+966568486002"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            +966 56 848 6002
          </a>

          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            Riyadh, Saudi Arabia
          </span>

          <a
            href="https://linkedin.com/in/anhar-altamimi-1a182831a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-16 animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <a
            href="/cv.pdf"
            download="Anhar_Altamimi CV.pdf"
            className="inline-block border border-primary/30 rounded-full px-6 py-3 text-primary text-sm hover:bg-primary/10 transition-colors"
          >
            Download CV
          </a>

          <a
            href="#about"
            className="inline-block border border-primary/30 rounded-full px-6 py-3 text-primary text-sm hover:bg-primary/10 transition-colors"
          >
            Explore My Work ↓
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;