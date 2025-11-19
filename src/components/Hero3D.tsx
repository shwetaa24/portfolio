import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Torus, Box } from "@react-three/drei";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingObjects = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Torus args={[1, 0.4, 16, 100]} position={[-3, 1, 0]}>
          <MeshDistortMaterial color="#00D9FF" distort={0.4} speed={2} />
        </Torus>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box args={[1.5, 1.5, 1.5]} position={[3, -1, -2]}>
          <MeshDistortMaterial color="#9D4EDD" distort={0.3} speed={2} />
        </Box>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={2.5}>
        <Sphere args={[0.8, 32, 32]} position={[0, -2, -1]}>
          <MeshDistortMaterial color="#00D9FF" distort={0.5} speed={1.5} />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2}>
        <Torus args={[0.6, 0.2, 16, 100]} position={[2, 2, -3]}>
          <MeshDistortMaterial color="#3B82F6" distort={0.3} speed={2.5} />
        </Torus>
      </Float>
    </>
  );
};

export const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9D4EDD" />
          <FloatingObjects />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
            Shweta Jadhav
          </h1>
          <p className="text-2xl md:text-4xl mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent font-semibold">
            DevOps Engineer & Cloud Architect
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transforming infrastructure with AWS, Kubernetes, and cutting-edge DevOps practices.
            Building scalable, automated, and secure cloud solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="box-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect border-primary text-foreground hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://github.com/shwetaa24"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-neon-cyan transition-colors duration-300"
            >
              <Github className="h-7 w-7" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shweta-jadhav-3aa652361/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-neon-cyan transition-colors duration-300"
            >
              <Linkedin className="h-7 w-7" />
            </motion.a>
            <motion.a
              href="mailto:shwetajadhav2324@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-neon-cyan transition-colors duration-300"
            >
              <Mail className="h-7 w-7" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </section>
  );
};
