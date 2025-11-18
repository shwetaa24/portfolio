import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Cloud, Terminal, Zap } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Expert in AWS, Azure, and GCP cloud platforms with focus on scalability and cost optimization.",
  },
  {
    icon: Terminal,
    title: "DevOps Excellence",
    description: "CI/CD pipelines, infrastructure as code, and automated deployment workflows.",
  },
  {
    icon: Code2,
    title: "Container Orchestration",
    description: "Kubernetes expert with experience in Docker, microservices, and service mesh.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "System monitoring, performance tuning, and incident response strategies.",
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate DevOps engineer specializing in cloud infrastructure, automation, and continuous delivery.
            With years of experience in building and maintaining scalable systems, I help organizations transform their
            development workflows and infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl hover:box-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative gradient */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};
