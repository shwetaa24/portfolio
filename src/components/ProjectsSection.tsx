import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { Box, Float, MeshDistortMaterial } from "@react-three/drei";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "VerifyChain: Authenticity System",
    description: "Decentralized supply chain DApp using Ethereum smart contracts to eliminate counterfeits. Features QR verification and immutable product history.",
    tech: ["Solidity", "React", "Hardhat", "Ethers.js"],
    color: "#00D9FF",
    repo: "https://github.com/shwetaa24/blockchainapp",
    demo: "https://blockchainapp-amber.vercel.app/",
  },
  {
    title: "ApexCraft: 3D Voxel Engine",
    description: "Immersive browser-based 3D sandbox game featuring physics-based movement, collision detection, and dynamic terrain modification. Built to demonstrate high-performance WebGL rendering.",
    tech: ["React", "Three.js", "React Three Fiber", "Zustand"],
    color: "#9D4EDD",
    repo: "https://github.com/shwetaa24/apexcraft",
    demo: "https://apexcraft.netlify.app/",
  },
  {
    title: "CI/CD Pipeline Modernization",
    description: "Migrated legacy deployment system to modern GitOps workflow, improving deployment frequency by 10x.",
    tech: ["Jenkins", "ArgoCD", "Docker", "GitHub Actions"],
    color: "#3B82F6",
    repo: "https://github.com/shwetaa24",
    demo: null,
  },
  {
    title: "Observability Platform",
    description: "Built comprehensive monitoring and logging solution using ELK stack and custom Prometheus exporters.",
    tech: ["ELK Stack", "Prometheus", "Grafana", "FluentD"],
    color: "#F59E0B",
    repo: "https://github.com/shwetaa24",
    demo: null,
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
      className="relative group h-full w-full"
    >
      <div className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col relative">
        
        {/* 3D Background - pointer-events-none ensures clicks pass through to buttons */}
        <div className="relative h-48 w-full overflow-hidden shrink-0 pointer-events-none">
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
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs md:text-sm rounded-full glass-effect text-foreground border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons - z-[50] and pointer-events-auto ensures they are ALWAYS clickable */}
          <div className="flex gap-3 mt-auto relative z-[50]">
            {project.repo && (
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 cursor-pointer block"
                onClick={(e) => e.stopPropagation()} 
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full glass-effect border-primary hover:bg-primary/10 pointer-events-auto"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              </a>
            )}

            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 cursor-pointer block"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 pointer-events-auto"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </a>
            )}
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
    <section id="projects" className="relative py-20 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-glow">
            My Work
          </h2>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};