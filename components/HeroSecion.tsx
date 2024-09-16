"use client";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/utils/cn";
import { Highlight } from './ui/Highlight';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import React, { useState } from "react";
import { Spotlight } from './ui/Spotlight';

export const HeroHighlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative h-[40rem] flex items-center bg-white dark:bg-transparent justify-center w-full group", className)}>
      {children}
    </div>
  );
};

export const HeroSection = ({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) => {
  const [showButton, setShowButton] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <HeroHighlight className={containerClassName}>
      {/* Spotlight Effects */}
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
      <Spotlight className='top-10 left-full h-[80vh] -[50vw]' fill="purple" />
      <Spotlight className='top-28 left-80 h-[80vh] -[50vw]' fill="blue" />

      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />

      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className="relative z-20 text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            onComplete: () => setShowButton(true), // Show button after text animation
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto"
        >
          Innovation isn&apos;t just an idea. It&apos;s a journey, a transformation, a{" "}
          <Highlight className="text-black dark:text-white">
          vision, of a vision, of a vision.
          </Highlight>
        </motion.h1>
        {showButton && ( // Conditionally render the button
          <a href="#about" className="mt-8 block">
            <MagicButton
              title="Discover Our Works"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        )}
      </div>
    </HeroHighlight>
  );
};

export default HeroSection;
