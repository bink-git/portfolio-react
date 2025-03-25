import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { MotionDiv } from '../ui/motion-div';
import '../../App.css';
import Spline from '@splinetool/react-spline';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 "
    >
      <div className="gradient absolute -z-10"></div>

      <div className="flex items-center justify-between gap-4 relative z-10">
        <div className="container max-w-4xl flex flex-col items-start z-10">
          <MotionDiv animation="fade-in" duration={800}>
            <p className="text-primary font-medium mb-3  text-white">
              Hello, my name is
            </p>
          </MotionDiv>

          <MotionDiv animation="slide-up" delay={300} duration={800}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-white ">
              Ivan Bahniuk
            </h1>
          </MotionDiv>

          <MotionDiv animation="slide-up" delay={500} duration={800}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8  text-white text-left">
              Building elegant, responsive, and performant web applications with
              modern technologies. Focused on creating exceptional user
              experiences through clean code and thoughtful design.
            </p>
          </MotionDiv>

          <MotionDiv animation="slide-up" delay={600} duration={800}>
            <div className="flex flex-wrap gap-4">
              <div className="relative gradient-border inline-block p-[2px] rounded-full  ">
                <Button className="relative px-6 py-2  text-white bg-gray-900 rounded-full shadow-md hover:bg-gray-800">
                  <a href="#contact">Get in touch</a>
                </Button>
              </div>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6"
              >
                <a href="#projects">View my work</a>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv animation="fade-in" delay={800} duration={800}>
            <div className="flex items-center gap-6 mt-12">
              <a
                href="https://github.com/bink-git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-foreground transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-bahniuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:mailto:bahniuk.dev@gmail.com"
                className="text-white hover:text-foreground transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </MotionDiv>
        </div>

        <div className="w-full xl:h-[550px] hidden xl:block z-0">
          <Spline scene="https://prod.spline.design/mojtcykraVNcSkY5/scene.splinecode" />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white hover:text-foreground transition-colors duration-1000"
        aria-label="Scroll down"
      >
        <ChevronDown size={30} />
      </a>
    </section>
  );
}
