import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { Box, Float, MeshDistortMaterial } from "@react-three/drei";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Cloud Infrastructure Automation",
    description: "Automated AWS infrastructure deployment using Terraform and GitLab CI/CD, reducing deployment time by 70%.",
    tech: ["AWS", "Terraform", "GitLab CI", "Python"],
    color: "#00D9FF",
  },
  {
    title: "Kubernetes Multi-Cluster Management",
    description: "Designed and implemented multi-cluster Kubernetes architecture serving 1M+ requests/day with 99.99% uptime.",
    tech: ["Kubernetes", "Helm", "Prometheus", "Grafana"],
    color: "#9D4EDD",
  },
  {
    title: "CI/CD Pipeline Modernization",
    description: "Migrated legacy deployment system to modern GitOps workflow, improving deployment frequency by 10x.",
    tech: ["Jenkins", "ArgoCD", "Docker", "GitHub Actions"],
    color: "#3B82F6",
  },
  {
    title: "Observability Platform",
    description: "Built comprehensive monitoring and logging solution using ELK stack and custom Prometheus exporters.",
    tech: ["ELK Stack", "Prometheus", "Grafana", "FluentD"],
    color: "#F59E0B",
  },
];

const Project3DBox = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Box args={[2, 1.2, 0.1]}>
          <MeshDistortMaterial color="#9D4EDD" distort={0.2} speed={2} />
        </Box>
      </Float>
    </Canvas>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group"
    >
      <div className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 h-full">
        {/* 3D Background */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0">
            <Project3DBox />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${project.color}30, transparent)`,
              opacity: hovered ? 1 : 0.5,
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full glass-effect text-foreground border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              size="sm"
              variant="outline"
              className="glass-effect border-primary hover:bg-primary/10"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          </div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: `0 0 40px ${project.color}40, inset 0 0 40px ${project.color}10`,
          }}
        />
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="relative py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Some of my recent work and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
