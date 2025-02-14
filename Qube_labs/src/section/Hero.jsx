import React from "react";

import herovid from "../assets/QL-web-v7_opt.gif";
import Particles from "react-tsparticles";
import { anim, ScrollReveal } from "../container/ScrollReveal";

const particle = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    color: {
      value: "#1092B2",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#1092B2",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1092B2",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  // interactivity: {
  //   detect_on: "canvas",
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "grab",
  //     },
  //     onclick: {
  //       enable: true,
  //       mode: "push",
  //     },
  //     resize: true,
  //   },
  //   modes: {
  //     grab: {
  //       distance: 140,
  //       line_linked: {
  //         opacity: 1,
  //       },
  //     },
  //     bubble: {
  //       distance: 400,
  //       size: 40,
  //       duration: 2,
  //       opacity: 8,
  //       speed: 3,
  //     },
  //     repulse: {
  //       distance: 200,
  //       duration: 0.4,
  //     },
  //     push: {
  //       particles_nb: 4,
  //     },
  //     remove: {
  //       particles_nb: 2,
  //     },
  //   },
  // },
  retina_detect: true,
};

export default function Hero() {
  return (
    <section className="flex items-center py-8 container-xxl min-h-[75vh] lg:min-h-[auto]">
      <div className="row items-center w-full">
        <div className="col relative w-full md:w-6/12">
          <ScrollReveal config={anim.animate5}>
            <h1 className="text-6xl font-bold leading-[1.2]">
              <span className="text-primary">Qubelabs</span> partners with high-potential blockchain projects.
            </h1>
          </ScrollReveal>
          <ScrollReveal config={anim.animate7}>
            <p className="mt-6 text-sm">
            Your trusted partner for blockchain consultancy and validating services of Web 3.0 Ecosystem. We are passionate about building communities from the ground up by providing both technical and marketing support to projects we work with.
            </p>
          </ScrollReveal>
          <ScrollReveal config={anim.animate11}>
            <a className="btn is-primary mt-4"  href="#features" >Learn more</a>
          </ScrollReveal>
        </div>
        <div className="col relative w-6/12 hidden md:block">
          <Particles canvasClassName="w-full h-full absolute top-0" options={particle} />
          <img className="relative w-10/12 mx-auto" src={herovid} alt="" />
        </div>
      </div>
    </section>
  );
}
