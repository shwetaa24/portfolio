import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // NEW LOGIC: Detects hover on ANY button dynamically
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the element we are over is a button, link, or inside one
      const isInteractive = 
        target.matches("a, button, [role='button'], input") ||
        target.closest("a, button, [role='button']");

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-cyan rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isVisible ? 1 : 0, // Hides cursor until you move mouse
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 1000,
          mass: 0.40,
        }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-neon-cyan rounded-full pointer-events-none z-[9998]"
        style={{
          boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.5)",
        }}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1, // Will now expand on your Project buttons!
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 16,
          stiffness: 650,
          mass: 0.4,
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 bg-neon-cyan rounded-full pointer-events-none z-[9997] opacity-20 blur-xl"
        animate={{
          x: position.x - 32,
          y: position.y - 32,
          scale: isHovering ? 1.2 : 1,
          opacity: isVisible ? 0.2 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 450,
          mass: 0.55,
        }}
      />
    </>
  );
};