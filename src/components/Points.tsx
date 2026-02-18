import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  score: "Beginner" | "Intermediate" | "Advanced" | "Expert";
};

const loaderAnimation = (width: number) => ({
  hidden: { width: '0%' },
  show: {
    width: `${width}%`,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
});

const Points = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const scores = {
    "Beginner": 25,
    "Intermediate": 50,
    "Advanced": 75,
    "Expert": 100
  }
  return (
    <div className="w-full bg-gray-400 h-3 relative rounded-md">
      <motion.div
        ref={ref}
        className="absolute left-0 top-0 h-3 z-10 rounded-md bg-[rgb(9,188,9)] shadow-[0_2px_29px_rgba(9,188,9,1)]"
        variants={loaderAnimation(scores[props.score])}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      ></motion.div>
    </div>
  );
};

export default Points;
