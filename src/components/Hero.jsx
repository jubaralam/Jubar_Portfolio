import React from "react";
// import { motion } from 'framer-motion'
// import { slideIn } from "../utils/motion";
// import {ComputersCanvas } from './canvas'
import { styles } from "../styles";
import { profile_pic } from "../assets";
const Hero = () => {
  const resumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1ypFztdWl5rhXDATu7XjPvENLAIfG-ZxA/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <section className=" flex relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5  `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            This is <span className="text-[#915eff]">Jubar</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 `}>
            {" "}
            MERN Stack Developer <br className="sm:block hidden" /> Frontend |
            Backend
          </p>

          <button
            type="submit"
            onClick={resumeDownload}
            className="mt-7 bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            Resume
          </button>
        </div>
        {/* Fixme: i have to fix 3d computer component <ComputersCanvas />  */}

        <div className="flex flex-end border-2 bg-tertiary rounded-t-full shadow-xl  hover:drop-shadow-2xl mx-auto mt-5 ">
          <img src={profile_pic} alt="Profile Picture" className="w-[250px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
