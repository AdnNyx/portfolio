import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useCustomAnimations = () => {
  let ctx: gsap.Context;

  const initContext = () => {
    if (!ctx && import.meta.client) {
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {});
    }
  };

  // Blur Animation
  const animateBlurReveal = (target: string, delay: number = 0) => {
    initContext();
    ctx.add(() => {
      gsap.fromTo(
        target,
        { opacity: 0, scale: 1.1, filter: "blur(15px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.8,
          ease: "power4.out",
          delay,
        },
      );
    });
  };

  // Slide Animation
  const animateSlide = (
    target: string | string[],
    xOffset: number = 0,
    yOffset: number = 0,
    delay: number = 0,
    stagger: number = 0,
    triggerElement?: string,
  ) => {
    initContext();
    ctx.add(() => {
      const config: gsap.TweenVars = {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: delay,
        stagger: stagger,
      };

      if (triggerElement) {
        config.scrollTrigger = {
          trigger: triggerElement,
          start: "top 80%",
        };
      }

      gsap.fromTo(target, { opacity: 0, x: xOffset, y: yOffset }, config);
    });
  };

  const animateFadeStagger = (
    targets: string | string[],
    delay: number = 0,
    triggerElement?: string,
  ) => {
    initContext();
    ctx.add(() => {
      const config: gsap.TweenVars = {
        opacity: 1,
        duration: 1.0,
        stagger: 0.2,
        ease: "linear",
        delay,
      };

      if (triggerElement) {
        config.scrollTrigger = {
          trigger: triggerElement,
          start: "top 80%",
        };
      }

      gsap.fromTo(targets, { opacity: 0 }, config);
    });
  };

  // Scroll Scrub Animation
  const animateTextScrub = (
    trigger: string,
    target: string,
    highlightColor: string,
  ) => {
    initContext();
    ctx.add(() => {
      gsap.to(target, {
        color: highlightColor,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top 80%",
          end: "bottom 70%",
          scrub: 0.5,
        },
      });
    });
  };

  const cleanupAnimations = () => {
    if (ctx) ctx.revert();
  };

  return {
    animateBlurReveal,
    animateSlide,
    animateFadeStagger,
    animateTextScrub,
    cleanupAnimations,
  };
};
