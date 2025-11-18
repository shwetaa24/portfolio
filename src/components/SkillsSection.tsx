import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 10,
        z: 50,
      }}
      className="relative h-64 glass-effect rounded-2xl overflow-hidden group cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            `radial-gradient(circle at 0% 0%, ${skill.color}40, transparent)`,
            `radial-gradient(circle at 100% 100%, ${skill.color}40, transparent)`,
            `radial-gradient(circle at 0% 0%, ${skill.color}40, transparent)`,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 3D Letter */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-9xl font-bold"
          style={{
            color: skill.color,
            textShadow: `0 0 30px ${skill.color}80, 0 0 60px ${skill.color}40`,
            transform: "translateZ(30px)",
          }}
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {skill.name.charAt(0)}
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent z-10">
        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-glow transition-all duration-300">
          {skill.name}
        </h3>
        <p className="text-sm text-muted-foreground">{skill.category}</p>
      </div>

      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          boxShadow: `0 0 30px ${skill.color}60, inset 0 0 30px ${skill.color}20`,
        }}
      />

      {/* Particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: skill.color }}
            initial={{
              x: Math.random() * 100 + "%",
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: "-10%",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
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
