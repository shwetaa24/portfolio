import { CustomCursor } from "@/components/CustomCursor";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navigation } from "@/components/Navigation";
import { Hero3D } from "@/components/Hero3D";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden" id="home">
      <CustomCursor />
      <ParticleBackground />
      <Navigation />
      
      <main>
        <Hero3D />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-border/30">
        <p className="text-muted-foreground">
          © 2025 Shweta Jadhav. Built with React, Three.js & Framer Motion
        </p>
      </footer>
    </div>
  );
};

export default Index;
