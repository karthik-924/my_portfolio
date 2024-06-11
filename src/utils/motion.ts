const textVariant = (delay: number): {
  hidden: { y: number; opacity: number };
  show: {
    y: number;
    opacity: number;
    transition: { type: string; duration: number; delay: number };
  };
} => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (direction: string, type: string, delay: number, duration: number): {
  hidden: { x: number; y: number; opacity: number };
  show: {
    x: number;
    y: number;
    opacity: number;
    transition: { type: string; delay: number; duration: number; ease: string };
  };
} => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const zoomIn = (delay: number, duration: number): {
  hidden: { scale: number; opacity: number };
  show: {
    scale: number;
    opacity: number;
    transition: { type: string; delay: number; duration: number; ease: string };
  };

} => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const slideIn = (direction: string, type: string, delay: number, duration: number): {
  hidden: { x: string|number; y: string|number };
  show: {
    x: number;
    y: number;
    transition: { type: string; delay: number; duration: number; ease: string };
  };

} => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const slideInText = (direction: string, delay: number): {
  hidden: { x: number; y: number; opacity: number };
  show: {
    x: number;
    y: number;
    opacity: number;
    transition: { type: string; delay: number; duration: number; ease: string };
  };
} => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: 1.25,
        ease: "easeOut",
      },
    },
  };
};

const staggerContainer = (staggerChildren: number, delayChildren: number): {
  hidden: object;
  show: {
    transition: { staggerChildren: number; delayChildren: number };
  };
} => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export {
  textVariant,
  fadeIn,
  zoomIn,
  slideIn,
  staggerContainer,
  slideInText,
};
