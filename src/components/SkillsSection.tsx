import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { useState } from "react";

const skills = [
  { name: "AWS", color: "#FF9900", category: "Cloud" },
  { name: "Docker", color: "#2496ED", category: "Containers" },
  { name: "Kubernetes", color: "#326CE5", category: "Orchestration" },
  { name: "Linux", color: "#FCC624", category: "OS" },
  { name: "GitHub", color: "#181717", category: "Version Control" },
  { name: "Jenkins", color: "#D24939", category: "CI/CD" },
  { name: "Terraform", color: "#7B42BC", category: "IaC" },
  { name: "Python", color: "#3776AB", category: "Programming" },
];

const Skill3DCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative h-64 glass-effect rounded-2xl overflow-hidden group cursor-pointer"
      style={{
        boxShadow: hovered
          ? `0 0 30px ${skill.color}40, 0 0 60px ${skill.color}20`
          : "none",
      }}
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color={skill.color} intensity={1} />
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Center>
              <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={0.5}
                height={0.2}
                curveSegments={12}
              >
                {skill.name.charAt(0)}
                <meshStandardMaterial color={skill.color} />
              </Text3D>
            </Center>
          </Float>
        </Canvas>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent z-10">
        <h3 className="text-2xl font-bold text-foreground mb-1">{skill.name}</h3>
        <p className="text-sm text-muted-foreground">{skill.category}</p>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 0.1 : 0 }}
        style={{
          background: `radial-gradient(circle at center, ${skill.color}, transparent)`,
        }}
      />
    </motion.div>
  );
};

export const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="relative py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow-purple">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Skill3DCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-radial from-neon-cyan/5 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
};
