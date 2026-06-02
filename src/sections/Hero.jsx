import {Button} from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Tailwind CSS",
  "Figma",
  "Detail-Oriented",
  "Dynamic",
  "Problem Solver",
  "Quick Learner",
  "Adaptable",
  "Collaborative",
  "Creative",
  "Open-Minded",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/Toulon.JPG"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in animation-delay-100"
              style={{ animationDuration: "1.2s" }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Jr Software Developer
            </span>

            {/* Headline */}
            <div className="space-y-4 mt-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-300" style={{ animationDuration: "1.2s" }}>
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p
                className="mt-4 text-lg text-muted-foreground max-w-lg text-secondary animate-fade-in animation-delay-500"
                style={{ animationDuration: "1.2s" }}
              >
                I specialize in creating user-friendly interfaces and seamless
                experiences that drive engagement and satisfaction.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex items-center gap-6 animate-fade-in animation-delay-700" style={{ animationDuration: "1.2s" }}>
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-4 h-4 z-100" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="mt-8 ml-6 flex items-center gap-4 animate-fade-in animation-delay-1000" style={{ animationDuration: "1.2s" }}>
              <a href="https://github.com/MouradTgit" target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium glow-text-highlight transition-all duration-300 hover:underline hover:text-[var(--color-highlight)]"
                >
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mourad-toure-1494203b0/" target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium glow-text-highlight transition-all duration-300 hover:underline hover:text-[var(--color-highlight)]"
                >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-fade-in animation-delay-1000" style={{ animationDuration: "1.2s" }}>
            {/* Profile Image */}
            <div className="relative overflow-hidden w-140 h-120 mx-auto">
              <div>
                <img 
                  src="/PaperMourad.jpg" 
                  alt="Mourad Toure" 
                  className="w-full h-full aspect-[4/5] object-cover rounded-full" 
                />

                {/* Floating Badge */}
                {/* Stats Badge */}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section (moved outside the 2-column grid) */}
        <div className="mt-20 animate-fade-in animation-delay-1000" style={{ animationDuration: "1.2s" }}>
          <p>My Skills</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
