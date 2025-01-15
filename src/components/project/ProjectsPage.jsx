import React from "react";
// import { Tilt } from "react-tilt";
import Works from "../Works";
import Navbar from "../Navbar";
import ProjectCard from "../ProjectCard";
import { projects } from "../../constants";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
// import { SectionWrapper } from "../../hoc";
const ProjectsPage = () => {
  return (
    <>
      <div className="relative z-0 bg-primary min-h-screen">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Works />
          <section className=" flex relative w-full h-auto min-h-screen mx-auto overflow-hidden ">
            <div
              className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto  `}
            >
              <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>
                  Projects, I have done so far
                </p>
                <h2 className={styles.sectionHeadText}>MERN STACK.</h2>
              </motion.div>
              <div className="mt-20 flex flex-wrap gap-7  w-full">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
