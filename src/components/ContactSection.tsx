import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const GlobeModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9D4EDD" />
      <Sphere args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#00D9FF"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shwetajadhav2324@gmail.com",
    href: "mailto:shwetajadhav2324@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7218834640",
    href: "tel:+917218834640",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolhapur, Maharashtra",
    href: "#",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useIsMobile();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formValues.name || !formValues.email || !formValues.message) {
      toast({
        title: "Missing information",
        description: "Please fill out every field before sending your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/shwetajadhav2324@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
          _subject: "New portfolio inquiry",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormValues({ name: "", email: "", message: "" });
      toast({
        title: "Message sent",
        description: "Thanks! Your message is on its way to my inbox.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "I couldn't send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 overflow-hidden md:px-6 lg:px-12"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow-purple">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div
          className={cn(
            "grid grid-cols-1 gap-10 items-stretch",
            "lg:grid-cols-2 lg:gap-12"
          )}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "glass-effect p-8 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.45)]",
              "lg:order-1",
              isMobile ? "order-2 px-6 py-6" : "order-1"
            )}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                  className="glass-effect border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="shwetajadhav2324@gmail.com"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                  className="glass-effect border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formValues.message}
                  onChange={handleChange}
                  required
                  className="glass-effect border-primary/20 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full box-glow bg-primary hover:bg-primary/90 font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div
              className={cn(
                "mt-8 grid gap-4",
                "sm:grid-cols-2",
                isMobile && "grid-cols-1"
              )}
            >
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 p-4 text-muted-foreground transition-colors duration-300 hover:border-neon-cyan/40 hover:text-neon-cyan"
                >
                  <div className="rounded-xl bg-primary/10 p-3">
                    <info.icon className="h-5 w-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={cn(
              "relative w-full",
              "lg:order-2",
              isMobile ? "order-1 h-[320px]" : "h-[420px] lg:h-[520px]"
            )}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10">
              <GlobeModel />
            </div>
            {/* Glow effect */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-neon-cyan/20 to-transparent blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
