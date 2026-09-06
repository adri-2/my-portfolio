import { motion } from "framer-motion";

const SHAPES = [
  { className: "background-orb background-orb--one", duration: 18 },
  { className: "background-orb background-orb--two", duration: 24 },
  { className: "background-ring background-ring--one", duration: 28 },
  { className: "background-ring background-ring--two", duration: 34 },
];

function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="technical-grid" />
      <div className="background-vignette" />
      {SHAPES.map((shape, index) => (
        <motion.span
          key={shape.className}
          className={shape.className}
          animate={{
            x: index % 2 === 0 ? [0, 22, -12, 0] : [0, -18, 16, 0],
            y: index % 2 === 0 ? [0, -16, 12, 0] : [0, 14, -10, 0],
            rotate: index % 2 === 0 ? [0, 8, -4, 0] : [0, -6, 5, 0],
            opacity: [0.26, 0.45, 0.24, 0.26],
          }}
          transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <span className="background-crosshair background-crosshair--one" />
      <span className="background-crosshair background-crosshair--two" />
      <span className="background-line background-line--one" />
      <span className="background-line background-line--two" />
    </div>
  );
}

export default AnimatedBackground;
