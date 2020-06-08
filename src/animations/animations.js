const animateTransition = {
  duration: 1,
  ease: "easeOut",
};

const exitTransition = {
  duration: 1,
  ease: "easeIn",
};

export const fadeInFadeOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: animateTransition },
  exit: { opacity: 0, transition: exitTransition },
};

export const slideInSlideOut = {
  initial: { opacity: 0, y: 2000 },
  animate: { opacity: 1, y: 0, transition: animateTransition },
  exit: { opacity: 0, y: 2000, transition: exitTransition },
};

export const slideInSlideOutLeft = {
  initial: { opacity: 0, x: 2000 },
  animate: { opacity: 1, x: 0, transition: animateTransition },
  exit: { opacity: 0, x: 2000, transition: exitTransition },
};

export const homePageMenu = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: (index) => {
    return {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * index,
        type: "spring",
        mass: 0.8,
      },
    };
  },
  exit: (index) => {
    return {
      x: 100,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        delay: 0.1 * index + 0.2,
      },
    };
  },
};
