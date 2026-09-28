import { motion, useReducedMotion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({ children, className = "", delay = 0, once = true }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once, amount: 0.18 }}
      transition={shouldReduceMotion ? { duration: 0 } : { delay }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
