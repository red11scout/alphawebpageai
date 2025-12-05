import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface InteractiveHeaderProps {
  title: string;
  highlight: string;
  subtitle: string;
}

export default function InteractiveHeader({ title, highlight, subtitle }: InteractiveHeaderProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="relative group rounded-xl p-8 overflow-hidden text-center mb-16"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(2, 162, 253, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {title} <span className="text-destructive inline-block animate-pulse">{highlight}</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
